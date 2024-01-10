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
        <Listbox.Button className="w-28 cursor-default sm:text-sm text-left flex justify-between">
            <span>{FontType[font as keyof typeof FontType]}</span>
            <span><ChevronDownIcon className='w-5' /></span>
        </Listbox.Button>
        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {Object.entries(FontType).map(([key, value]) => (
            <Listbox.Option key={key} value={key} className={({ active }) => `${active ? 'text-white bg-blue-600' : 'text-gray-900'} cursor-default select-none relative`}>
              {value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default FontSelector;