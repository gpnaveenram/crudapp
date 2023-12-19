import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

    return (

        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div style={{
                    display: 'flex',
                    justifyContent: 'left',
                    margin: 15
                }}>
                    <div style={{ display: 'flex', color: '#4e73df', }}><i className="fa-solid fa-users-rays fa-3x" style={{ color: "#1162ee;" }}></i></div>
                    <div className={styles.titleName} style={{ paddingTop: 12, paddingLeft: 12, textAlign: 'left' }}><b>User Dashboard</b></div>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div style={{ marginLeft: 50 }} class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li style={{ paddingTop: 8, marginLeft: 10 }} class="nav-item active">
                            <Link style={{ textDecoration: 'none', textDecorationLine: 'none' }} className={styles.titleName} to="/Home">Home</Link>
                        </li>
                        <li style={{ paddingTop: 8, marginLeft: 30 }} class="nav-item active">
                            <Link style={{ textDecoration: 'none', textDecorationLine: 'none' }} className={styles.titleName} to="/users">Users</Link>
                        </li>
                        <li style={{ paddingTop: 8, marginLeft: 30 }} class="nav-item active">
                            <Link style={{ textDecoration: 'none', textDecorationLine: 'none' }} className={styles.titleName} to="users/Profile">Profile</Link>
                        </li>
                        <li style={{ paddingTop: 8, marginLeft: 40 }} class="nav-item active">
                            <Link style={{ textDecoration: 'none', textDecorationLine: 'none' }} className={styles.titleName} to="/users/manageUsers">&nbsp;Manage Users&nbsp;&nbsp;<i class="fa-solid fa-people-roof" style={{ color: "#276fec;" }}></i></Link>
                        </li>
                        {/* <li style={{ paddingTop: 1, margin: 5 }} class="nav-item dropdown">
                            <a onClick={handleClick()} className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Manage Users
                            </a>
                            `<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/users/addUser">Add User</Link>
                                <Link className="dropdown-item" to=":userID/edituser">Edit User</Link>
                                <Link className="dropdown-item" to="#">Delete User</Link>
                            </div>`
                        </li> */}
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'right',
                    margin: 15
                }}>
                    <i className="fa-solid fa-user fa-2x" style={{
                        color: "#4e73df",
                        marginTop: 15,
                        margin: 15,

                    }}></i>
                </div>
            </nav>


            {/* <div sytle={{
                display: 'flex',
                flexWrap: 'wrap'
            }} className="row">
                <div className="col-8">
                    <div style={{
                        display: 'flex',
                        backgroundColor: 'white',
                        justifyContent: 'left',
                        margin: 15
                    }}>
                        <div style={{ display: 'flex', color: '#4e73df', }}><i className="fa-solid fa-users-rays fa-3x" style={{ color: "#1162ee;" }}></i></div>
                        <div className={styles.titleName} style={{ paddingTop: 12, paddingLeft: 12, textAlign: 'left' }}><b>User Dashboard</b></div>
                    </div>
                </div>
                <div className="col-4">
                    <div style={{
                        display: 'flex',
                        backgroundColor: 'white',
                        justifyContent: 'right',
                        margin: 15
                    }}>
                        <i className="fa-solid fa-user fa-2x" style={{
                            color: "#4e73df",
                            marginTop: 15,
                            margin: 15
                        }}></i>
                    </div>
                </div>
            </div> */}
        </header>
    );
}

export default HeaderComponent;