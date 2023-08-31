import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import UserProfileCard from './UserProfileCard';
import UserService from "../Service/UserService";


const UserProfileCardList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const usersPerPage = 6;
    const navigate =useNavigate();


    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get("http://localhost:8080/user/getAll?pageNo=" + currentPage + "&pageSize=" + usersPerPage);
            setUsers(data.content);
            setTotalElement(data.totalElement);
            setTotalPages(data.totalPage);

        }
        getUsers();
    }, [currentPage]);

    const deleteUser= (id) => {
       
        UserService.deleteUser(id);
        setUsers(users.filter(user => user.userId !== id));
        setCurrentPage(0);
        navigate("/");
    }

    const renderUsers = users.map((user) => {
        return (
            <div key={user.userId} className="column is-one-third">
                <UserProfileCard name={user.userName}
                    phone={user.userPhone}
                    image={user.userProfileImg}
                    mail={user.userMail}
                    address = {user.userAddress}
                />
                 <button className='button button-info is-small' onClick={() => { 
                    navigate(`/UpdateUser/${user.userId}`); }}>Edit</button>
                <button className='button is-danger is-small' onClick={() => {
                    const confirm = window.confirm("Do you want to delete?")
                    if (confirm === true) {
                        deleteUser(user.userId)

                    }
                }}>Delete
                </button>

            </div>

        );
    });

    const rows = [];
    for (let i = 0; i < renderUsers.length; i += 3) {
        rows.push(renderUsers.slice(i, i + 3));
    }
    const onPrevPage = () => {
        if (-1 === currentPage - 1) {
            return setCurrentPage(0);
        }
        else {
            return setCurrentPage(currentPage - 1);
        }
    }
    const onNextPage = () => {
        if (totalPages === currentPage + 1) {
            return;
        }
        else {
            return setCurrentPage(currentPage + 1)
        }

    }
    return (
        <div className="container">
               <h1 className="is-size-1 has-text-weight-bold">OUR CUSTOMERS</h1>
            <section className="section">
                
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="columns is-multiline">
                        {row}
                    </div>
                ))}
            </section>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <a className="pagination-previous has-text-primary" onClick={() => onPrevPage()}>Previous</a>
                <ul className="pagination-list">
                    <li><span class="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link has-text-weight-bold" >{currentPage + 1}</a></li>
                    <li><span class="pagination-ellipsis">&hellip;</span></li>
                </ul>
                <a className="pagination-next has-text-info" onClick={() => onNextPage()}>Next page</a>

            </nav>
        </div>
    );

}

export default UserProfileCardList;