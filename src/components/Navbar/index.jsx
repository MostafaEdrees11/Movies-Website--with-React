import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const lang = localStorage.getItem("lang") == "en" ? "ar" : "en";
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    document.body.setAttribute("dir", lang == "en" ? "ltr" : "rtl");
    // document.body.dir == (lang == "en") ? "ltr" : "rtl";
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/home" className="btn btn-ghost text-xl">
            {t("movies")}
          </Link>
          <Link to="/favorites" className="btn btn-ghost text-xl">
            {t("favorites")}
          </Link>
          <button
            className="btn btn-warning mx-4 px-8"
            onClick={() => {
              changeLanguage();
            }}
          >
            {localStorage.getItem("lang") == "en" ? "Ar" : "En"}
          </button>
        </div>
        <div className="flex gap-2">
          <Link to="/login" className="btn btn-ghost text-xl">
            {t("login")}
          </Link>
          <Link to="/register" className="btn btn-ghost text-xl">
            {t("register")}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
