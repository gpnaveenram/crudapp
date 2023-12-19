import React from 'react';
import SmallCard from './smallCard';

const RowColumn = () => {
    return (
        <div style={{ margin: 10 }} className="row">
            <SmallCard
                text={"Total User Profiles"}
                value={"40,000"}
                icon={"fa-solid fa-calendar fa-2x"}
                color={"blue"}
            />
            <SmallCard
                text={"EARNINGS (ANNUAL)"}
                value={"$215,000"}
                icon={"fa-solid fa-dollar-sign fa-2x"}
                color={"green"}
            />
            <SmallCard
                text={"Tasks"}
                value={"50%"}
                icon={"fa-solid fa-list-check fa-2x"}
                color={"red"}
            />
            <SmallCard
                text={"PENDING REQUESTS"}
                value={"18"}
                icon={"fa-brands fa-rocketchat fa-2x"}
                color={"orange"}
            />

        </div>
    );
};

export default RowColumn;