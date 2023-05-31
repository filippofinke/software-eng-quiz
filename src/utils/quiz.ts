import questions from "../questions";

export type Question = { question: string; answer: string; category: string };

export type Quiz = {
  name: string;
  getQuestions: () => Question[];
};

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
