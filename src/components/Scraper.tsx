import React from "react";
import * as cheerio from "cheerio";

const Scraper = () => {
  const fetchData = async () => {
    const response = await fetch("https://www.mesec.cz/produkty/sporici-ucty/");
    const htmlString = await response.text();

    const $ = cheerio.load(htmlString);

    return $;
  };

  console.log(fetchData());

  return <></>;
};

export default Scraper;
