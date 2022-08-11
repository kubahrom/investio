import * as cheerio from 'cheerio';

export const deleteNewLine = (text: string) =>
  text.replace(/(\r\n|\n|\r)/gm, '');

export const getData = (
  $: cheerio.CheerioAPI,
  el: cheerio.Element,
  selector: string | [string, string, string],
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
      data =
        $(el)
          .children(selector[0])
          .children(selector[1])
          .children(selector[2])
          .attr('href') || '';
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
