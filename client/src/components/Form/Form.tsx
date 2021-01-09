/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./Form.scss";
import { useHistory } from "react-router-dom";
import apiClient from "../../services/apiClient";

const Form: React.FC = () => {
  const [urlObject, setUrlObject] = useState<UserUrl>({
    longUrl: "",
    code: "",
  });
  const [result, setResult] = useState<Url>({
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
            id="longUrl"
            required
            pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
            placeholder="..."
            onChange={(e) => handleChange(e, "longUrl")}
          />
          <label htmlFor="urlCode"> Add a custom code here (optional) </label>
          <input
            className="form_input"
            type="text"
            name="urlCode"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
            id="urlCode"
            placeholder="..."
            onChange={(e) => handleChange(e, "urlCode")}
          />

          <button
            data-testid="shortenBtn"
            className="form_input_button"
            type="submit"
          >
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
              data-testid="moreInfoBtn"
              type="button"
              onClick={handleClick}
            >
              More Info about this URL
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
