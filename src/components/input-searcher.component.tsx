import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const InputSearcher: React.FC<{ handleTerm: (term: string) => void }> = ({ handleTerm }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    handleTerm(term);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='relative'>
      <input
        className="bg-[#F4F4F4] dark:bg-[#1F1F1F] text-neutral-800 dark:text-white rounded-md pr-10 pl-3 w-full h-12 border border-transparent focus-visible:border-purple-500 transition-colors duration-200 ease-in-out outline-0"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button className='absolute right-3 h-full' onClick={handleSearch} title="Search">
        <MagnifyingGlassIcon className="w-5 text-primary" />
      </button>
    </div>
  );
};

export default InputSearcher;
