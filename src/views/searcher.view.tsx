import React, { useEffect, useRef, useState } from 'react';
import { catchError, map } from 'rxjs';
import _ from 'lodash';

import DictionaryService from '../services/dictionary.service';
import InputSearcher from '../components/input-searcher.component';
import ResultViewer from '../components/result-viewer.component';
import { Meaning, Phonetic, ResultErrorUI } from '../interfaces';
import ResultError from '../components/result-error.component';

const dictionaryService = new DictionaryService();

const SearcherView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<ResultErrorUI>({
    title: '',
    message: '',
    resolution: '',
  });
  const [searchResults, setSearchResults] = useState<{word: string, meanings: Meaning[], phonetics: Phonetic[], sourceUrls?: string[]}>({
    word: '',
    meanings: [],
    phonetics: []
  });
  const abortRequest = useRef<(() => void) | null>(null);

  useEffect(() => {
    handleSearch();
    return () => {
      if (abortRequest.current) {
        abortRequest.current();
      }
    };
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm !== '') {
      const { observable, abort } = dictionaryService.getDefinition(searchTerm);
      abortRequest.current = abort;
      observable.pipe(
        map((data) => data.data),
        map(data => data.reduce((acc : any, curr : any) => {
            return {
              word: curr.word,
              meanings: [...acc.meanings, ...curr.meanings],
              phonetics: [...acc.phonetics, ...curr.phonetics],
              sourceUrls: [...acc.sourceUrls, ...curr.sourceUrls]
            }
          }, {
            word: '',
            meanings: [],
            phonetics: [],
            sourceUrls: []
          })
        ),
        catchError((err) => {
          throw err.response.data;
        })
      ).subscribe({
        next: (data) => {
          console.log(data);
          setSearchResults(data);
          setError({
            title: '',
            message: '',
            resolution: '',
          });
          abortRequest.current = null;
        },
        error: (err: ResultErrorUI) => {
          console.log(err)
          setSearchResults({
            word: '',
            meanings: [],
            phonetics: []
          });
          setError({...err});
          abortRequest.current = null;
        },
      });
    }
  };

  return (
    <div>
      <InputSearcher handleTerm={setSearchTerm} />
      {!_.isEmpty(searchResults.word) && (
        <ResultViewer data={searchResults} />
      )}
      {!_.isEmpty(error.title) && (
        <ResultError error={error} />
      )}
    </div>
  );
};

export default SearcherView;