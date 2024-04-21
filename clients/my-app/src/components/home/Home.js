import React, { useState, useEffect } from "react";
import "./Home.scss";
import Header from "../header/Header";
import { getAllUsersService } from "../../servers/auth/serviceUser";
const Home = ({ getData, setUser }) => {
  const [data, setData] = useState([]);
  console.log("length Data", data.length);
  const handleClick = () => {
    setUser(null);
  };
  const getAllUsers = async () => {
    try {
      let response = await getAllUsersService("all");
      if (response && response.data && response.data.EC === 0) {
        setData(response.data.DT);
      }
    } catch (error) {
      console.log("error getAllUsers", error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="box-all">
      <div className="header">
        <Header
          li1={"Hệ Thống"}
          li2={"|"}
          li3={"Logout"}
          onClick={() => handleClick()}
        />
      </div>
      <div className="box-body">
        <div className="mt-3 mb-3 text-center">
          <h1 className="text-color">MANGE USERS</h1>
        </div>
        <table id="customers">
          <thead>
            <tr>
              <th>Email</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button>Xóa</button>
                      <button>Sửa</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  Dữ Liệu Trống
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
