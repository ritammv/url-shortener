import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [urlObject, setUrlObject] = useState({
    longUrl: "",
    urlCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const target = e.currentTarget.value;
    const newObject = {
      ...urlObject,
    };
    if (name === "longUrl") newObject.longUrl = target;
    if (name === "urlCode") newObject.urlCode = target;
    setUrlObject(newObject);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  return (
    <div className="form_container">
      <form onSubmit={(e) => handleSubmit}>
        <input
          className="form_input"
          type="text"
          name="longUrl"
          onChange={(e) => handleChange(e, "longUrl")}
        />
        <input
          className="form_input"
          type="text"
          name="urlCode"
          onChange={(e) => handleChange(e, "urlCode")}
        />
        <button className="form_input" type="submit">
          Shorten your URL!
        </button>
      </form>
    </div>
  );
};

export default Form;
