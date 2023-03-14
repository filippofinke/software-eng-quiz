import * as fs from "fs";
import PDFDocument from "pdfkit";
import questions from "../src/questions";

const doc = new PDFDocument({
  autoFirstPage: false,
});
doc.pipe(fs.createWriteStream("../public/questions.pdf"));

let categories = [...new Set(questions.map((q) => q.category))];

// Create index page with links to each category
doc.addPage();
doc.fontSize(30).text("Software Engineering and Development I");
doc.moveDown();
doc.fontSize(20).text("Index");
doc.moveDown();
categories.forEach((category) => {
  doc.fontSize(13).text(category, { goTo: `${category}` });
  doc.moveDown();
});

doc.moveDown(10);
doc
  .fontSize(10)
  .text(
    `Generated on ${new Date().toLocaleString("fr-CH")} with ${
      questions.length
    } questions`,
    {
      align: "center",
    }
  );

categories.forEach((category, index) => {
  doc.addPage();

  doc.fontSize(20).text(category, { underline: true, destination: category });
  doc.moveDown();
  questions
    .filter((q) => q.category === category)
    .forEach((q) => {
      doc.font("Times-Italic");
      doc.fontSize(13).text(q.question, {});
      doc.font("Times-Roman");
      doc.fontSize(12).text(q.answer, {});
      doc.moveDown();
    });
});

doc.end();
