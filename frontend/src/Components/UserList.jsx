import React, {useState, useEffect} from "react";
import axios from "axios";
function UserList(){
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const userPerpage = 5;
    useEffect(() => {
    const getUsers = async () => {
        const { data } = await axios.get("http://localhost:8080/user/getAll?pageNo=" + currentPage + "&pageSize=" + userPerpage);
        setUsers(data.content);
        console.log(users);
    }
    getUsers();
}, [currentPage]);

   const renderedUsers = users.map((user)=>{
    return(
        <ul>
            <li key={user.userId}>
                <img src={user.userprofileImg} alt={user.userName}></img>
                <p>{user.userName}</p>
                <p>{user.userPhone}</p>
                <p>{user.userMail}</p>
                <p>{user.userAddress}</p>
                <p>{user.userDate}</p>

            </li>
        </ul>
    );
   })

   return(
    <div>
     {renderedUsers}
    </div>
    
   );
}

export default UserList;