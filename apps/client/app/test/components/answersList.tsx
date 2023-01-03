import React, { useContext } from 'react';
import { Option } from 'types';
import { TestContext } from '../context/test-provider';

function AnswersList() {
  const { answers, handleUpdateAnswers, page, currentQuestion } = useContext(TestContext);
  console.log('🚀  file: answersList.tsx:17  answers', answers);

  return (
    <div className='grid sm:auto-rows-fr w-full place-items-center items-stretch gap-1'>
      {currentQuestion?.options.map((option: Option, index: number) => (
        <div
          role='button'
          key={option.text}
          className={`form-control cursor-pointer items-start justify-center w-full rounded-lg btn-primary bg-transparent ${
            answers[Number(page) - 1] === option.score ? 'btn-active' : ''
          } `}
          onClick={() => handleUpdateAnswers(index)}>
          <label className='label cursor-pointer flex gap-2 sm:h-4em'>
            <input
              type='radio'
              readOnly
              name={index.toString()}
              value={option.text}
              checked={answers[Number(page) - 1] === option.score}
              className='radio border-2 border-secondary checked:bg-secondary checked:border-secondary h-3 w-3'
            />
            <span className='label-text text-inherit'>{option.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default AnswersList;
