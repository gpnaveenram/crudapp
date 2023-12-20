import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getUser, updateUser } from '../userCRUD';
// import { createUser } from '../userCRUD';

const EditForm = () => {
  const initialValue = {
  FirstName: '',
  LastName: '',
  dob: '',
  skillset: '',
  Gender: '',
  AvatarUrl: '',
  Address: ''}
  const [formData, setFormData] = useState({initialValue});
  const [params] = useSearchParams();


  const loadUserforEdit = async ()=>{
    const response = await getUser(params.get('id'));
    console.log(response);
    setFormData(response);

}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      updateUser(params.get('id'),formData);
      setFormData(initialValue);
    
  };

  useEffect(()=>{
    loadUserforEdit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
        <h2 style={{color:'blue'}}>Edit User</h2>
        <div style={{
        display:'flex',
        justifyContent:'center'}}
        >
    <form onSubmit={handleSubmit}>
      <label style={{padding:8}}>First Name:  
        <input style={{marginLeft:16}}
          type="text"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
        />
        </label>
      <br></br>
      <label style={{padding:8}}>Last Name: 
        <input style={{marginLeft:16}}
          type="text"
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
        />
        </label>
      <br></br>

      <label style={{padding:8,marginRight:39}}>
        Date of Birth:
        <input style={{marginLeft:16}}
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </label>
      <br></br>

      <label style={{padding:8,marginRight:39}}>
        Skillset:
        <input style={{marginLeft:16}}
          type="text"
          name="skillset"
          value={formData.skillset}
          onChange={handleChange}
        />
      </label>
      <br></br>

      <label style={{padding:8,marginRight:100}}>
        Gender:
        <select style={{marginLeft:16}} name="Gender" value={formData.Gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br></br>
      

      <label style={{padding:8}}>
        Avatar URL:
        <input style={{marginLeft:16}}
          type="text"
          name="AvatarUrl"
          value={formData.AvatarUrl}
          onChange={handleChange}
        />
      </label>
      <br></br>

      <label>
        Address:
        <textarea style={{marginLeft:16}}
          name="Address"
          value={formData.Address}
          onChange={handleChange}
        />
      </label>
      <br></br>

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default EditForm;
