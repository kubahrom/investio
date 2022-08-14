import * as cheerio from 'cheerio';
import { SavingsAccountTableType } from '../types/investmentTypes';

export const deleteNewLine = (text: string) =>
  text.replace(/(\r\n|\n|\r)/gm, '');

export const getData = (
  $: cheerio.CheerioAPI,
  el: cheerio.Element,
  selector: string | [string, string] | [string, string, string],
  link: '' | 'link' | 'img' = ''
) => {
  let data = '';
  if (!link) {
    if (Array.isArray(selector)) {
      data = $(el)
        .children(selector[0])
        .children(selector[1])
        .children(selector[2])
        .text();
    } else {
      data = $(el).children(selector).text();
    }
  } else {
    if (!Array.isArray(selector)) return '';
    if (link === 'link') {
      if (selector.length === 3) {
        data =
          $(el)
            .children(selector[0])
            .children(selector[1])
            .children(selector[2])
            .attr('href') || '';
      } else {
        data =
          $(el).children(selector[0]).children(selector[1]).attr('href') || '';
      }
    } else if (link === 'img') {
      data =
        $(el)
          .children(selector[0])
          .children(selector[1])
          .children(selector[2])
          .attr('src') || '';
    }
  }

  return deleteNewLine(data);
};

export const getTableData = async (url: string) => {
  try {
    const response = await fetch(url);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    const range: string[] = [];
    const value: string[] = [];

    const table: SavingsAccountTableType = [];

    $('#product-param-table tbody tr:nth-child(2) th', htmlString).each(
      (i, el) => {
        range.push(deleteNewLine($(el).text()));
      }
    );
    $('#product-param-table tbody tr:nth-child(3) td', htmlString).each(
      (i, el) => {
        value.push(deleteNewLine($(el).text()));
      }
    );

    for (let i = 0; i < range.length; i++) {
      table.push({
        range: range[i],
        value: value[i],
      });
    }

    return table;
  } catch (error) {}
};
