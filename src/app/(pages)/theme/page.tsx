"use client";
import axios from "axios";
import React from "react";

const fetchData = async () => {
  const accessToken = "31pJlD"; // Retrieve this from where you stored it
  const response = await axios.get("https://api.upstox.com/v2/user/profile", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });

  console.log(response.data);
};

const Theme = () => {
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Fetch Data
      </button>
    </>
  );
};

export default Theme;
