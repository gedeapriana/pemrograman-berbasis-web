import React from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import Member from './components/member/Member';
import Task from './components/task/Task.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Member />
      <Task />
    </>
  );
}

export default App;
