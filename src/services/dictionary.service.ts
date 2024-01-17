import axios from 'axios';
import { from } from 'rxjs';
import { catchError } from 'rxjs/operators';

class DictionaryService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
  private abortController = new AbortController();

  getDefinition(word: string) {
    const axiosRequest = axios.get(`${this.apiUrl}/${word}`, {
      signal: this.abortController.signal,
    });

    const observable = from(axiosRequest).pipe(
      catchError((error) => {
        console.error('Error fetching definition:', error);
        throw error;
      })
    );

    return {
      observable,
      abort: () => this.abortController.abort(),
    };
  }
}

export default DictionaryService;
