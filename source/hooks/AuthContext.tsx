import React, {useReducer, useEffect, useMemo, createContext} from 'react';
import { View } from 'react-native';
import * as Interface from '../global/interfaces';
export const AuthContext = createContext({});

export const AuthProvider: React.FunctionComponent = ({children}) => {
  const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
  }

  const authReducer = (state: Interface.IInitialAuthState, action: Interface.IActions) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...state,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          isSignout: true,
          userToken: null,
        };
        default:
          return state;
      }
  }

  const [auth, setAuth] = useReducer(authReducer, initialState);
  
  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        setAuth({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: async () => setAuth({ type: 'SIGN_OUT', token: null }),
      signUp: async (data: any) => {
        setAuth({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={{auth, authContext}}>
      {children}
    </AuthContext.Provider>
  );
}

