import './App.css';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Layout/header';
import Content from './Layout/Content';
import UserForm from './Components/ManagePage';
import Users from './Components/users';
import Profile from './Components/profileData';
import ProfilePage from './Components/ProfilePage';
import EditForm from './Components/edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route index path="/" element ={<Content/>}></Route>
        <Route path="/Home" element={<Content/>}></Route>
        <Route path="/users/manageUsers" element={<UserForm/>}/>
        <Route path="/users">
          <Route index element={<Users/>} />
          <Route path="Profile" element={<ProfilePage/>}/>
          <Route path=":userID" element={<Profile/>}/>
          <Route path="edit" element={<EditForm/>}/>
        </Route>
        <Route path="/404" element={<h3>User Not Fount</h3>}  />
        <Route path="*" element={<Navigate to="/404" replace/>}/>
      </Routes>
    
      
      </BrowserRouter>
    </div>
  );
}

export default App;
