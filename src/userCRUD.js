import { userURL } from "./config";

export const createUser = async (userData)=>{
    const response = await fetch(`${userURL}/users`,
    {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    }
    );
    const user = await response.json();
    return user;
}

export const getUsers = async ()=>{
    const response = await fetch(`${userURL}/users`);
    const users = await response.json();
    return users;
}

export const getUser = async (id)=>{
    console.log(`${userURL}/users/${id}`);
    const response = await fetch(`${userURL}/users/${id}`);
    
    const user = await response.json();
    return user;
}

export const deleteUser = async (id)=>{
    console.log(`${userURL}/users/${id}`);
    const response = await fetch(`${userURL}/users/${id}`,
    {
        method:'DELETE'
    }
    );
    
    const user = await response.json();
    return user;
}

export const updateUser = async (id,userData)=>{
    console.log(`${userURL}/users/${id}`);
    const response = await fetch(`${userURL}/users/${id}`,
    {
        method:'PUT',
        body:JSON.stringify(userData),
        headers:{'Content-Type':'application/json'}
    }
    );
    
    const user = await response.json();
    return user;
}

