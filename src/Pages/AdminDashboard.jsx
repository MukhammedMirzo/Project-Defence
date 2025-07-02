import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [formAnswers, setFormAnswers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const storedAnswers = JSON.parse(localStorage.getItem("formAnswers")) || [];
    setUsers(storedUsers);
    setFormAnswers(storedAnswers);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Registered Users ({users.length})
        </h2>
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li key={index} className="border p-2 rounded-md">
              <strong>{user.username}</strong> - {user.email}{" "}
              {user.isAdmin && (
                <span className="text-sm text-blue-500">(Admin)</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Form Answers</h2>
        {formAnswers.length === 0 ? (
          <p>No form answers submitted yet.</p>
        ) : (
          <ul className="space-y-2">
            {formAnswers.map((answer, i) => (
              <li key={i} className="border p-2 rounded-md">
                <pre>{JSON.stringify(answer, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
