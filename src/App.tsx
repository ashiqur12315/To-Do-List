import React from 'react';
import './App.css';
import Todo from './features/todos/Todo';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 font-roboto">
      <Todo></Todo>
    </div>
  );
}

export default App;
