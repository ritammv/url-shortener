import React, { useState } from "react";
import "./Form.scss";
import apiClient from "../services/apiClient";

const Form: React.FC = () => {
  const [urlObject, setUrlObject] = useState({
    longUrl: "",
    code: "",
  });
  const [result, setResult] = useState({
    longUrl: "",
    id: "",
    shortUrl: "",
    date: "",
    code: "",
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
    if (name === "code") newObject.code = target;
    setUrlObject(newObject);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiClient.sendUrl(urlObject).then((res: Url) => setResult(res));
  };

  return (
    <>
      <div className="form_container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="form_input"
            type="text"
            name="longUrl"
            placeholder="longUrl goes here"
            onChange={(e) => handleChange(e, "longUrl")}
          />
          <input
            className="form_input"
            type="text"
            name="urlCode"
            placeholder="customise your URL"
            onChange={(e) => handleChange(e, "code")}
          />
          <button className="form_input" type="submit">
            Shorten your URL!
          </button>
        </form>
      </div>
      {result.shortUrl && (
        <div className="short_url_container">
          <h1>{result.shortUrl}</h1>
        </div>
      )}
    </>
  );
};

export default Form;
