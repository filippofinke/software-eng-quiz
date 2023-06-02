import questions from "../questions";

export type Question = { question: string; answer: string; category: string };

export type Quiz = {
  name: string;
  getQuestions: () => Question[];
};

export type QuestionWithStats = Question & {
  answeredRight: number;
  answeredWrong: number;
};

let savedQuestions = getSavedAnswers();

const categories = questions
  .map((q) => q.category)
  .filter((value, index, array) => array.indexOf(value) === index);

const quizzes = [
  ...categories.map((category) => {
    return {
      name: category,
      getQuestions: () =>
        questions
          .filter((q) => q.category === category)
          .sort(() => Math.random() - 0.5),
    };
  }),
  {
    name: "40 Random Questions",
    getQuestions: () => questions.sort(() => Math.random() - 0.5).slice(0, 40),
  },
  {
    name: "All",
    getQuestions: () => questions.sort(() => Math.random() - 0.5),
  },
];

export const getQuizByCategory = (name: string) => {
  return quizzes.find((quiz) => quiz.name === name);
};

export const getCategories = () => {
  return categories;
};

export const getQuizzes = () => {
  return quizzes;
};

export const saveAnswerStatus = (question: Question, correct: boolean) => {
  let q = savedQuestions.find((q) => q.question === question.question);
  if (q) {
    if (correct) {
      q.answeredRight++;
    } else {
      q.answeredWrong++;
    }
  }

  localStorage.setItem("questions", JSON.stringify(savedQuestions));
};

export const clearSavedAnswers = () => {
  localStorage.removeItem("questions");
  savedQuestions = getSavedAnswers();
};

export function getSavedAnswers(): QuestionWithStats[] {
  let questionsFromLocalStorage = localStorage.getItem("questions");
  if (!questionsFromLocalStorage) {
    return questions.map((q) => {
      return {
        ...q,
        answeredRight: 0,
        answeredWrong: 0,
      };
    });
  }

  return JSON.parse(questionsFromLocalStorage);
}
