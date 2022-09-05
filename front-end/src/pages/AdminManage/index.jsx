import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar';
import RegisterUser from '../../components/RegisterUser';
import UserList from '../../components/UserList';
import { deleteUser, getAllUsers, postRegisterUserByAdmin } from '../../services/api';
import './Admin.css';

export default function Admin() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteClick = async (id) => {
    await deleteUser(id);
    await getUsers();
  };

  const handleRegisterClick = async (user) => {
    try {
      const response = await postRegisterUserByAdmin(user);
      console.log(response);
      if (!response) throw Error;
      await getUsers();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="container-admin">
      <NavBar />
      <div className="addressDelivery">
        <RegisterUser
          handleRegisterClick={ handleRegisterClick }
          error={ error }
        />
        <UserList
          users={ users }
          handleDeleteClick={ handleDeleteClick }
        />
      </div>
    </div>
  );
}
