import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTemplate } from "../Slices/formsSlice";
import { ThemeContext } from "../Context/ThemeContext";

const EditTemplate = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const form = useSelector((state) =>
    state.forms.templates.find((t) => t?.id === id)
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!form) {
      setError("Form not found");
      setLoading(false);
    } else {
      setTitle(form.title);
      setDescription(form.description);
      setQuestions(form.questions);
      setLoading(false);
    }
  }, [form]);

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].text = value;
    setQuestions(updated);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: "", type: "short_text" }]);
  };

  const handleSave = () => {
    if (!title.trim()) {
      setError("Form title is required");
      return;
    }

    const updatedForm = {
      ...form,
      title,
      description,
      questions,
    };

    dispatch(editTemplate(updatedForm));
    navigate("/");
  };

  if (loading) return <div className="p-6">Loading form...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div
      className={`p-6 ${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">{t("editForm")}</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Form Title"
        className="w-full p-2 border mb-3"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Form Description"
        className="w-full p-2 border mb-4"
      />

      {questions.map((q, index) => (
        <input
          key={index}
          value={q.text}
          onChange={(e) => handleQuestionChange(index, e.target.value)}
          placeholder={`Question ${index + 1}`}
          className="w-full p-2 border mb-2"
        />
      ))}

      <button
        onClick={handleAddQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-3"
      >
        {t("addQuestion")}
      </button>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {t("saveChanges")}
      </button>
    </div>
  );
};

export default EditTemplate;
