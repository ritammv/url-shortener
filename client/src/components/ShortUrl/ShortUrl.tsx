import React from "react";

interface ShortUrlProps {
  url: string;
}

const ShortUrl = (url: ShortUrlProps) => {
  return <h1> {url}</h1>;
};

export default ShortUrl;
