import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Stats.scss";

import { STATUS_CODES } from "http";
import { stat } from "fs";
import apiClient from "../../services/apiClient";

const Stats: React.FC = () => {
  const [stats, setStats] = useState({
    longUrl: "",
    id: "",
    shortUrl: "",
    dateCreated: "",
    urlCode: "",
    datesAccessed: [],
  });

  const { code } = useParams<ParamTypes>();

  useEffect(() => {
    apiClient.getStats(code).then((data: Url) => setStats(data));
  }, [code]);

  return (
    <div className="stats_container">
      <h1>URL CODE: {code}</h1>;
      <h3>
        This URL was created on:
        {stats.dateCreated}
      </h3>
      <h4>
        Since creation, it has been clicked {stats.datesAccessed.length} times
      </h4>
      {stats.datesAccessed.length > 1 && (
        <h4>
          It was last accessed on{" "}
          {stats.datesAccessed[stats.datesAccessed.length - 1]}
        </h4>
      )}
    </div>
  );
};

export default Stats;
