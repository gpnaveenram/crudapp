import React from 'react';

const SmallCard = ({ text, value, icon, color }) => {

    return (
        <div style={{
            maxWidth: 300,
            padding: 10,
            margin: 10,
            color: color,
            borderRadius: 10
        }} className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div style={{ color: color }} className="text-xs font-weight-bold text-primary text-uppercase mb-1">{text}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                    </div>
                    <div className="col-auto">
                        <i className={icon} style={{ color: "#c0c7d3;" }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;
