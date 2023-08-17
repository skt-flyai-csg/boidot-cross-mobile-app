import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  token: string | null;
  setTokenAndSave: (value: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function getTokenFromStorage() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        setToken(storedToken);
      }
    }

    getTokenFromStorage();
  }, []);

  async function setTokenAndSave(newToken: string) {
    setToken(newToken);
    await AsyncStorage.setItem('token', newToken);
  }

  return (
    <AuthContext.Provider value={{token, setTokenAndSave}}>
      {children}
    </AuthContext.Provider>
  );
};
