import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../Context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import formLogo from "../assets/Icons/logo-48.svg";
import { EllipsisVertical, Pencil, View, FilePen, Trash } from "lucide-react";
import { deleteTemplate } from "../Slices/formsSlice";

const Home = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const templates = useSelector((state) => state.forms.templates);
  const searchTherm = useSelector((state) => state.forms.searchTherm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const filteredTemplates = templates.filter((template) =>
    template?.title?.toLowerCase().includes(searchTherm.toLowerCase())
  );
  const toggleMenu = (e, formId) => {
    e.stopPropagation();
    setOpenMenu((prev) => (prev === formId ? null : formId));
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const handleDelete = (id) => {
    dispatch(deleteTemplate(id));
    setOpenMenu(null);
  };

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div>
        <Link
          to="/create-template"
          className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white px-4 py-2.5 rounded-lg shadow-md mb-5 mt-5 inline-block"
        >
          {t("createNewForm")}
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">{t("recentForms")}</h1>
      {templates.length === 0 ? (
        <p>No forms created yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTemplates.map((form) => {
            if (!form || !form.id) return null;

            return (
              <li
                key={form.id}
                onClick={() => navigate(`/edit-template/${form.id}`)}
                className="relative cursor-pointer hover:border-purple-600 max-w-2xs border rounded-md shadow hover:shadow transition bg-white"
              >
                <div className="bg-purple-100 w-full p-2 rounded-md">
                  <img src={formLogo} alt="Logo" />
                </div>
                <div className="flex items-start gap-x-2.5 p-2">
                  <div className="">
                    <h2 className="text-xl font-bold">
                      {t("title")}:{form.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {t("created")}:{formatDate(form.createdAt)}
                    </p>
                  </div>

                  <button
                    onClick={(e) => toggleMenu(e, form.id)}
                    className="cursor-pointer p-1 hover:bg-gray-200 rounded-full"
                  >
                    <EllipsisVertical />
                  </button>
                </div>

                {openMenu === form.id && (
                  <div className="absolute flex flex-col p-2.5 -right-10 top-28 z-10 bg-white shadow-lg rounded-md w-56 py-2 space-x-2">
                    <button
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/view-answers");
                      }}
                    >
                      <View size={20} />
                      <span>{t("viewAnswers")}</span>
                    </button>

                    <button
                      className="cursor-pointer flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/edit-template/${form.id}`);
                      }}
                    >
                      <Pencil size={20} />
                      {t("edit")}
                    </button>
                    <button
                      className="cursor-pointer flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/fill-form/${form.id}`);
                      }}
                    >
                      <FilePen size={20} />
                      {t("fillForm")}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(form.id);
                      }}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 gap-2  text-red-600 hover:text-red-800"
                    >
                      <Trash />
                      <span>{t("delete")}</span>
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
