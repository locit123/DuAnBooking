import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  addressState,
  emailState,
  firstNameState,
  genderState,
  imageState,
  lastNameState,
  modalState,
  passwordState,
  phoneNumberState,
  roleState,
  statusState,
} from "../../../../store/selector";
import { hideModal } from "../../../../store/modal/actions";
import typeValue from "../../../../store/modal/valueModal/actions";
import {
  deleteTypeFetch,
  getTypeFetch,
  postTypeFetch,
  putTypeFetch,
} from "../../../../store/saga/actions";

function ModalAdd(props) {
  const dispatch = useDispatch();
  const modal = useSelector(modalState);
  const email = useSelector(emailState);
  const password = useSelector(passwordState);
  const firstName = useSelector(firstNameState);
  const lastName = useSelector(lastNameState);
  const address = useSelector(addressState);
  const gender = useSelector(genderState);
  const roleId = useSelector(roleState);
  const phoneNumber = useSelector(phoneNumberState);
  const image = useSelector(imageState);
  const status = useSelector(statusState);
  console.log(status);
  const handleClose = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const handleImage = useCallback(
    (e) => {
      let img = e.target.files[0];

      let url = URL.createObjectURL(img);
      dispatch(typeValue.setImage(url));

      return () => {
        URL.revokeObjectURL(url);
      };
    },
    [dispatch]
  );

  const handleCreate = useCallback(() => {
    if (status[0] === "create" || status === "create") {
      const payload = {
        email,
        password,
        firstName,
        lastName,
        address,
        gender,
        roleId,
        phoneNumber,
        image,
      };
      dispatch(postTypeFetch.postRequest(payload));
      dispatch(getTypeFetch.getRequest("all"));
      dispatch(typeValue.setEmail(""));
      dispatch(typeValue.setPassword(""));
      dispatch(typeValue.setFirstName(""));
      dispatch(typeValue.setLastName(""));
      dispatch(typeValue.setAddress(""));
      dispatch(typeValue.setGender(""));
      dispatch(typeValue.setRole(""));
      dispatch(typeValue.setPhoneNumber(""));
      dispatch(typeValue.setImage(""));
      dispatch(hideModal());
    }
    //---------UPDATE---------
    if (status[0] === "update") {
      const id = status[1];
      const payload = {
        firstName,
        lastName,
        address,
        gender,
        roleId,
      };
      dispatch(putTypeFetch.putRequest(id, payload));
      dispatch(getTypeFetch.getRequest("all"));
      dispatch(hideModal());
    } else {
      const id = status[1];
      dispatch(deleteTypeFetch.deleteRequest(id));
      dispatch(getTypeFetch.getRequest("all"));
      dispatch(hideModal());
    }
  }, [
    dispatch,
    email,
    password,
    firstName,
    lastName,
    address,
    gender,
    roleId,
    phoneNumber,
    image,
    status,
  ]);
  return (
    <>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {status[0] === "create" || status === "create"
              ? "Create New User"
              : "Update User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status[0] === "delete" ? (
            `Bạn có chắc chắn là muốn xóa không ${status[2]}${status[3]}?`
          ) : (
            <div className="form">
              <div
                className="form-group"
                hidden={
                  status[0] === "create" || status === "create" ? false : true
                }
              >
                <label>Email</label>
                <input
                  value={email}
                  type="email"
                  className="form-control"
                  placeholder="Enter email..."
                  onChange={(e) => dispatch(typeValue.setEmail(e.target.value))}
                />
              </div>
              <div
                className="form-group"
                hidden={
                  status[0] === "create" || status === "create" ? false : true
                }
              >
                <label>Password</label>
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Enter password..."
                  onChange={(e) =>
                    dispatch(typeValue.setPassword(e.target.value))
                  }
                />
              </div>
              <div className="form-group">
                <label>firstName</label>
                <input
                  value={firstName}
                  type="text"
                  className="form-control"
                  placeholder="Enter firstName..."
                  onChange={(e) =>
                    dispatch(typeValue.setFirstName(e.target.value))
                  }
                />
              </div>
              <div className="form-group">
                <label>lastName</label>
                <input
                  value={lastName}
                  type="text"
                  className="form-control"
                  placeholder="Enter lastName..."
                  onChange={(e) =>
                    dispatch(typeValue.setLastName(e.target.value))
                  }
                />
              </div>
              <div className="form-group">
                <label>address</label>
                <input
                  value={address}
                  type="text"
                  className="form-control"
                  placeholder="Enter address..."
                  onChange={(e) =>
                    dispatch(typeValue.setAddress(e.target.value))
                  }
                />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <label>gender</label>
                    <select
                      className="form-control"
                      value={gender}
                      onChange={(e) =>
                        dispatch(typeValue.setGender(e.target.value))
                      }
                    >
                      <option value={"Male"}>Male</option>
                      <option value={"Female"}>Female</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label>Role</label>
                    <select
                      className="form-control"
                      value={roleId}
                      onChange={(e) =>
                        dispatch(typeValue.setRole(e.target.value))
                      }
                    >
                      <option value="Admin">Admin</option>
                      <option value={"Doctor"}>Doctor</option>
                      <option value={"Patient"}>Patient</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className="form-group"
                hidden={
                  status[0] === "create" || status === "create" ? false : true
                }
              >
                <label>PhoneNumber</label>
                <input
                  value={phoneNumber}
                  type="number"
                  placeholder="enter number..."
                  className="form-control"
                  onChange={(e) =>
                    dispatch(typeValue.setPhoneNumber(e.target.value))
                  }
                />
              </div>
              <div
                className="form-group"
                hidden={
                  status[0] === "create" || status === "create" ? false : true
                }
              >
                <label>Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleImage}
                />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant={status[0] === "delete" ? "danger" : "primary"}
            onClick={handleCreate}
          >
            {status[0] === "create" || status === "create"
              ? "Create"
              : status[0] === "delete"
              ? "Delete"
              : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
