import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FormAnswer = () => {
  const { id } = useParams();
  const form = useSelector((state) =>
    state.forms.templates.find((f) => f.id === id)
  );

  const [answers, setAnswers] = useState(() => form?.questions.map(() => ""));

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnswer = {
      formId: id,
      title: form.title,
      answers: form.questions.map((q, i) => ({
        question: q.text,
        response: answers[i],
      })),
    };
    const allAnswers = JSON.parse(localStorage.getItem("formAnswers")) || [];
    allAnswers.push(newAnswer);
    localStorage.setItem("formAnswers", JSON.stringify(allAnswers));
    alert("form submitted");
  };

  if (!form) return <div>Form not found</div>;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{form.title}</h2>
      <p className="mb-4 text-gray-600">{form.description}</p>
      <form onSubmit={handleSubmit}>
        {form.questions.map((q, i) => (
          <div key={i} className="mb-3">
            <label className="block font-medium">{q.text}</label>
            <input
              type="text"
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAnswer;
