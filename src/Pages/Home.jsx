import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const templates = useSelector((state) => state.forms.templates);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recent Forms</h1>
      <Link
        to="/create-template"
        className="bg-purple-600 text-white px-4 py-2 rounded inline-block mb-4"
      >
        + Create New Form
      </Link>

      {templates.length === 0 ? (
        <p>No forms created yet.</p>
      ) : (
        <ul className="space-y-3">
          {templates.map((form) => {
            if (!form || !form.id) return null; // skip broken entries

            return (
              <li
                key={form.id}
                className="p-4 border rounded hover:bg-gray-100 transition"
              >
                <Link
                  to={`/edit-template/${form.id}`}
                  className="text-xl font-semibold"
                >
                  {form.title}
                </Link>
                <p className="text-sm text-gray-600">{form.description}</p>

                <Link to={`/form/${form.id}`}>Fill this form</Link>
                <Link to={`/view-answers`}>View answers</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
