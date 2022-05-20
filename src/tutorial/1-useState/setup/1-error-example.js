import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
    let t1 = document.getElementById('title').innerHTML = title;
  }
  return <React.Fragment>
    <h2 id='title'>{title}</h2>
    <button type='button' className='btn' onClick={handleClick} >
      change title
    </button>
  </React.Fragment>
};

export default ErrorExample;
 