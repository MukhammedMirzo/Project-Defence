import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addTemplate } from "../Slices/formsSlice";
import { ThemeContext } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const CreateTemplate = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [questions, setQuestions] = useState([
    { text: "", type: "short_text" },
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: "", type: "short_text" }]);
  };

  // Change question text
  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].text = value;
    setQuestions(updated);
  };

  // Change question type
  const handleTypeChange = (index, newType) => {
    const updated = [...questions];
    updated[index].type = newType;

    if (newType === "radio" || newType === "checkbox") {
      updated[index].options = [""];
    } else {
      delete updated[index].options;
    }

    setQuestions(updated);
  };

  // Chnge option text
  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  // Add option to the question
  const handleAddOption = (qIndex) => {
    const updated = [...questions];
    updated[qIndex].options.push("");
    setQuestions(updated);
  };

  // Save form templates
  const handleSave = () => {
    if (!title.trim()) {
      setError("Form title is required.");
      return;
    }

    if (questions.some((q) => !q.text.trim())) {
      setError("All questions must be filled.");
      return;
    }

    setLoading(true);

    const newTemplate = {
      id: Date.now().toString(),
      title,
      description,
      questions,
      createdAt: new Date().toISOString(),
    };

    dispatch(addTemplate(newTemplate));

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 500);
  };

  return (
    <div
      className={`mx-auto p-6 max-w-3xl rounded-lg shadow-md ${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">{t("createAnewForm")}</h1>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      {/* Form Title */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={t("formTitle")}
        className="w-full p-2 border mb-3 rounded"
      />

      {/* Form Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={t("formDescription")}
        className="w-full p-2 border mb-4 rounded"
      />

      {/* Questions */}
      {questions.map((q, index) => (
        <div key={index} className="mb-6  p-5  shadow-lg">
          <input
            value={q.text}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
            placeholder={`${t("question")} ${index + 1}`}
            className="w-full p-2 border mb-2 rounded"
          />

          {/* Question Type Selector */}
          <select
            value={q.type}
            onChange={(e) => handleTypeChange(index, e.target.value)}
            className="w-full p-2 border mb-2 rounded"
          >
            <option value="shortText">{t("shortText")}</option>
            <option value="radio">{t("multipleChoise")}</option>
            <option value="checkbox">{t("checkboxes")}</option>
          </select>

          {(q.type === "radio" || q.type === "checkbox") &&
            q.options?.map((opt, optIndex) => (
              <div key={optIndex} className="flex items-center gap-2 mb-2">
                <input type={q.type} disabled />
                <input
                  value={opt}
                  onChange={(e) =>
                    handleOptionChange(index, optIndex, e.target.value)
                  }
                  placeholder={`${t("question")} ${optIndex + 1}`}
                  className="flex-1 p-2 border rounded"
                />
              </div>
            ))}

          {/* Add option button */}
          {(q.type === "radio" || q.type === "checkbox") && (
            <button
              onClick={() => handleAddOption(index)}
              className="text-blue-600 text-sm hover:underline"
            >
              {t("addOption")}
            </button>
          )}
        </div>
      ))}

      {/* Add new question */}
      <button
        onClick={handleAddQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-3"
      >
        {t("addQuestion")}
      </button>

      {/* Save the form */}
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Saving..." : `${t("saveForm")}`}
      </button>
    </div>
  );
};

export default CreateTemplate;
