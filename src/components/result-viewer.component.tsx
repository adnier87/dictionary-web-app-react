import React from 'react';
import _ from 'lodash';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Meaning, Phonetic } from '../interfaces';

interface ResultViewerProps {
  data : {
    word:      string;
    meanings:  Meaning[];
    phonetics: Phonetic[];
    sourceUrls?: string[];
  }
}

const ResultViewer: React.FC<ResultViewerProps> = ({ data : { word, meanings, phonetics, sourceUrls = [] }}) => {
  const sources = new Set(sourceUrls);
  return (
    <section>
      <header className='my-11 flex'>
        <div>
          <h1 className="text-6xl font-bold text-neutral-800 dark:text-white">{ word }</h1>
          <p className='text-2xl text-secondary'>{phonetics[0].text}</p>
        </div>
      </header>
      <div>
        {meanings.map((meaning, index) => (
          <div key={index}>
            <header className='flex flex-wrap items-center my-5'>
              <h3 className="text-2xl font-bold leading-none italic mr-5 text-neutral-800 dark:text-white">{ meaning.partOfSpeech }</h3>
              <hr className='grow' />
            </header>
            <section className='py-5'>
              <h4 className='text-xl mb-5 text-neutral-500'>Meaning</h4>
              <ul className='list-disc pl-10'>
                {meaning.definitions.map((definition, index) => (
                  <li className='text-lg my-2 text-secondary' key={index}>
                    <span className='text-neutral-800 dark:text-white'>{ definition.definition }</span>
                    { !_.isEmpty(definition.example) && <div className='text-lg text-neutral-500'>"{ definition.example }"</div> }
                  </li>
                ))}
              </ul>
            </section>
            {!_.isEmpty(meaning.synonyms) && (
              <section className='flex'>
                <h4 className='text-xl mb-5 mr-5 text-neutral-500'>Synonyms</h4>
                <div>
                  {meaning.synonyms.map((synonym, index) => (
                    <span key={index} className='text-lg mr-2 font-bold hover:cursor-pointer hover:underline dark:text-white'>{ synonym }</span>
                  ))}
                </div>
              </section>
            )}
            {!_.isEmpty(meaning.antonyms) && (
              <section className='flex'>
                <h4 className='text-xl mb-5 mr-5 text-neutral-500'>Antonyms</h4>
                <div>
                  {meaning.antonyms.map((antonym, index) => (
                    <span key={index} className='text-lg mr-2 font-bold hover:cursor-pointer hover:underline dark:text-white'>{ antonym }</span>
                  ))}
                </div>
              </section>
            )}
          </div>
        ))}
      </div>
      <footer className='border-t pt-5'>
        {!_.isEmpty(sources) && (
          <div className='flex text-sm'>
            <div className='mr-5 text-neutral-500'>Sources</div>
            <ul>
              {Array.from(sources).map((url, index) => (
                <li key={index} className='text-neutral-800'>
                  <a href={url} target="_blank" rel="noopener noreferrer" className='flex items-center group'>
                    <span className='mr-1 group-hover:underline text-nuetral-800 dark:text-white'>{ url }</span>
                    <ArrowTopRightOnSquareIcon className="h-3.5 text-neutral-500" />
                  </a>
                </li>
              ))}
            </ul>
        </div>
        )}
      </footer>
    </section>
  );
};

export default ResultViewer;