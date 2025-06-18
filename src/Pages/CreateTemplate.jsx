import React from "react";
import { useState } from "react";

const CreateTemplate = () => {
  return (
    <div className="bg-purple-50">
      <h2 className="text-center font-sans text-xl mb-5">
        Create your templates
      </h2>
      <form
        action=""
        className="w-[700px] max-w-full mx-auto p-4 bg-white flex items-center flex-col rounded-md shadow-sm border-t-8 border-l-5 border-t-indigo-700 border-l-indigo-400"
      >
        <input
          type="text"
          placeholder="Add New form"
          className="border-b border-gray-300 focus:border-b-2 focus:border-indigo-800 focus:outline-none w-full p-2 mb-4"
        />
        <textarea
          name=""
          id=""
          className="border-b-1 border-gray-300 focus:border-b-2  focus:border-indigo-800 focus:outline-none w-full p-2 mb-4"
        >
          Add description
        </textarea>
      </form>
    </div>
  );
};

export default CreateTemplate;
