"use client";
import * as mammoth from "mammoth";
import ReturnHtml from "../Components/Promotions/ReturnHtml";
import beautify from "js-beautify";
import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import Header from "../Components/Header";

export default function Page() {
  const [wordDoc, setWordDoc] = useState(null);
  const [termsDoc, setTermsDoc] = useState(null);
  const [outputFolder, setOutputFolder] = useState(null);

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

  const handleUpload = async (e) => {
    if (!outputFolder) {
      alert("Choose an output folder first");
      return;
    }
    const files = Array.from(e.target.files);

    const compressedFiles = [];

    for (const file of files) {
      const compressed = await imageCompression(file, {
        fileType: "image/webp",
        maxSizeMB: 1,
        maxWidthOrHeight: 2000,
      });
      const name = file.name.replace(/\.[^.]+$/, "") + ".webp";
      const fileHandle = await outputFolder.getFileHandle(name, {
        create: true,
      });
      const writable = await fileHandle.createWritable();
      await writable.write(await compressed.arrayBuffer());
      await writable.close();
      compressedFiles.push(compressed);
    }

    // Now you have all WebP files in memory
    console.log(compressedFiles);
    alert("All images saved to your folder");
  };

  const chooseFolder = async () => {
    try {
      const dirHandle = await window.showDirectoryPicker();
      console.log("Folder selected:", dirHandle);
      setOutputFolder(dirHandle);
    } catch (err) {
      console.error("Error choosing folder:", err);
    }
  };

  return (
    <main>
      <Header />
      <button
        onClick={chooseFolder}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Choose Folder
      </button>
      <input type="file" multiple accept="image/*" onChange={handleUpload} />

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
