import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    // Định nghĩa các ngôn ngữ và các bản dịch tương ứng
    en: {
      translation: {
        homeHeader: {
          speciality: "Specialized",
          searchDoctor: "Find doctors by specialty",
          healthFacility: "Health facilities",
          selectRoom: "Choose a hospital or clinic",
          doctor: "Doctor",
          selectDoctor: "Choose a good doctor",
          fee: "Examination package",
          checkHealth: "General health check",
          support: "Support",
        },
        banner: {
          title1: "MEDICAL FOUNDATION",
          title2: "COMPREHENSIVE HEALTH CARE",
          title3: "Google Play",
          title4: "App Store",
          child0: "Examination",
          child1: "Specialized",
          child2: "Remote",
          child3: "General",
          child4: "tests",
          child5: "Medical",
          child6: "health",
          child7: "Mental",
          child8: "Dental",
        },
      },
    },
    vn: {
      translation: {
        homeHeader: {
          speciality: "Chuyên khoa",
          searchDoctor: "Tìm bác sĩ theo chuyên khoa",
          healthFacility: "Cơ sở y tế",
          selectRoom: "Chọn bệnh viện phòng khám",
          doctor: "Bác sĩ",
          selectDoctor: "Chọn bác sĩ giỏi",
          fee: "Gói khám",
          checkHealth: "Khám sức khỏe tổng quát",
          support: "Hỗ trợ",
        },
        banner: {
          title1: "NỀN TẢNG Y TẾ",
          title2: "CHĂM SÓC SỨC KHỎE TOÀN DIỆN",
          title3: "Google Play",
          title4: "App Store",
          child0: "Khám",
          child1: "Chuyên Khoa",
          child2: "Từ Xa",
          child3: "Tổng quát",
          child4: "Xét nghiệm",
          child5: "y học",
          child6: "Sức khỏe ",
          child7: "tinh thần",
          child8: "nha Khoa",
        },
      },
    },
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "vn", // Ngôn ngữ dự phòng
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;