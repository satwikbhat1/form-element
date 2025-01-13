import React, { useState } from "react";

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname.trim() === "" || lastname.trim() === "") {
      setError(true);
      return;
    }
    setFullname(`${firstname} ${lastname}`);
    setError(false);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">
          First Name :
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label htmlFor="lname">
          Last Name :
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></input>
        </label>
        <br></br>
        <button>Submit</button>
      </form>
      {error && <div>Please fill out both fields!</div>}
      {fullname && (
        <div>
          <h2>Full Name: {fullname}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
