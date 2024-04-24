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
  //<<<<<<<<<<<<<MODEL ADD 1>>>>>>>>>>>>>>>>>>>>
  const BodyElement1 = [
    {
      label: "FirstName:",
      placeholder: "Nhập firstName:",
      onChange: (e) => setFirstName(e.target.value),
      className: "form-control",
      type: "text",
      name: "firstName",
      value: firstName,
    },
    {
      label: "LastName:",
      placeholder: "Nhập lastName:",
      onChange: (e) => setLastName(e.target.value),
      className: "form-control",
      type: "text",
      value: lastName,
    },
    {
      label: "Address:",
      placeholder: "Nhập address:",
      onChange: (e) => setAddress(e.target.value),
      className: "form-control",
      type: "text",
      value: address,
    },
    { messError: errMess, className: "err" },
  ];
  //duyệt qua mảng
  const Body1 = BodyElement1.map((item, index) => {
    if (item.label) {
      return (
        <Form
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          onChange={item.onChange}
          className={item.className}
          type={item.type}
          value={item.value}
        />
      );
    } else {
      return (
        <Error
          key={index}
          messError={item.messError}
          className={item.className}
        />
      );
    }
  });
  //<<<<<<<<<<<<<MODEL ADD 2>>>>>>>>>>>>>>>>>>>>
  const bodyElement2 = [
    {
      name: 1,
      onChange: (e) => setEmail(e.target.value),
      label: "Email:",
      placeholder: "Nhập email",
      className: "form-control",
      value: email,
      type: "email",
    },
    {
      name: 2,
      onChange: (e) => setPassword(e.target.value),
      label: "Password:",
      placeholder: "Nhập password",
      className: "form-control",
      value: password,
      type: "password",
    },
    {
      name: 3,
      onChange: (e) => setFirstName(e.target.value),
      label: "FirstName:",
      placeholder: "Nhập firstName",
      className: "form-control",
      value: firstName,
      type: "text",
    },
    {
      name: 4,
      onChange: (e) => setLastName(e.target.value),
      label: "LastName:",
      placeholder: "Nhập lastName",
      className: "form-control",
      value: lastName,
      type: "text",
    },
    {
      name: 5,
      onChange: (e) => setAddress(e.target.value),
      label: "Address:",
      placeholder: "Nhập address",
      className: "form-control",
      value: address,
      type: "text",
    },
    {
      name: 6,
      onChange: (e) => setPhoneNumber(e.target.value),
      label: "PhoneNumber:",
      placeholder: "Nhập phoneNumber",
      className: "form-control",
      value: phoneNumber,
      type: "number",
    },
    {
      name: 7,
      label: "Gender:",
      v1: "1",
      v2: "2",
      v3: "3",
      gt1: "Female",
      gt2: "Male",
      gt3: "Other",
      onChange: (e) => setGender(e.target.value),
      value: gender,
    },
    {
      name: 8,
      label: "RoleId:",
      v1: "1",
      v2: "2",
      v3: "3",
      gt1: "Admin",
      gt2: "Doctor",
      gt3: "Patient",
      onChange: (e) => setRoleId(e.target.value),
      value: roleId,
    },
    { messError: errMess, className: "err" },
  ];
  const body2 = bodyElement2.map((item, index) => {
    if (item.name > 0 && item.name <= 6) {
      return (
        <Form
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          className={item.className}
          value={item.value}
          type={item.type}
          onChange={item.onChange}
        />
      );
    }
    if (item.name > 6 && item.name <= 8) {
      return (
        <div className="row" key={index}>
          <div className="col-6">
            <Select
              label={item.label}
              v1={item.v1}
              v2={item.v2}
              v3={item.v3}
              gt1={item.gt1}
              gt2={item.gt2}
              gt3={item.gt3}
            />
          </div>
        </div>
      );
    } else {
      return (
        <Error
          key={index}
          messError={item.messError}
          className={item.className}
        />
      );
    }
  });
  //<<<<<<<<<<-------------------------->>>>>>>>>>
  return (
    <div className="box-all">
      {/* EditUser */}
      <ModalAll
        isOpen={modal3}
        toggle={() => toggle3()}
        titleHeader={<div>Edit User</div>}
        body={Body1}
        footer={[
          <Button
            key={"update"}
            onClick={() => handleClickUpdate()}
            color="primary"
          >
            Update
          </Button>,
          <Button key={"cancel"} onClick={() => toggle3()} color="primary">
            Cancel
          </Button>,
        ]}
      />
      {/* DeleteUser */}
      <ModalAll
        toggle={() => toggle2()}
        isOpen={modal2}
        titleHeader={
          <div>
            Bạn đang muốn xóa user {fi} {la}?
          </div>
        }
        body={
          <div>
            Bạn đã chắc chắn là muốn xóa user {fi} {la}?
          </div>
        }
        footer={[
          <Button
            key={"xacNhan"}
            onClick={() => handleClickXacNhanXoa()}
            color="primary"
          >
            Xác Nhận
          </Button>,
          <Button key={"huy"} onClick={() => toggle2()} color="primary">
            Hủy
          </Button>,
        ]}
      />
      {/* CreateNewUser */}
      <ModalAll
        toggle={() => toggle()}
        isOpen={modal}
        titleHeader={<div>Create New User</div>}
        body={body2}
        footer={[
          <Button key={"them"} onClick={() => handleSubmit()} color="primary">
            Thêm
          </Button>,
          <Button key={"cancel"} onClick={() => toggle()} color="primary">
            Cancel
          </Button>,
        ]}
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
