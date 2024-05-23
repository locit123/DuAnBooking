import React, { useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  addressState,
  emailState,
  firstNameState,
  genderDataState,
  genderIsErrorState,
  genderIsLoadingState,
  genderState,
  imageState,
  lastNameState,
  modalState,
  passwordState,
  phoneNumberState,
  positionDataState,
  positionIsErrorState,
  positionIsLoadingState,
  positionState,
  roleDataState,
  roleIsErrorState,
  roleIsLoadingState,
  roleState,
  statusState,
} from "../../../../store/selector";
import { hideModal } from "../../../../store/modal/actions";
import typeValue from "../../../../store/modal/valueModal/actions";
import {
  deleteTypeFetch,
  getTypeFetch,
  getTypeFetchAllCode1,
  getTypeFetchAllCode2,
  getTypeFetchAllCode3,
  postTypeFetch,
  putTypeFetch,
} from "../../../../store/saga/actions";
import LoadingGender from "./Loading/LoadingGender";
import LoadingRole from "./Loading/LoadingRole";
import LoadingPosition from "./Loading/LoadingPosition";

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
  const positionId = useSelector(positionState);
  const image = useSelector(imageState);
  const status = useSelector(statusState);

  const isLoadingGender = useSelector(genderIsLoadingState);
  const isErrorGender = useSelector(genderIsErrorState);
  const dataGender = useSelector(genderDataState);

  const isLoadingRole = useSelector(roleIsLoadingState);
  const isErrorRole = useSelector(roleIsErrorState);
  const dataRole = useSelector(roleDataState);

  const isLoadingPosition = useSelector(positionIsLoadingState);
  const isErrorPosition = useSelector(positionIsErrorState);
  const dataPosition = useSelector(positionDataState);

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
        positionId,
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
      dispatch(typeValue.setPosition(""));
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
        positionId,
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
    positionId,
  ]);
  //-------------GET-API-ALLCODE---------------
  useEffect(() => {
    dispatch(getTypeFetchAllCode1.getAllCodeRequest("GENDER"));
    dispatch(getTypeFetchAllCode2.getRoleRequest("ROLE"));
    dispatch(getTypeFetchAllCode3.getPositionRequest("POSITION"));
  }, [dispatch]);
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
                  <div className="col-4">
                    <label>gender</label>
                    <select
                      className="form-control"
                      value={gender}
                      onChange={(e) =>
                        dispatch(typeValue.setGender(e.target.value))
                      }
                    >
                      {isLoadingGender === false &&
                      isErrorGender === false &&
                      dataGender.length > 0 ? (
                        dataGender.map((item) => (
                          <LoadingGender key={item.id} item={item} />
                        ))
                      ) : (
                        <div>Loading ...</div>
                      )}
                    </select>
                  </div>
                  <div className="col-4">
                    <label>Role</label>
                    <select
                      className="form-control"
                      value={roleId}
                      onChange={(e) =>
                        dispatch(typeValue.setRole(e.target.value))
                      }
                    >
                      {isLoadingRole === false &&
                      isErrorRole === false &&
                      dataRole.length > 0 ? (
                        dataRole.map((item) => (
                          <LoadingRole key={item.key} item={item} />
                        ))
                      ) : (
                        <div>Loading...</div>
                      )}
                    </select>
                  </div>
                  <div className="col-4">
                    <label>Position</label>
                    <select
                      className="form-control"
                      value={positionId}
                      onChange={(e) =>
                        dispatch(typeValue.setPosition(e.target.value))
                      }
                    >
                      {isLoadingPosition === false &&
                      isErrorPosition === false &&
                      dataPosition.length > 0 ? (
                        dataPosition.map((item) => (
                          <LoadingPosition key={item.key} item={item} />
                        ))
                      ) : (
                        <div>Loading...</div>
                      )}
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
