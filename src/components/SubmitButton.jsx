import React from "react";

const SubmitButton = ({
  name,
  firstName,
  lastName,
  email,
  message,
  setUserData,
}) => {
  const submitData = async (e) => {
    e.preventDefault();
    if (firstName && lastName && email && message) {
      const res = await fetch(
        "https://personal-portfolio-contact-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        alert("data stored");
      }
    } else {
      alert("please fill the data");
    }
  };

  return (
    <button
      type="submit"
      className="bg-secondary p-2 rounded-lg text-darkPurple border-2 border-darkPurple"
      onClick={(e) => submitData(e)}
    >
      {name}
    </button>
  );
};

export default SubmitButton;
