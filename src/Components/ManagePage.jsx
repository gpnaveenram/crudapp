import React, { useState } from 'react';
import MyForm from './Form';
import { getUser } from '../userCRUD';
import Card1 from './UserProfile';
import styles from './ManagePage.module.css';


const UserForm = () => {
  // const[addUser,setaddUser]=useState(true);
  const [userID, setUserID] = useState('');
  const [getuser,setUser]=useState([]);
  

  const handleChange = (e) =>{
    const id = e.target.value;
    setUserID(id);
  }
  const loadUser = async ()=>{
    const response = await getUser(userID); 
    setUser(response);
    setUserID('');
}

  const handleClick = ()=>{
        setUserID(userID);
        loadUser();
     }

  return (
    <div style={{marginTop:30}}className="container">
        <div className="row">
            <div className="col">
                 <div>
                 <MyForm/>
                 </div>
                 
            </div>
            <div class="col-sm-2"><div className={styles.vertical}></div></div>
        <div class="col">
          <h2 style={{color:'blue'}}>Edit / Delete User</h2>
            <input onChange={handleChange} type="text" placeholder='Enter User ID' value={userID}></input>
            <button onClick={handleClick}>Get User</button>

            {getuser.FirstName!==undefined && <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:10}}>
                          <div key={getuser.id} >                       
                          <Card1
                            FirstName={getuser.FirstName}
                            LastName={getuser.LastName}
                            AvatarUrl={getuser.AvatarUrl}
                            Skillset={getuser.skillset}
                            DateOfBirth={getuser.dob}
                            Gender={getuser.Gender}
                            Address={getuser.Address}
                            id={getuser.id}
                            editFlag={true}
                            />
                  </div>
                </div>
              }
        </div>
  </div>
  </div>
   
  );
};

export default UserForm;
