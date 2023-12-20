import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../userCRUD';
const Card1 = ({ id,FirstName,LastName,Skillset,DateOfBirth,Gender,Address,AvatarUrl,editFlag=false,UserID }) => {
 
const[displayMessage,setMessage]=useState('');

console.log(UserID);

  const removerUser = async (id)=>{
    const response = await deleteUser(id);
    setMessage("User ID '"+response.id+"' DELETED");
}
  return (
    // <div style={{height:100,width:300}} className='container'>
    <div  style={{height:400,width:300,margin:10,position:'relative'}} className="card">
      {editFlag && <Link to={`/users/edit?id=${id}`}>
                            <i title={"Edit User"} class="fa-regular fa-pen-to-square" style={{
                              color: "#ffffff;",
                              position:'absolute',
                              top:5,
                              right:5}}></i>
                            </Link>
                            }
                            {editFlag && <i title={"Delet User"} className="fa-solid fa-user-slash" style={{
                              color: "#ffffff;",
                              position:'absolute',
                              top:40,
                              right:5,
                              cursor:'pointer'}} onClick={()=>removerUser(id)}></i>}

      <img style={{marginTop:10,marginLeft:60,height:150,width:150}}src={AvatarUrl} alt={`${FirstName} ${LastName}`} className="card-image" />
      <div style={{fontSize:30,color:'red'}}>{displayMessage}</div>
      <div className="card-content">
        <h2 className="card-name">{`${FirstName} ${LastName}`}</h2>
        <div style={{textAlign:'left'}}>
        <p style={{marginLeft:'10px'}} className="card-skillset"><strong>Skillset:</strong> {Skillset}</p>
        <p style={{marginLeft:'10px'}} className="card-dob"><strong>Gender:</strong> {Gender}</p>
        <p style={{marginLeft:'10px'}} className="card-dob"><strong>Date of Birth:</strong> {DateOfBirth}</p>
        <p style={{marginLeft:'10px'}} className="card-address"><strong>Address:</strong> {Address}</p>
        {/* <p style={{marginLeft:'10px'}} className="card-id"><strong>User ID:</strong>{UserID}</p> */}
        </div>
      </div>

    </div>
    // </div>
  );
}

export default Card1;
