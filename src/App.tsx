import React from 'react';
import './App.css';
import AddStudent from './features/student/AddStudent';
import { Student } from './features/student/Student';
import Waga from './features/student/Waga';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Waga></Waga>
                <hr></hr>
                <Student></Student>
                <br></br>
                {/* <AddStudent></AddStudent> */}
            </header>
        </div>
    );
}

export default App;
