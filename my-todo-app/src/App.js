import React from 'react';
import TaskApp from './components/TaskApp';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>TaskList</h1>
      <TaskApp />
    </div>
  );
}

export default App;