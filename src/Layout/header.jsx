import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

    const[display,setdisplay]=useState(false);

    const handleClick = (()=>{
            setdisplay(!display)
    })

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
                <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="navbar-toggler-icon"></div>
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
                {display && (
                    <ul className="dropdown-menu dropdown-menu-end show" aria-labelledby="navbarDropdown" data-bs-popper="static">   
                            <li><Link onClick={handleClick} style={{ textDecoration: 'none', textDecorationLine: 'none',padding:15 }} className={styles.titleName} to="/Home">Home</Link></li>
                            <li><Link onClick={handleClick} style={{ textDecoration: 'none', textDecorationLine: 'none' ,padding:15}} className={styles.titleName} to="/users">Users</Link></li>
                            <li><Link onClick={handleClick} style={{ textDecoration: 'none', textDecorationLine: 'none' ,padding:15}} className={styles.titleName} to="users/Profile">Profile</Link></li>
                            <li><Link onClick={handleClick} style={{ textDecoration: 'none', textDecorationLine: 'none' ,padding:15}} className={styles.titleName} to="/users/manageUsers">Manage Users&nbsp;&nbsp;<i class="fa-solid fa-people-roof" style={{ color: "#276fec;" }}></i></Link></li>
                    </ul>
                )}
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