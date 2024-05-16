import { createContext, useReducer, useContext } from 'react';
import composeReducer, { intailState } from '../composeReducer';

const ComposeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ComposeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(composeReducer, intailState);

  return (
    <ComposeContext.Provider value={{ state, dispatch }}>
      {children}
    </ComposeContext.Provider>
  );
};

export const useCompose = () => {
  return useContext(ComposeContext);
};
