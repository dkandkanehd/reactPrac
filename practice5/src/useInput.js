import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value,setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target : {value}
    } = event;
    
    let willUpdate = true;
    if(typeof validator === "function") {
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const noAt = (value) => !value.includes("@");
  const name = useInput("Mr.", noAt);

  return (
    <div>
      <h2>Hello</h2>
      <input placeholder='name' {...name} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
