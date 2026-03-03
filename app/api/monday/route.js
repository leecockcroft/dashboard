import { getMondayItems } from "@/lib/monday/mondayAPi";
import { parseDoc } from "@/lib/monday/parseDoc";

export async function GET() {
  const data = await getMondayItems(5092510086);
  const dataId = await parseDoc(data);
  console.log("data", data);

  return Response.json(dataId);
}
