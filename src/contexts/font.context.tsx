import React, { createContext, useState, SetStateAction } from 'react';
import { FontType } from '../constants';

const defaultFont = FontType.Serif;

// Define the type for the font context
type FontContextType = {
  font: string;
  setFont: React.Dispatch<SetStateAction<FontType>>;
};

// Create the font context
export const FontContext = createContext<FontContextType>({
  font: defaultFont,
  setFont: () => {},
});

// Create the font context provider component
export const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [font, setFont] = useState(defaultFont);

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};
