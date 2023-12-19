import React from 'react';

const Card = ({ AvatarUrl, FirstName, skillset, Address }) => {
  return (
    <div style={{border:'1px solid',margin:10,width:150,
        height:275}}className="card">
      <img style={{
        width:145,
        height:145,margin:2}}
        src={AvatarUrl} alt={`${FirstName}'s avatar`} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{FirstName}</h2>
        <p className="card-skillset">Skillset: {skillset}</p>
        <p className="card-address">Address: {Address}</p>
      </div>
    </div>
  );
};

export default Card;
