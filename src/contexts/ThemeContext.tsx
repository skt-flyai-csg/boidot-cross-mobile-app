import React, {createContext, useContext, useState, ReactNode} from 'react';

interface Theme {
  primary: string;
  primaryHover: string;
  secondary: string;
  backgroundGeneral: string;
  backgroundHome: string;
  backgroundChat: string;
  backgroundGrey: string;
  box: string;
  text: string;
  textNavy: string;
  textGrey: string;
  textLightGrey: string;
  white: string;
  diaryTop: string;
  diaryBottom: string;
}

interface ThemeContextData {
  theme: Theme;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const initialTheme: Theme = {
  primary: '#4264EC',
  primaryHover: '#3B5AD4',
  secondary: '#3A4767',
  backgroundGeneral: '#F4F5F9',
  backgroundHome: '#BBE5FE',
  backgroundChat: '#171723',
  backgroundGrey: '#E8E9ED',
  box: '#22222C',
  text: '#171723',
  textNavy: '#07153C',
  textGrey: '#585F6F',
  textLightGrey: '#9DA3B1',
  white: '#FFFFFF',
  diaryTop: '#F36980',
  diaryBottom: '#FEA76A',
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};
