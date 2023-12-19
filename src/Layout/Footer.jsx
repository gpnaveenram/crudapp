import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {

    return (
        <div className={styles.Footer}>
        <footer style={{ justifyItems: 'center'}}>
            <div style={{
                display: 'container-fluid',
                backgroundColor: 'white',
                height: 80
            }}>
                <br></br>
                <br></br>
                <div>
                    <p style={{
                        color: '#858796',
                        margin: 0
                    }}> &copy; &nbsp; All rights reserved.</p>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;