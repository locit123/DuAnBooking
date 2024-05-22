import React from "react";
import HeaderComponent from "../../components/headers/Header";
import "./index.scss";
import AddNewUser from "../../components/bodys/addNewUsers/AddNewUser";
import TableUsers from "../../components/bodys/getUsers";

function UsersManages(props) {
  return (
    <div className="content-box">
      <HeaderComponent />
      <h1 className="text-center h1">MANAGE USERS WITH LOC</h1>
      <AddNewUser />
      <TableUsers />
    </div>
  );
}

export default UsersManages;
