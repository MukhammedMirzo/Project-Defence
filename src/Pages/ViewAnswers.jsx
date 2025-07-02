import React from "react";

const ViewAnswers = () => {
  const allAnswers = JSON.parse(localStorage.getItem("formAnswers")) || [];

  if (allAnswers.length === 0) {
    return <div className="p-6">No form responses found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Form Answers</h1>
      {allAnswers.map((entry, i) => (
        <div key={i} className="mb-6 p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
          <ul className="list-disc pl-5">
            {entry.answers.map((a, idx) => (
              <li key={idx}>
                <strong>{a.question}:</strong> {a.response}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewAnswers;
