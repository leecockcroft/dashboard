"use client";

import beautify from "js-beautify";
import CtaUpload from "./ctaUpload";
import BottomHtml from "./BottomHtml";
import { useState, useEffect } from "react";
export default function LandingPageState() {
  const [data, setData] = useState();
  const [html, setHtml] = useState("");
  const [bottom, setBottom] = useState("");

  const getData = async (e) => {
    const info = await fetch("api/sunVegas");
    const res = await info.text();
    setData(res);
  };

  const formatted = beautify.html(data);
  useEffect(() => {
    getData();
    setBottom(BottomHtml());
  }, []);

  const showHtml = async () => {
    !data ? await getData() : null;
    setHtml(data);
  };

  const copyAll = () => {
    const full = data + bottom;
    navigator.clipboard.writeText(full);
  };

  const formattedTop = beautify.html(data);
  const formattedBottom = beautify.html(bottom);

  const clear = () => {
    setHtml("");
    setData("");
  };

  return (
    <main className="p-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={clear}
      >
        Clear
      </button>

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={copyAll}
      >
        Copy All
      </button>

      <CtaUpload onSubmit={showHtml} />
      <pre style={{ whiteSpace: "pre-wrap" }}> {html} </pre>

      <div className="hidden">
        <pre style={{ whiteSpace: "pre-wrap" }}> {bottom} </pre>
      </div>
      {/* <pre style={{ whiteSpace: "pre-wrap" }}> {    formattedBottom} </pre> */}
    </main>
  );
}
