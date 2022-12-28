import React, { CSSProperties } from 'react';

type Props = {
  score: number;
};

function RadialScore({ score }: Props) {
  const divStyles = {
    '--value': score.toString(),
    '--size': '8rem',
    '--thickness': '0.75rem',
  };
  return (
    <>
      <div className='radial-progress text-secondary' style={divStyles as CSSProperties}>
        {score}%
      </div>
    </>
  );
}

export default RadialScore;
