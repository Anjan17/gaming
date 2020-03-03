import React from 'react';
import FlagWithName from "./FlagWithName";
// import './App.css';
import Card from "./Card";

function App() {
  return (
    <div>
      <Card>
        <FlagWithName countryFlag='green' name='Libya' />
        <FlagWithName countryFlag='red' name='Romania' />
      </Card>
    </div>
  );
}

export default App;
