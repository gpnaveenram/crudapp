import React from 'react';
import styles from './dashboardCard.module.css'


const DashboardCard = ({ title, width, ht, children }) => {

    return (
        <div className={width}>
            <div style={{ height: ht }} className={styles.container}>
                <div className={styles.header}>{title}</div>

                <div style={{
                    display: 'flex',
                    maxHeight: 300,
                    marginBottom: 10,
                    marginTop: 15,
                    marginLeft: 20
                }}>{children}</div>
            </div>

        </div>
    );
};

export default DashboardCard;
