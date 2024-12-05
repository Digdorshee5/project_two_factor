import React, { useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import { Link, Router, Routes, Route } from 'react-router-dom';
import Navbar_top from './components/Navbar_top';
function Form({ value, setValue }) {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        id: "",
        phoneNumber: "",
        email: "",
        address: "",
        role: "",
        duration: "",
        imageFile: null,
        joinDate: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevFormData) => {
            const newFormData = {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            };

            // Check conditions

            if (type === "checkbox" && checked && newFormData.password === newFormData.confirmPassword) {
                document.getElementById("submit").style.opacity = '1';
                document.getElementById("submit").style.cursor = 'default';
            }
            return newFormData;
        });

        console.log(value, name);
    };


    const handleFileChange = (e) => {
        setFormData({ ...formData, imageFile: e.target.files[0] });
    };
    /*     const submithandler = (e) => {//use to print all data in the console
            e.preventDefault(); // Prevent the default form submission behavior
    
            const {
                firstName,
                middleName,
                lastName,
                gender,
                id,
                phoneNumber,
                email,
                address,
                role,
                duration,
                imageFile,
                joinDate,
                password,
                confirmPassword,
                termsAccepted
            } = formData;
    
            console.log(
                firstName,
                middleName,
                lastName,
                gender,
                id,
                phoneNumber,
                email,
                address,
                role,
                duration,
                imageFile,
                joinDate,
                password,
                confirmPassword,
                termsAccepted
            );
            alert("Your data is submitted");
        }; */

    //reset button

    const resetForm = () => {
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            id: '',
            phoneNumber: '',
            email: '',
            address: '',
            role: '',
            duration: '',
            imageFile: '',
            joinDate: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false
        });
    };




    const labelStyle = {
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        fontSize: '28px',
        borderRadius: '10%',
        border: '2px solid aqua',
    };
    const text_body = {
        margin: '5px',
        paddingleft: '20px'
    };
    const second_text = {
        fontSize: '22px',
        paddingLeft: '20px',
        backgroundColor: "rgba(200, 200, 200, 0.25)"
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/data', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log(data);
        console.log(response);
        console.log({ formData });
        resetForm();
    };
    const back = () => {
        alert('back to the main page...');
        setValue(1);
        console.log("the value of value is:" + value);
    };
    const saveForm = () => {
        alert('all the data has been saved');
    };
    return (
        <div>
            <Navbar_top />
        <div className="container w-1/2 mx-auto">
            <div className='flex justify-center'>
                {/* <form onSubmit={handleSubmit}> */}
                < form onSubmit={handleSubmit}>
                    {/* top of the form */}
                    {/* <h1 className='text-red-700'>dfmsdkf</h1> */}
                    <Link to="/">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={back}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                back to main page
                            </span>
                        </button>
                    </Link>
                    <u>
                        <h1 style={{ textAlign: 'center', fontSize: '38px', fontFamily: 'Times New Roman' }}>Registration form</h1>
                    </u>
                    <hr style={{ borderColor: "black", borderTopWidth: '5px' }} />
                    <br />
                    <br />
                    {/* first name */}
                    <div className='container w-1/3 mx-auto flex-row items-center'>
                        <label htmlFor="first_name" style={labelStyle}>
                            first name:
                        </label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="enter first name" style={second_text} />
                        <br />
                        <br />
                        {/* middle name */}
                        <label htmlFor="middle_name" style={labelStyle}>
                            middle name:
                        </label>
                        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="enter middle name" style={second_text} />
                        <br />
                        <br />
                        {/* last name */}
                        <label htmlFor="last_name" style={labelStyle}>
                            last name:
                        </label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="enter last name" style={second_text} />
                        <br />
                        <br />
                        {/* gender choice */}
                        <label htmlFor="gender" style={labelStyle}>
                            choose your gender:
                        </label>
                        <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                        <label htmlFor="male" style={text_body}>male</label>
                        <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                        <label htmlFor="female">female</label>
                        <input type="radio" name="gender" value="others" checked={formData.gender === 'others'} onChange={handleChange} />
                        <label htmlFor="others">others</label>
                        <br />
                        <br />
                        {/* ID */}
                        <label htmlFor="id" style={labelStyle}>
                            enter your ID
                        </label>
                        <input type="number" name="id" value={formData.id} onChange={handleChange} placeholder="ID" style={second_text} />
                        <br />
                        <br />
                        {/* phone number */}
                        <label htmlFor="phoneNumber" style={labelStyle}>
                            phone number:
                        </label>
                        <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="phone number" style={second_text} />
                        <br />
                        <br />
                        {/* email */}
                        <label htmlFor="email" style={labelStyle}>
                            email:
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="enter correct email" style={second_text} />
                        <br />
                        <br />
                        {/* address */}
                        <label htmlFor="address" style={labelStyle}>
                            address:
                        </label>
                        <textarea
                            rows="1"
                            cols={140}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="full address"
                            style={second_text}
                        />
                        <br />
                        <br />
                        {/* role */}
                        <label htmlFor="role" style={labelStyle}>
                            choose your designation:
                        </label>
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="">select</option>
                            <option value="SDE">SDE</option>
                            <option value="CA">CA</option>
                            <option value="manager">manager</option>
                            <option value="senior SDE">senior SDE</option>
                            <option value="Ai ML engineer">Ai ML engineer</option>
                            <option value="non-tech">non-tech</option>
                            <option value="HR">HR</option>
                            <option value="others">others</option>
                        </select>
                        <br />
                        <br />
                        {/* duration */}
                        <label htmlFor="duration" style={labelStyle}>
                            enter the duration in this company:
                        </label>
                        <input type="number" placeholder="in months" name="duration" value={formData.duration} onChange={handleChange} style={second_text} />
                        <br />
                        <br />
                        {/* image */}
                        <label htmlFor="file" style={labelStyle}>
                            upload your image
                        </label>
                        <input type="file" name="file" accept="image/*" id="file" onChange={handleFileChange} />
                        <br />
                        <br />
                        {/* join date */}
                        <label htmlFor="joinDate" style={labelStyle}>
                            choose your joining date:
                        </label>
                        <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} style={text_body} />
                        <br />
                        <br />
                        {/* password */}
                        <label htmlFor="password" style={labelStyle}>
                            enter a strong password:
                        </label>
                        <input placeholder="enter the password" name="password" value={formData.password} onChange={handleChange} style={second_text} />
                        <br />
                        <br />
                        {/* confirm password */}
                        <label htmlFor="confirmPassword" style={labelStyle}>
                            confirm the password:
                        </label>
                        <input type="password" placeholder="again enter the password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={second_text} />
                        <br />
                        <br />
                        {/* terms and conditions */}
                        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                        <label htmlFor="terms_and_conditions" style={second_text}>
                            confirm information
                        </label>
                        <br />
                        <br />
                        {/* reset and submit button */}
                        <input type="reset" name="reset" id="reset" value="reset" onClick={resetForm} style={{ backgroundColor: 'rgb(207, 114, 98)' }} />
                        <input type="submit" name="submit" id="submit" value="submit" onClick={saveForm} style={{ backgroundColor: 'rgb(25, 219, 34)', marginLeft: '15vw', opacity: '0.6', cursor: 'not-allowed' }} />
                    </div>

                </form>
            </div>
        </div>
        </div>
    );
}

export default Form;