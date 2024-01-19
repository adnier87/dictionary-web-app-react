import React from 'react';

import { ResultErrorUI } from '../interfaces';

interface ErrorProps {
  error: ResultErrorUI;
}

const ResultError: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="text-center pt-32">
      <div className='text-6xl' role="img" aria-label="confused-face">😕</div>
      <h1 className="mt-11 text-xl font-bold dark:text-white">{error.title}</h1>
      <p className="mt-6 text-lg text-neutral-500">{`${error.message} ${error.resolution}`}</p>
    </div>
  );
};

export default ResultError;
