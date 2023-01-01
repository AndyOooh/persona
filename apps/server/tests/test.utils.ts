export const getNewQuestion = (id: number) => {
  return {
    id: id,
    text: 'What is your favorite color?',
    options: [
      {
        text: 'Red',
        score: 0.5,
      },
      {
        text: 'Blue',
        score: 0.5,
      },
    ],
  };
};
