import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { ReactDOM } from "react";

import 'bulma/css/bulma.min.css';
import UserProfileCard from './UserProfileCard';


const UserProfileCardList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const usersPerPage = 6;

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get("http://localhost:8080/user/getAll?pageNo=" + currentPage + "&pageSize=" + usersPerPage);
            setUsers(data.content);
            setTotalElement(data.totalElement);
            setTotalPages(data.totalPage);

        }
        getUsers();
    }, [currentPage]);

    const renderUsers = users.map((user) => {
        return (
            <div key={user.userId} className="column is-one-third">
                <UserProfileCard name={user.userName}
                    phone={user.userPhone}
                    image={user.userProfileImg}
                    mail={user.userMail}
                />
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