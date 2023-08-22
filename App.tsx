import * as React from 'react';
import Main from './Main';
import {AuthProvider} from './src/contexts/AuthContext';
import {ThemeProvider} from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </ThemeProvider>
  );
}
