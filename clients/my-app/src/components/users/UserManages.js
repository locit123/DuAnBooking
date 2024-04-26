import React, { useState, useEffect } from "react";
import "./UserManage.scss";
import Header from "../header/Header";
import {
  createNewUser,
  getAllUsersService,
  deleteUserService,
  putUserService,
} from "../../servers/auth/serviceUser";
import { Button } from "reactstrap";
import ModalAll from "../modal/ModalAll";
import { Error, Form, Select } from "../form/Form";
import ModalEdit from "./modalEdit/ModalEdit";
import ModalAdd from "./modalEdit/ModalAdd";
import ModalDelete from "./modalEdit/ModalDelete";

const UserManages = ({ getData, setUser }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState(1);
  const [roleId, setRoleId] = useState(3);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errMess, setErrMess] = useState("");
  const [modal2, setModal2] = useState(false);
  const [fi, setFi] = useState("");
  const [la, setLa] = useState("");
  const [id, setId] = useState("");
  const [modal3, setModal3] = useState(false);
  const [idUpdate, setIdUpdate] = useState("");
  const [emailName, setEmailName] = useState([]);
  //------------GET USERS-------------
  const getUsers = async () => {
    let emailN = await getData.DT.email;
    setEmailName(emailN);
  };
  //------------LOGOUT USER-----------
  const handleClick = () => {
    setUser(null);
  };
  //-------------GET ALL USER---------
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
    getUsers();
  }, []);

  //---------------ADD USER------------
  const handleClickAdd = () => {
    setModal(!modal);
  };
  const toggle = () => {
    setModal(!modal);
    setErrMess("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setGender(1);
    setRoleId(3);
    setPhoneNumber("");
    setErrMess("");
  };
  const handleSubmit = async () => {
    try {
      let res = await createNewUser(
        email,
        password,
        firstName,
        lastName,
        address,
        gender,
        roleId,
        phoneNumber
      );
      console.log(res.data);
      if (res && res.data && res.data.EC === 0) {
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setAddress("");
        setGender(1);
        setRoleId(3);
        setPhoneNumber("");
        setErrMess("");
        await getAllUsers();
        setModal(false);
      } else {
        setErrMess(res.data.EM);
      }
    } catch (error) {
      console.log("error submit", error);
    }
  };
  //--------------DELETE USER---------------
  const toggle2 = () => {
    setModal2(!modal2);
  };
  const handleClickXoa = (id, fi, la) => {
    setFi(fi);
    setLa(la);
    setId(id);
    setModal2(!modal2);
  };
  const handleClickXacNhanXoa = async () => {
    try {
      if (id) {
        let res = await deleteUserService(id);
        if (res && res.data && res.data.EC === 0) {
          await getAllUsers();
          setModal2(false);
        } else {
          setErrMess(res.data.EM);
        }
      }
    } catch (error) {
      console.log("error handleClickXacNhanXoa", error);
    }
  };

  //<<<<<<<<<<<<----UPDATE USERS----->>>>>>>>>>>>>
  const handleClickEdit = (item) => {
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setAddress(item.address);
    setIdUpdate(item.id);
    setModal3(!modal3);
  };
  const toggle3 = () => {
    setModal3(!modal3);
    setErrMess("");
  };
  const handleClickUpdate = async () => {
    try {
      let res = await putUserService(idUpdate, firstName, lastName, address);
      if (res && res.data && res.data.EC === 0 && res.data.DT[0] === 1) {
        await getAllUsers();
        setModal3(false);
      } else {
        setErrMess(res.data.EM);
      }
    } catch (error) {
      console.log("error handleClickUpdate", error);
    }
  };
  //<<<<<<<<<<<<<MODEL ADD 2>>>>>>>>>>>>>>>>>>>>

  //<<<<<<<<<<-------------------------->>>>>>>>>>
  return (
    <div className="box-all">
      {/* EditUser */}
      <ModalEdit
        onChange1={(e) => setFirstName(e.target.value)}
        value1={firstName}
        onChange2={(e) => setLastName(e.target.value)}
        value2={lastName}
        onChange3={(e) => setAddress(e.target.value)}
        value3={address}
        messError={errMess}
        className={"err"}
        isOpen={modal3}
        toggle={() => toggle3()}
        onClick1={() => handleClickUpdate()}
        onClick2={() => toggle3()}
      />
      {/* DeleteUser */}
      <ModalDelete
        toggle={() => toggle2()}
        isOpen={modal2}
        fi={fi}
        la={la}
        onClick1={() => handleClickXacNhanXoa()}
        onClick2={() => toggle2}
      />
      {/* CreateNewUser */}
      <ModalAdd
        onChange1={(e) => setEmail(e.target.value)}
        value1={email}
        onChange2={(e) => setPassword(e.target.value)}
        value2={password}
        onChange3={(e) => setFirstName(e.target.value)}
        value3={firstName}
        onChange4={(e) => setLastName(e.target.value)}
        value4={lastName}
        onChange5={(e) => setAddress(e.target.value)}
        value5={address}
        onChange6={(e) => setPhoneNumber(e.target.value)}
        value6={phoneNumber}
        onChange7={(e) => setGender(e.target.value)}
        value7={gender}
        onChange8={(e) => setRoleId(e.target.value)}
        value8={roleId}
        messError={errMess}
        className={"err"}
        isOpen={modal}
        toggle={() => toggle()}
        onClick1={() => handleSubmit()}
        onClick2={() => toggle()}
      />
      <div className="header">
        <Header
          li1={"Hệ Thống"}
          li2={"|"}
          li3={"Logout"}
          li4={`Xin Chào:${emailName}`}
          onClick={() => handleClick()}
        />
      </div>
      <div className="box-body">
        <div className="mt-3 mb-3 text-center">
          <h2 className="text-color">MANGE USERS</h2>
        </div>
        <div className="mt-2 mb-2">
          <button className="btn btn-primary" onClick={() => handleClickAdd()}>
            Add new users
          </button>
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
                      <button
                        className="btn btn-danger mx-3"
                        onClick={() =>
                          handleClickXoa(item.id, item.firstName, item.lastName)
                        }
                      >
                        Xóa
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleClickEdit(item)}
                      >
                        Sửa
                      </button>
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

export default UserManages;
