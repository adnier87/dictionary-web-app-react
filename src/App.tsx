import React from 'react';

import book from './assets/book.svg';
import './App.scss';
import { FontProvider } from './contexts/font.context';
import FontSelector from './components/fonts-selector.component';
import ThemeSwitcher from './components/theme-switcher.component';
import { ThemeContext, ThemeProvider } from './contexts/theme.context';
import SearcherView from './views/searcher.view';
import { Theme } from './constants';

function App() {

  return (
    <ThemeProvider>
      <FontProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div className={`${theme === Theme.Dark ? 'dark' : ''} min-h-screen`}>
              <div className='container mx-auto pt-14'>
                <header className='w-full max-w-[737px] mx-auto flex justify-between'>
                  <img src={book} alt='book' className='w-8 h-8' />
                  <div className='flex items-center divide-x'>
                    <div className='mr-5'><FontSelector /></div>
                    <div className='pl-5'><ThemeSwitcher /></div>
                  </div>
                </header>
                <main className='w-full max-w-[737px] mx-auto pt-12'>
                  <SearcherView />
                </main>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;

