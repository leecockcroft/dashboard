import mammoth from "mammoth";
import * as cheerio from "cheerio";

export async function parseDoc(items) {
  const dataId = await Promise.all(
    items.data.boards[0].items_page.items.map(async (item) => {
      // Find the DOCX file no matter where it is in the assets array
      const docAsset = item.assets.find((a) =>
        a.name.toLowerCase().endsWith(".docx"),
      );

      const zipFile = item.assets.find((a) =>
        a.name.toLowerCase().endsWith(".zip"),
      );

      if (!docAsset) {
        return {
          id: item.id,
          name: item.name,
          copy: null,
          terms: null,
          img: zipFile,
        };
      }

      const url = docAsset.public_url;

      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { value: html } = await mammoth.convertToHtml({ buffer });
      const $ = cheerio.load(html);

      return {
        id: item.id,
        name: item.name,
        zip: zipFile ? zipFile.public_url : null,
        copy: getCopy($, "//COPY//", "//END COPY //"),
        terms: getCopy($, "//TERMS", "//END TERMS"),
      };
    }),
  );

  return dataId;
}

const getCopy = ($, start, end) => {
  let collecting = false;
  const collectAll = [];

  const blocks = $(
    "p, ul, ol, li, table, td, tr, th, h1, h2, h3, h4",
  ).toArray();

  for (const item of blocks) {
    const text = $(item).text().trim();

    if (text.includes(start)) {
      collecting = true;
      continue;
    }

    if (text.includes(end)) {
      break;
    }

    if (collecting) {
      collectAll.push($.html(item));
    }
  }

  return collectAll;
};
