import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./ModalAdd.scss";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
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
import ConvertToBase from "../../../../utils/ConvertToBase64";
import { useTranslation } from "react-i18next";
function ModalAdd(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
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
    async (e) => {
      let img = e.target.files[0];
      if (img) {
        let base64 = await ConvertToBase.getBase64(img);
        dispatch(typeValue.setImage(base64));
      }
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
        image,
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

  const handleClickImg = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {status[0] === "create" || status === "create"
              ? t("CreateNewUser")
              : status[0] === "delete"
              ? t("DeleteUser")
              : t("UpdateUser")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status[0] === "delete" ? (
            `Bạn có chắc chắn là muốn xóa không ${status[2]}${status[3]}?`
          ) : (
            <div className="form">
              <div
                className="form-group "
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
                className="form-group mt-3"
                hidden={
                  status[0] === "create" || status === "create" ? false : true
                }
              >
                <label>{t("Password")}</label>
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
              <div className="form-group mt-3">
                <label>{t("FirstName")}</label>
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
              <div className="form-group mt-3">
                <label>{t("LastName")}</label>
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
              <div className="form-group mt-3">
                <label>{t("Address")}</label>
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
              <div className="form-group mt-3">
                <div className="row">
                  <div className="col-4">
                    <label>{t("Gender")}</label>
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
                    <label>{t("Role")}</label>
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
                          <LoadingRole Role key={item.key} item={item} />
                        ))
                      ) : (
                        <div>Loading...</div>
                      )}
                    </select>
                  </div>
                  <div className="col-4">
                    <label>{t("Position")}</label>
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
                className="form-group mt-3"
                hidden={
                  status[0] === "create" || status === "create" ? false : true
                }
              >
                <label>{t("PhoneNumber")}</label>
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
              <div className="row mt-3">
                <div className="col-8">
                  <div className="form-group">
                    <label>{t("Image")}</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImage}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <span className="load-img" onClick={handleClickImg}>
                    <img alt="hinh anh" src={image} />
                  </span>
                </div>
                {image && (
                  <SlideshowLightbox
                    theme="lightbox"
                    images={[{ src: image }]}
                    showThumbnails={true}
                    open={isOpen}
                    lightboxIdentifier="lbox1"
                    onClose={() => {
                      setIsOpen(false);
                    }}
                  ></SlideshowLightbox>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("Close")}
          </Button>
          <Button
            variant={status[0] === "delete" ? "danger" : "primary"}
            onClick={handleCreate}
          >
            {status[0] === "create" || status === "create"
              ? t("Create")
              : status[0] === "delete"
              ? t("Delete")
              : t("Update")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
