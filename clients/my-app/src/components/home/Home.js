import React, { useState, useEffect } from "react";

const Home = ({ getData, setUser }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("");
  useEffect(() => {
    if (getData && getData.EC === 0) {
      setId(getData.DT.id);
      setEmail(getData.DT.email);
      setRoleId(getData.DT.roleId);
    }
  }, []);
  const handleClickLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{email}</li>
        <li>{roleId}</li>
        <li>
          <button onClick={() => handleClickLogout()}>logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
