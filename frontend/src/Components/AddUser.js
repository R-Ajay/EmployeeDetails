import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';

const AddUser = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();
    const path = '/';
    const saveProduct = (event) => {
        // event.preventDefault();
        setData(data.id);
        setData(data.userName);
        setData(data.userPhone);
        setData(data.userMail);
        setData(data.userAddress);
        setData(data.userProfileImg);
        axios.post("http://localhost:8080/user/add", data);
        UserService.saveProducts(data);
        navigate(path);
    }
    const onIdHandler = (event) => {
        const id = event.target.value;
        data.userId = id;

    }

    const onNameHandler = (event) => {
        const name = event.target.value;
        data.userName = name;

    }
    const onPhoneHandler = (event) => {
        const phone = event.target.value;
        data.userPhone = phone;
    }
    const onMailHandler = (event) => {
        const mail = event.target.value;
        data.userMail = mail;
    }
    const onAddressHandler = (event) => {
        const address = event.target.value;
        data.userAddress = address;
    }
    const onImageHandler = (event) => {
        const image = event.target.value;
        data.userProfileImg = image;
    }
    return (
            <form >
                <div className="field">
                    <label className="label">User Id:</label>
                    <input className="input" name="id" placeholder="Enter Id" type='number' defaultValue={data.id} onChange={onIdHandler} />
                </div>
                <div className="field">
                    <label className="label">User Name:</label>
                    <input className='input' name='productName' placeholder='Product Name' type="text" defaultValue={data.userName} onChange={onNameHandler} />
                </div>
                <div className="field">
                    <label  className="label">User Phone:</label>
                    <input className='input' name='productPrice' placeholder='Product Price' type="text" defaultValue={data.userPhone} onChange={onPhoneHandler} />
                </div>
                <div className="field">
                    <label  className="label">User Mail:</label>
                    <input className='input' name='productDescription' placeholder='Product Description' type="text" defaultValue={data.userMail} onChange={onMailHandler} />
                </div>
                <div className="field">
                    <label  className="label">User Address:</label>
                    <input className='input' name='productDescription' placeholder='Product Description' type="text" defaultValue={data.userAddress} onChange={onAddressHandler} />
                </div>
                <div className="field">
                    <label  className="label">User Image:</label>
                    <input className='input' name='productDescription' placeholder='Product Description' type="text" defaultValue={data.userProfileImg} onChange={onImageHandler} />
                </div>
                <div>
                    <br />

                    <button className='btn btn-success' onClick={() => {
                        const confirm = window.confirm("Do you want to save this product?")
                        if (confirm === true) {
                            saveProduct()
                        }
                    }}>Save</button> &nbsp; &nbsp;
                    <button className='btn btn-danger' onClick={() => navigate(path)} >cancel</button> &nbsp; &nbsp;
                </div>
            </form>

    );
}

export default AddUser;