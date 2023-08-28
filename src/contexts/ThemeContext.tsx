import React, {createContext, useContext, useState, ReactNode} from 'react';
import {ThemeProps} from '../types';
import {initialTheme} from '../styles/themeStyles';

interface ThemeContextData {
  theme: ThemeProps;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, _setTheme] = useState<ThemeProps>(initialTheme);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};
