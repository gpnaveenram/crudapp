import React, { useEffect, useState } from 'react';
import Card1 from './UserProfile';
import { Link } from 'react-router-dom';
import { getUsers } from '../userCRUD';



const ProfilePage = ()=>{
const [users,setUsers] = useState([]);

const loadUsers = async ()=>{
    const response = await getUsers(); 
    setUsers(response);
}

useEffect(()=>{
    loadUsers();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

return(
    <div className='container-flex' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:10}}>
                 {users.map((user)=>(
                <div style={{display:'block'}} key={user.id}>
                    <Link to={'/users/Profile'} style={{textDecoration:'none',color:'blue'}}>
                    <Card1
                     FirstName={user.FirstName}
                     LastName={user.LastName}
                     AvatarUrl={user.AvatarUrl}
                     Skillset={user.skillset}
                     DateOfBirth={user.dob}
                     Gender={user.Gender}
                     Address={user.Address}
                     />
                     </Link>
                    
                </div>
                 ))}
    </div>
);
}


export default ProfilePage;
