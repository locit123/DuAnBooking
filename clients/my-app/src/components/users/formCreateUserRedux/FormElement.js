import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllCodeService } from "../../../servers/allCode/serviceAllCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./FormElement.scss";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
const FormElement = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Nam");
  const [roleId, setRoleId] = useState(3);
  const [position, setPosition] = useState(1);
  const [image, setImage] = useState("");
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const getLanguage = useCallback(() => {
    let getLanguageItem = localStorage.getItem("language");
    if (getLanguageItem) {
      return i18n.changeLanguage(getLanguageItem);
    }
    return i18n.language;
  }, [i18n]);
  useEffect(() => {
    getLanguage();
  }, [getLanguage]);

  const handleClickButton = () => {
    alert("ok");
  };

  //-------------LOAD DATA GENDER ------------------------------
  const getDataGenders = async () => {
    try {
      let dataGender = await getAllCodeService("gender");
      if (dataGender && dataGender.data && dataGender.data.EC === 0) {
        setData(dataGender.data.DT);
      }
    } catch (error) {
      console.log("err getDataGenders", error);
    }
  };
  useEffect(() => {
    getDataGenders();
  }, []);
  //-------------LOAD DATA ROLE ------------------------------
  const getDataRole = async () => {
    try {
      let dataRole = await getAllCodeService("role");
      if (dataRole && dataRole.data && dataRole.data.EC === 0) {
        setData2(dataRole.data.DT);
      }
    } catch (error) {
      console.log("err getDataGenders", error);
    }
  };
  useEffect(() => {
    getDataRole();
  }, []);
  //-------------LOAD DATA POSITION ------------------------------
  const getDataPosition = async () => {
    try {
      let dataPosition = await getAllCodeService("position");
      if (dataPosition && dataPosition.data && dataPosition.data.EC === 0) {
        setData3(dataPosition.data.DT);
      }
    } catch (error) {
      console.log("err getDataGenders", error);
    }
  };

  useEffect(() => {
    getDataPosition();
  }, []);
  //----------------CLICK IMAGE----------------------
  const handleClickImage = (e) => {
    let dataFiles = e.target.files;
    let fileImage = dataFiles[0];
    let ojectUrl = URL.createObjectURL(fileImage);
    setImage(ojectUrl);
  };
  const images = [{ src: image, alt: "img" }];
  const clickImage = () => {
    if (!image) return;
    setIsOpen(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>{t("userManage.email")}</label>
            <input
              placeholder="Nhập email"
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>{t("userManage.password")}</label>
            <input
              placeholder="Nhập password"
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="form-group">
            <label>{t("userManage.firstName")}</label>
            <input
              placeholder="Nhập firstName"
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>{t("userManage.lastName")}</label>
            <input
              placeholder="Nhập lastName"
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="form-group">
            <label>{t("userManage.address")}</label>
            <input
              placeholder="Nhập address"
              type="text"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>{t("userManage.phoneNumber")}</label>
            <input
              placeholder="Nhập phoneNumber"
              type="number"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3 cssNe">
        <div className="col-3">
          <div className="form-group">
            <label>{t("userManage.gender")}</label>
            <select
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              {Array.isArray(data) ? (
                data.map((item, index) => {
                  return (
                    <option key={index}>
                      {i18n.language === "vn" ? item.valueVi : item.valueEn}
                    </option>
                  );
                })
              ) : (
                <option value="">Không có dữ liệu</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-3">
          <div className="form-group">
            <label>{t("userManage.roleId")}</label>
            <select
              className="form-control"
              onChange={(e) => setRoleId(e.target.value)}
              value={roleId}
            >
              {Array.isArray(data2) ? (
                data2.map((item, index) => {
                  return (
                    <option key={index}>
                      {i18n.language === "vn" ? item.valueVi : item.valueEn}
                    </option>
                  );
                })
              ) : (
                <option value="">Không có dữ liệu</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-3">
          <div className="form-group">
            <label>{t("userManage.position")}</label>
            <select
              className="form-control"
              onChange={(e) => setPosition(e.target.value)}
              value={position}
            >
              {data3 && data.length > 0 ? (
                data3.map((item, index) => {
                  return (
                    <option key={index}>
                      {i18n.language === "vn" ? item.valueVi : item.valueEn}
                    </option>
                  );
                })
              ) : (
                <option value="">Không có dữ liệu</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-3 cssLabel">
          <div className="row">
            <div className="col-12">
              <label htmlFor="tai_anh">{t("userManage.image")}</label>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <input
                id="tai_anh"
                className="form-control"
                type="file"
                onChange={(e) => handleClickImage(e)}
                hidden
              />
              <label className="label" htmlFor="tai_anh">
                Tải ảnh
              </label>
              <FontAwesomeIcon color="white" icon={faUpload} />
              <div className="prev_image">
                <img
                  onClick={() => clickImage()}
                  className="img"
                  src={image}
                  alt="hình ảnh"
                />
                <SlideshowLightbox
                  images={images}
                  showThumbnails={true}
                  open={isOpen}
                  lightboxIdentifier="lbox1"
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-5"></div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            onClick={() => handleClickButton()}
          >
            {t("userManage.save")}
          </button>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
};

export default FormElement;
