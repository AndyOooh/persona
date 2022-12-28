import { CSSProperties } from 'react';

type Props = {};

const divStyles = {
  '--value': '65',
  '--size': '5rem',
  '--thickness': '0.75rem',
};

function Blog({}: Props) {
  return (
    <section 
    // className='bg-black main-height' 
    >
      <div className='radial-progress' style={divStyles as CSSProperties}>
        65%
      </div>
      <div className='radial-progress text-primary' style={divStyles as CSSProperties}>
        70%
      </div>
      <div
        className='radial-progress bg-primary text-primary-content border-4 border-primary'
        style={divStyles as CSSProperties}>
        70%
      </div>
      <div>
        {/* <div className='btn-group'>
          <input type='radio' name='options' data-title='1' className='btn' />
          <input type='radio' name='options' data-title='2' className='btn' checked />
          <input type='radio' name='options' data-title='3' className='btn' />
          <input type='radio' name='options' data-title='4' className='btn' />
        </div> */}
      </div>
      <ul className='menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box'>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
      <div className='btn-group'>
        <button className='btn'>1</button>
        <button className='btn btn-active'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>4</button>
        <button className='btn'>5</button>
      </div>
      <ul className='steps steps-vertical lg:steps-horizontal'>
        <li className='step step-primary'>Intro</li>
        <li className='step step-primary'>Q1</li>
        <li className='step'>Q2</li>
        <li className='step'>Q3</li>
        <li className='step'>Q4</li>
        <li className='step'>Q5</li>
        <li className='step'>Result</li>
      </ul>
      <ul className='steps steps-vertical lg:steps-horizontal'>
        <li className='step step-primary'></li>
        <li className='step step-primary'></li>
        <li className='step'></li>
        <li className='step'></li>
        <li className='step'></li>
      </ul>
      <div className='tabs'>
        <a className='tab tab-lifted'>Tab 1</a>
        <a className='tab tab-lifted tab-active'>Tab 2</a>
        <a className='tab tab-lifted'>Tab 3</a>
      </div>
      <div className='btn-group'>
        <button className='btn'>«</button>
        <button className='btn'>Page 22</button>
        <button className='btn'>»</button>
      </div>
      <div className='btn-group'>
        <button className='btn'>1</button>
        <button className='btn'>2</button>
        <button className='btn btn-disabled'>...</button>
        <button className='btn'>99</button>
        <button className='btn'>100</button>
      </div>
    </section>
  );
}

export default Blog;
