"use client";

import { useState, useEffect } from "react";
export default function LandingPageUpload() {
  const [data, setData] = useState();

  const getData = async (e) => {
    const info = await fetch("/api/sunVegas");
    const res = await info.json();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "DATA");

  return (
    <div>
      <h2>{data?.ribbon1[0]}</h2>
    </div>
  );
}
