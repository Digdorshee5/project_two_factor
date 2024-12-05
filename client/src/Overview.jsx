import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar_top from './components/Navbar_top';

function Overview({ value, setValue }) {
  const [searchData, setSearchData] = useState({
    id: "",
    phoneNumber: "",
    email: "",
  });
  const [val, setVal] = useState(1);
  const [fetchedData, setFetchedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      [name]: value
    }));

    console.log(value, name);
  };

  const resetForm = () => {
    setSearchData({
      id: '',
      phoneNumber: '',
      email: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/search', {
      method: 'POST',
      body: JSON.stringify(searchData),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      alert('We found the values in the database');
      setFetchedData(data);
      setVal(0);
    }
    resetForm();
  };

  const back = () => {
    alert('Back to the main page...');
    setValue(1);
    console.log("The value of value is: " + value);
  };

  const prev = () => {
    alert('Back to the previous page...');
    setVal(1);
  };

  const labelStyle = {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    fontSize: '28px',
    borderRadius: '10%',
    border: '2px solid orange',
  };

  const second_text = {
    fontSize: '32px',
    paddingLeft: '20px',
    backgroundColor: "rgba(200, 200, 200, 0.25)",
    border: '2px dashed',
    borderRadius: '10%'
  };
  const third_text = {
    fontSize: '32px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'lightgreen',
    border: '2px solid',
    borderRadius: '10%',
    textAlign: 'center',
    marginRight: '20px',
    marginBottom: '20px'
  };
  const fourth_text = {
    fontSize: '32px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'lightcanes',
    border: '2px solid',
    borderRadius: '10%',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div>
      <Navbar_top/>
      {val === 1 && (
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center', backgroundColor: 'lightskyblue', color: 'black', fontSize: '40px', borderBottom: '5px dotted black' }}>
            Search the existing data 😊😊
          </h1>
          <h3 style={{ backgroundColor: 'lightsteelblue', textAlign: 'center', fontSize: '25px' }}>
            Please enter the details to let us find the person you want
          </h3>
          <br />
          <Link to="/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={back}>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                back to main page
              </span>
            </button>
          </Link>
          <br />
          <div style={{ textAlign: 'center' }}>
            <label style={second_text}>Enter the employee id</label>
            <br />
            <br />
            <input type="number" name="id" placeholder="ID" style={labelStyle} value={searchData.id} onChange={handleChange} />
            <br />
            <br />
            <label style={second_text}>Enter the mobile number</label>
            <br />
            <br />
            <input type="number" name="phoneNumber" placeholder="Phone number" style={labelStyle} value={searchData.phoneNumber} onChange={handleChange} />
            <br />
            <br />
            <label style={second_text}>Enter the mail-ID</label>
            <br />
            <br />
            <input type="email" name="email" placeholder="email" style={labelStyle} value={searchData.email} onChange={handleChange} />
            <br />
            <br />
            <input type="reset" name="reset" id="reset" value="reset" style={{ backgroundColor: 'rgb(207, 114, 98)', marginLeft: '2vw', fontSize: '30px', border: '3px solid black', borderRadius: '10%' }} onClick={resetForm} />
            <input type="submit" name="submit" id="submit" value="submit" style={{ backgroundColor: 'rgb(25, 219, 34)', marginLeft: '33vw', fontSize: '30px', border: '3px solid black', borderRadius: '10%' }} />
          </div>
        </form>
      )}
      {val === 0 && fetchedData && (
        <div>
          <h1 style={{ textAlign: 'center', backgroundColor: 'lightskyblue', color: 'black', fontSize: '40px', borderBottom: '5px dotted black' }}>Presentation Page</h1>
          <br />
          <br />
          <Link to="/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={back}>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                back to main page
              </span>
            </button>
          </Link>
          <br />
          
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={prev}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              back to search page
            </span>
          </button>
          <form style={{ textAlign: 'center' }}>
            <br />
            <br />
            <label style={third_text}>First Name:  </label><label style={fourth_text}> {fetchedData.firstName}</label><br />
            <br />
            <label style={third_text}>Middle Name:  </label><label style={fourth_text}>{fetchedData.middleName}</label><br />
            <br />
            <label style={third_text}>Last Name:  </label><label style={fourth_text}> {fetchedData.lastName}</label><br />
            <br />
            <label style={third_text}>Gender:  </label><label style={fourth_text}> {fetchedData.gender}</label><br />
            <br />
            <label style={third_text}>ID:  </label><label style={fourth_text}>{fetchedData.id}</label><br />
            <br />
            <label style={third_text}>Phone Number:  </label><label style={fourth_text}> {fetchedData.phoneNumber}</label><br />
            <br />
            <label style={third_text}>Email:  </label><label style={fourth_text}> {fetchedData.email}</label><br />
            <br />
            <label style={third_text}>Address:  </label><label style={fourth_text}> {fetchedData.address}</label><br />
            <br />
            <label style={third_text}>Role:  </label><label style={fourth_text}>{fetchedData.role}</label><br />
            <br />
            <label style={third_text}>Duration:  </label><label style={fourth_text}>{fetchedData.duration}</label><br />
            <br />
            <label style={third_text}>Join Date:  </label><label style={fourth_text}>{fetchedData.joinDate}</label>
          </form>
        </div>
      )}
      <br />
    </div>
  );
}

export default Overview;
