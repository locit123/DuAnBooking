// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { HeaderHome } from "./HeaderHome";
import { BannerHome } from "./BannerHome";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...HeaderHome.en,
        ...BannerHome.en,
      },
    },
    vn: {
      translation: {
        ...HeaderHome.vn,
        ...BannerHome.vn,
      },
    },
    // Thêm các ngôn ngữ khác nếu cần
  },
  lng: "vn", // Ngôn ngữ mặc định
  fallbackLng: "vn", // Ngôn ngữ dự phòng nếu không có bản dịch
  interpolation: {
    escapeValue: false, // Không cần thiết nếu bạn không sử dụng biến
  },
});

export default i18n;
