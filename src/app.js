// src/App.js

import React,{useState, useEffect} from 'react';
import WebsiteForm from './components/WebsiteForm';

function App() {
  return (
    <div className="App">
      <h1>Website Summarizer</h1>
      <WebsiteForm />
    </div>
  );
}

export default App;
