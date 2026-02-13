"use client";
import * as mammoth from "mammoth";
import ReturnHtml from "../Components/Promotions/ReturnHtml";
import beautify from "js-beautify";
import { useState, useEffect } from "react";

import Header from "../Components/Header";

export default function Page() {
  const [wordDoc, setWordDoc] = useState(null);
  const [termsDoc, setTermsDoc] = useState(null);

  const inputFile = async (e) => {
    const file = e.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    const html = result.value;

    setWordDoc(html);
  };

  const inputFileTerms = async (e) => {
    const file = e.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    const html = result.value;

    setTermsDoc(html);
  };

  return (
    <main>
      <Header />
      <div className="relative mx-auto  h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="inputs flex gap-4">
          <label for="file" className="inputCopy">
            Upload copy{" "}
          </label>
          <input
            type="file"
            id="file"
            onChange={inputFile}
            className="hidden"
          />

          <label for="fileTerms" className="inputCopy">
            Upload Terms{" "}
          </label>
          <input
            type="file"
            id="fileTerms"
            onChange={inputFileTerms}
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-2 gap-4  justify-items-center place-items-center">
          <div className="copy">
            <h2 className="flex text-2xl font-semibold text-gray-900 mb-4 ">
              Copy
            </h2>
            <ReturnHtml
              data={wordDoc}
              renderFile={beautify.html(wordDoc)}
              beautify={beautify}
            />
          </div>

          <div className="terms">
            <h2 className="flex text-2xl font-semibold text-gray-900 mb-4 ">
              Terms
            </h2>

            <ReturnHtml
              data={termsDoc}
              renderFile={beautify.html(termsDoc)}
              beautify={beautify}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
