import React from 'react';
import book from './assets/book.svg';
import './App.scss';

import { FontProvider } from './contexts/font.context';
import FontSelector from './components/fonts-selector.component';
import ThemeSwitcher from './components/theme-switcher.component';
import { ThemeProvider } from './contexts/theme.context';

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <div className='container mx-auto pt-14'>
          <header className='w-full max-w-[737px] mx-auto flex justify-between'>
            <img src={book} alt='book' className='w-8 h-8' />
            <div className='flex items-center'>
              <FontSelector />
              <span className='mx-5 text-red-500'>|</span>
              <ThemeSwitcher />
            </div>
          </header>
          <main className='container mx-auto'>


          </main>
        </div>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;

