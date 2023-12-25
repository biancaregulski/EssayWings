import React from 'react';
import logo from './logo.svg';
import './App.css';
import WritingBoard from './components/writing-board';
import WritingDetails from './components/writing-details';
import WritingTree from './components/writing-tree';
import TextEditor from './components/text-editor';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="app-container">
      <header>
        <Sidebar />
      </header>
      {/* <WritingTree /> */}
      <TextEditor />
      <WritingBoard />
      {/* <WritingDetails /> */}
    </div>
  );
}

export default App;
