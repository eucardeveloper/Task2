import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return <h1>Login Sayfasından Yönlendirilen İsim :  {user ? user.username : 'Guest'}</h1>;
};

export default Profile;