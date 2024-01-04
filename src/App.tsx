import './App.css';
import WritingBoard from './components/writing-board';
import TextEditor from './components/text-editor';
import Sidebar from './components/sidebar';
import Editor from './components/editor';

function App() {
  return (
    <div className="app-container">
      <header>
        <Sidebar />
      </header>
      {/* <WritingTree /> */}
      {/* <TextEditor /> */}
      <Editor />
      <WritingBoard />
      {/* <WritingDetails /> */}
    </div>
  );
}

export default App;
