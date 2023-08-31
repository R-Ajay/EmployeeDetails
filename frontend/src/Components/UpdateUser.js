import React, { useState ,useEffect} from "react";

import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../Service/UserService';

const UpdateUser = () => {

    const navigate = useNavigate();
    const[data, setData] =useState({});
    const [userProfileImg, setUserProfileImg] = useState(null);
    const{id} =useParams();

    useEffect(() => {
        const getUserById = async (id) => {
            const { data } = await UserService.getUserById(id);  
            setData(data);
        }
        getUserById(id);


    }, []);

    const updateProduct = (event) => {
        const formData = new FormData();
        formData.append("userId", data.userId);
        formData.append("userName", data.userName);
        formData.append("userPhone", data.userPhone);
        formData.append("userAddress", data.userAddress);
        formData.append("userMail", data.userMail);
        formData.append("userProfileImg", userProfileImg);
        UserService.updateUser(formData, data.userId);
        navigate("/");
    }

    const onUserIdHandler =(event)=>{
        data.userId = event.target.value;
    } 
    const onUserNameHandler =(event)=>{
        data.userName= event.target.value;
    } 
    const onUserPhoneHandler =(event)=>{
        data.userPhone= event.target.value;
    } 
    const onUserMailHandler =(event)=>{
        data.usermail = event.target.value;
    } 
    const onUserAddressHandler =(event)=>{
        data.userAddress = event.target.value;
    } 

    return (
        <div>
           <header className="hero">
           <h1 className="title ">Please update your details</h1>
            <br />
           </header>
            <form className="" >
                <div className="container">
                    <div className="field">
                        <label className="label">User Id:</label>
                        <input className="input is-primary" name="userId" placeholder="Enter User id" type='number' defaultValue={data.userId} onChange={onUserIdHandler}/>
                    </div>
                    <div className="field">
                        <label className="label">User Name:</label>
                        <input className='input is-primary' name='userName' placeholder='Enter User Name' type="text" defaultValue={data.userName} onChange={onUserNameHandler} />
                    </div>
                    <div className="field">
                        <label className="label">User Phone:</label>
                        <input className='input is-primary' name='userPhone' placeholder='Enter User Phone' type="text" defaultValue={data.userPhone} onChange={onUserPhoneHandler} />
                    </div>
                    <div className="field">
                        <label className="label">User Mail:</label>
                        <input className='input is-primary' name='userMail' placeholder='Enter User Mail' type="email" defaultValue={data.userMail} onChange={onUserMailHandler} />
                    </div>
                    <div className="field">
                        <label className="label">User Address:</label>
                        <input className='input is-primary' name='userAddress' placeholder='Enter User Address' type="text" defaultValue={data.userAddress} onChange={onUserAddressHandler} />
                    </div>
                    <div className="field">
                        <label className="label"> Choose an image... </label>
                        <input className='input is-primary' name='userProfileImg' placeholder='UserProfileImage' type="file"  onChange={(e) => setUserProfileImg(e.target.files[0])} />
                    </div>
                    <div>
                        <br />

                        <button className='button is-primary is-rounded has-text-weight-bold' onClick={() => {
                            const confirm = window.confirm("Do you want to save this user?")
                            if (confirm === true) {
                                updateProduct()
                            }
                        }}>Update</button> &nbsp; &nbsp;
                        <button className='button is-danger is-rounded has-text-weight-bold' onClick={() => { navigate("/"); }} >Cancel</button> &nbsp; &nbsp;
                    </div>
                </div >
            </form>
        </div>


    );
}

export default UpdateUser;