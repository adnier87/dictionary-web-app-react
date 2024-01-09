import React, { useContext } from 'react';
import { FontContext } from '../contexts/font.context';
import { FontType } from '../constants';


const FontSelector: React.FC = () => {
  const { font, setFont } = useContext(FontContext);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFont = event.target.value;
    setFont(selectedFont);
  };

  return (
    <select name='font-selector' value={font} onChange={handleFontChange}>
      {Object.entries(FontType).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;