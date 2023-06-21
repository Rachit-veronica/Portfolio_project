import React, { useState } from "react";
import { getDatabase, ref, set, child, onValue, push } from "firebase/database";
import db from "../Backend/Firebase";

const VideoForm = () => {
  const [sendData, setSendData] = useState({
    img: "",
  });

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      setSendData({ ...sendData, img: imageUrl });
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataRef = ref(db, "info/");
    const database = getDatabase();

    const newEntryRef = push(dataRef); // Generate a unique ID for the new entry

    // const childRef = child(newEntryRef, "child-node"); // Specify the child node

    set(newEntryRef, sendData)
      .then(() => {
        // Data sent successfully
        alert("data entered seccess");
        setSendData({
          ...sendData,
          img: null,
        });
      })
      .catch((error) => {
        // Handle error
        alert("error");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="videoUpload">Select Video:</label>
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        onChange={handleImageUpload}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VideoForm;
