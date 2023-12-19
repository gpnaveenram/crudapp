import React, { useEffect, useState } from 'react';
import { getUser} from '../userCRUD';
import Card1 from './UserProfile';
import { useParams } from 'react-router-dom';



const Profile = ()=>{
const {userID}=useParams();
const [user,setUser] = useState([]);

const loadUser = async ()=>{
    const response = await getUser(userID); 
    setUser(response);
}

useEffect(()=>{
    loadUser();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

return(
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:10}}>
                <div key={user.id}>
                    <div> 
                    <Card1
                     FirstName={user.FirstName}
                     LastName={user.LastName}
                     AvatarUrl={user.AvatarUrl}
                     Skillset={user.skillset}
                     DateOfBirth={user.dob}
                     Gender={user.Gender}
                     Address={user.Address}
                     />
                    </div>
                </div>
    </div>
);
}


export default Profile;
