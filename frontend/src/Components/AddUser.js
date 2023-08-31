import React, { useState } from "react";

import { Navigate, redirect, useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';

const AddUser = () => {

    const navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userProfileImg, setUserProfileImg] = useState(null);

    const saveProduct = (event) => {
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("userName", userName);
        formData.append("userPhone", userPhone);
        formData.append("userAddress", userAddress);
        formData.append("userMail", userMail);
        formData.append("userProfileImg", userProfileImg);
        UserService.saveUsers(formData);
        navigate("/");
    }


    return (
        <div>
           <header className="hero">
           <h1 className="title ">Please add your details</h1>
            <br />
           </header>
            <form className="" >
                <div className="container">
                    <div className="field">
                        <label className="label">User Id:</label>
                        <input className="input is-primary" name="userId" placeholder="Enter User id" type='number' onChange={(e) => setUserId(e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label">User Name:</label>
                        <input className='input is-primary' name='userName' placeholder='Enter User Name' type="text" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label">User Phone:</label>
                        <input className='input is-primary' name='userPhone' placeholder='Enter User Phone' type="text" onChange={(e) => setUserPhone(e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label">User Mail:</label>
                        <input className='input is-primary' name='userMail' placeholder='Enter User Mail' type="email" onChange={(e) => setUserMail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label">User Address:</label>
                        <input className='input is-primary' name='userAddress' placeholder='Enter User Address' type="text" onChange={(e) => setUserAddress(e.target.value)} />
                    </div>
                    <div className="field">
                        <label className="label"> Choose an image... </label>
                        <input className='input is-primary' name='userProfileImg' placeholder='UserProfileImage' type="file" onChange={(e) => setUserProfileImg(e.target.files[0])} />
                    </div>
                    <div>
                        <br />

                        <button className='button is-primary is-rounded has-text-weight-bold' onClick={() => {
                            const confirm = window.confirm("Do you want to save this user?")
                            if (confirm === true) {
                                saveProduct()
                            }
                        }}>Save</button> &nbsp; &nbsp;
                        <button className='button is-danger is-rounded has-text-weight-bold' onClick={() => { navigate("/"); }} >Cancel</button> &nbsp; &nbsp;
                    </div>
                </div >
            </form>
        </div>


    );
}

export default AddUser;