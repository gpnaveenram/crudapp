import React, { useState } from 'react';
import { createUser } from '../userCRUD';

const MyForm = () => {
  const initialValue = {
  FirstName: '',
  LastName: '',
  dob: '',
  skillset: '',
  Gender: '',
  AvatarUrl: '',
  Address: ''}
  const [formData, setFormData] = useState({initialValue});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
     createUser(formData);
     setFormData(initialValue);
  };

  return (
    <div>
        <h2 style={{color:'blue'}}>Add User</h2>
        <div style={{
        display:'flex',
        justifyContent:'left'}}
        >
    <form onSubmit={handleSubmit}>
      <label style={{padding:8}}>First Name:</label>
        
        <input style={{marginLeft:16}}
          type="text"
          name="FirstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      <br></br>
      <label style={{padding:8}}>Last Name:</label> 
        <input style={{marginLeft:16}}
          type="text"
          name="LastName"
          value={formData.lastName}
          onChange={handleChange}
        />
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
        <select style={{marginLeft:16}} name="Gender" value={formData.gender} onChange={handleChange}>
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
          value={formData.avatar}
          onChange={handleChange}
        />
      </label>
      <br></br>

      <label>
        Address:
        <textarea style={{marginLeft:16}}
          name="Address"
          value={formData.address}
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

export default MyForm;
