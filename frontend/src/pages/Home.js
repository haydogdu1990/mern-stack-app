import { useEffect } from "react";
import axios from 'axios';

import { useUsersContext } from "../hooks/useUsersContext";

//components
import UserDetails from "../components/UserDetails";
import UserForm from "../components/UserForm";

const Home = () => {
  const { users, dispatch } = useUsersContext();

   useEffect(() => {
    const fetchUsers = async () => {
      let json = {};
      const response = await axios
        .get("/users")
        .then((responce) => (json = responce.data));

      console.log(json);

      if (true) {
        dispatch({ type: "SET_USERS", payload: json });
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="users">
        {users[0].username}

      <UserForm />
    </div>
  );
};

export default Home;
