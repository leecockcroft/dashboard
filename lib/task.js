import Exceljs from "exceljs";
import path from "path";
import mammoth from "mammoth";
import * as cheerio from "cheerio";

export async function getData() {
  // 1. Convert DOCX → HTML
  const result = await mammoth.convertToHtml({
    path: path.join(process.cwd(), "data", "data.docx"),
  });

  const html = result.value;

  // 2. Load HTML into Cheerio
  const $ = cheerio.load(html);

  // 3. Capture ALL block-level elements you care about
  const blocks = $("p, ul, ol, li,table,td,tr,th").toArray();

  // 4. Extract between markers
  function getBetween(start, end) {
    const results = [];
    let collecting = false;

    for (const el of blocks) {
      const text = $(el).text().trim();

      if (text === start) {
        collecting = true;
        continue;
      }

      if (text === end) {
        break;
      }

      if (collecting) {
        results.push($.html(el)); // full HTML of the element
      }
    }

    return results;
  }

  // 5. Example usage
  const copy = getBetween("COPY", "COPY END");
  const terms = getBetween("TERMS", "TERMS END");
  const ribbon1 = getBetween("RIBBON 1", "RIBBON 1 END");
  const ribbon2 = getBetween("RIBBON 2", "RIBBON 2 END");
  const ribbon3 = getBetween("RIBBON 3", "RIBBON 3 END");

  return {
    copy: getBetween("COPY", "COPY END"),
    terms: getBetween("TERMS", "TERMS END"),
    ribbon1: getBetween("RIBBON 1", "RIBBON 1 END"),
    ribbon2: getBetween("RIBBON 2", "RIBBON 2 END"),
    ribbon3: getBetween("RIBBON 3", "RIBBON 3 END"),
  };
}
