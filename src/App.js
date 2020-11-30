import React from 'react';
import './App.scss';
import GridController from './Controllers/GridController'
import mainimg from './logo1.jpg'


class App extends React.Component {
  render(){
    return (
      <div className="test-div">
        <header>
          <p>header</p>
        </header>
        <h1>main body</h1>
        {/* <img src={mainimg} alt="Logo" height="50%" width="50%"/> */}
        <GridController />
      </div>
    );
  }
}

export default App;
