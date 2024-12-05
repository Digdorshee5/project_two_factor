import React from 'react';
import { Link } from 'react-router-dom';
import Navbar_top from './components/Navbar_top';

function Welcome({ value, setValue }) {

  function buttonPressed() {
    console.log("the value of value is from welcome page:" + value);
    alert('you are redirecting to another page');
    setValue(0);
  }

  return (
    <div>
      <Navbar_top/>
      {value === 1 && (
        <div>
          <h1 style={{ textAlign: 'center', backgroundColor: 'pink', color: 'black', fontSize: '40px' }}>
            welcome to our website😊😊
          </h1>
          <br />
          <br />
          <Link to="/search">
          <button
            name="search"
            id="search"
            style={{
              backgroundColor: 'lightgreen',
              color: 'black',
              marginLeft: '15vw',
              borderRadius: 10,
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 'medium'
            }}
          >
            <p style={{ fontSize: '30px' }}>search for existing</p>
          </button>
          </Link>
          <Link to="/form">
            <button
              name="create"
              id="create"
              style={{
                backgroundColor: 'lightcyan',
                color: 'black',
                marginLeft: '40vw',
                borderRadius: 10,
                borderColor: 'black',
                borderStyle: 'solid',
                borderWidth: 'medium'
              }}
              onClick={buttonPressed}
            >
              <p style={{ fontSize: '30px' }}>create new</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Welcome;
