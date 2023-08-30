import React from "react";
const Headers = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/" style={{ fontSize: '25px' }}>Users</a>
                <div class="collapse navbar-collapse container-fluid" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/addProduct">Add Product</a>
                        </li>
                    </ul>
                    {/* <form  className="d-flex flex-right">
                        <input className="form-group mr-sm-2" aria-label="Search" type='number' />
                        <button class="btn btn-outline-success" type='submit' >Search</button>
                    </form> */}
                </div >
            </nav >
        </div >
    );
}
export default Headers;