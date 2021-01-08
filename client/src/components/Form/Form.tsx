/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./Form.scss";
import { useHistory } from "react-router-dom";
import apiClient from "../../services/apiClient";

const Form: React.FC = () => {
  const [urlObject, setUrlObject] = useState({
    longUrl: "",
    code: "",
  });
  const [result, setResult] = useState({
    longUrl: "",
    id: "",
    shortUrl: "",
    dateCreated: "",
    urlCode: "",
    datesAccessed: [],
  });

  const history = useHistory();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const target = e.currentTarget.value;
    const newObject = {
      ...urlObject,
    };
    if (name === "longUrl") newObject.longUrl = target;
    if (name === "urlCode") newObject.code = target;
    setUrlObject(newObject);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiClient.sendUrl(urlObject).then((res: Url) => setResult(res));
  };

  const handleClick = () => {
    history.push(`/${result.urlCode}/stats`);
  };

  return (
    <>
      <div>
        <form className="form_container" onSubmit={(e) => handleSend(e)}>
          <label htmlFor="longUrl">Paste Your Long Url</label>
          <input
            className="form_input"
            type="text"
            name="longUrl"
            placeholder="..."
            onChange={(e) => handleChange(e, "longUrl")}
          />
          <label htmlFor="urlCode"> Add a custom code here</label>
          <input
            className="form_input"
            type="text"
            name="urlCode"
            placeholder="..."
            onChange={(e) => handleChange(e, "urlCode")}
          />

          <button className="form_input_button" type="submit">
            Shorten your URL!
          </button>
        </form>
      </div>
      {result.shortUrl && (
        <div className="short_url_container">
          <div className="short_url">
            {result.shortUrl}
            <button
              className="more_info_button"
              type="button"
              onClick={handleClick}
            >
              More Info about this URL
            </button>
          </div>
          <div className="footer">Made by Ritam Verma</div>
        </div>
      )}
    </>
  );
};

export default Form;
