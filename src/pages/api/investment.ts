import { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";
import { deleteNewLine, getData } from "../../util/scrapeDataUtils";

const url = "https://www.mesec.cz";
const fetchUrl = url + "/produkty/sporici-ucty";

type RowBankType = {
  name: string;
  type: string;
  link: string;
  imageUrl: string;
};

type RowValueType = {
  bank: RowBankType;
  initialValue: string;
  interestRate: string;
  card: string;
  interestAfterTax: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(fetchUrl);
  const htmlString = await response.text();

  const $ = cheerio.load(htmlString);

  const tableValues: Array<RowValueType> = [];

  $(".product", htmlString).each((_, el) => {
    let rowValues: RowValueType = {
      bank: { name: "", type: "", link: "", imageUrl: "" },
      initialValue: "",
      interestRate: "",
      card: "",
      interestAfterTax: "",
    };

    rowValues.bank.name = getData($, el, ["td:nth-child(1)", "div", "small"]);
    rowValues.bank.type = getData($, el, ["td:nth-child(1)", "div", "a"]);
    rowValues.bank.link =
      url + getData($, el, ["td:nth-child(1)", "div", "a"], "link");

    rowValues.bank.imageUrl = getData(
      $,
      el,
      ["td:nth-child(1)", "div", "img"],
      "img"
    );
    rowValues.initialValue = getData($, el, "td:nth-child(2)");
    rowValues.interestRate = getData($, el, "td:nth-child(3)");
    rowValues.card = getData($, el, "td:nth-child(4)");
    rowValues.interestAfterTax = getData($, el, "td:nth-child(5)");

    tableValues.push(rowValues);
  });

  res.statusCode = 200;
  return res.json({
    tableValues: tableValues,
  });
};

export default handler;
