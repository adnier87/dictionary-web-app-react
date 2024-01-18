import React, { useContext } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FontContext } from '../contexts/font.context';
import { FontType } from '../constants';

const FontSelector: React.FC = () => {
  const { font, setFont } = useContext(FontContext);

  const handleFontChange = (selectedFont: string) => {
    setFont(selectedFont);
  };

  return (
    <Listbox value={font} onChange={handleFontChange}>
      <div className="relative">
        <Listbox.Button className="w-32 flex justify-between items-center">
            <span className='font-bold text-lg dark:text-white'>{FontType[font as keyof typeof FontType]}</span>
            <span><ChevronDownIcon className='w-5 text-secondary' /></span>
        </Listbox.Button>
        <Listbox.Options className="absolute w-full p-3 mt-3 overflow-auto text-base bg-white dark:bg-neutral-900 rounded-md shadow-lg shadow-primary dark:shadow-secondary max-h-60 z-40">
          {Object.entries(FontType).map(([key, value]) => (
            <Listbox.Option key={key} value={key} className={({ active, selected }) => `${selected ? 'font-bold ' : ''}${active ? 'font-bold text-secondary' : 'text-neutral-800 dark:text-white'}  text-lg cursor-default select-none relative`}>
              {value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default FontSelector;