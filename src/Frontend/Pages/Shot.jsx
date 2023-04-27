import React from "react";

const Shot = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    otherName: "",
  };

  const [form, setform] = useState(initialState);

  const { firstName, lastName, otherName } = form;

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleChange}
        placeholder="firstName"
        required
      />
    </div>
  );
};

export default Shot;
