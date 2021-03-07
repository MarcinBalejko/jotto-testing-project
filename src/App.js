import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";

import Input from "./Input";

// Reducer to update state
function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
  );
}

export default App;
