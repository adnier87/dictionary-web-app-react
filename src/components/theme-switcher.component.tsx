import React, { useContext } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../contexts/theme.context';
import { Theme } from '../constants';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        checked={theme === Theme.Dark}
        onChange={toggleTheme}
        className={`${
          theme === Theme.Dark ? 'bg-gray-600' : 'bg-gray-200'
        } shrink-0 relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out`}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${
            theme === Theme.Dark ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition duration-200 ease-in-out`}
        />
      </Switch>
      <MoonIcon className='w-5 ml-3' />
    </>
  );
};

export default ThemeSwitcher;
