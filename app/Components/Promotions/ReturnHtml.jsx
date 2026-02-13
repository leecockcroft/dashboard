export default function ReturnHtml({ data, renderFile, beautify }) {
  const pretty = beautify.html(data);
  return <>{data && <pre style={{ whiteSpace: "pre-wrap" }}>{pretty}</pre>}</>;
}
