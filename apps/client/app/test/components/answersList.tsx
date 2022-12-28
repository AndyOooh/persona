import React, { useContext } from 'react';
import { TestContext } from '../context/test-provider';

// type Props = {
//   answerOptions: {
//     text: string;
//     score: number;
//   }[];
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   selected: number;
// };

function AnswersList() {
  const { answers, handleUpdateAnswers, page, currentQuestion } = useContext(TestContext);
  console.log('🚀  file: answersList.tsx:17  answers', answers);

  return (
    <>
      {currentQuestion.options.map((answer: any, index: number) => (
        <div
          key={answer.text}
          className='form-control flex justify-start items-start w-full rounded-lg hover:bg-primary-focus hover:text-secondary-content'>
          <label className='label cursor-pointer flex gap-2'>
            <input
              type='radio'
              name={index.toString()}
              value={answer.text}
              onChange={() => handleUpdateAnswers(index)}
              checked={answers[page - 1] === answer.score}
              // className='radio checked:bg-success checked:border-success'
              className='radio border-2 border-secondary checked:bg-secondary checked:border-secondary h-3 w-3'
            />
            <span className='label-text text-inherit'>{answer.text}</span>
          </label>
        </div>
      ))}
    </>
  );
}

export default AnswersList;
