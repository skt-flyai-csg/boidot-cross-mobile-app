import * as React from 'react';
import Main from './Main';
import {AuthProvider} from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
