import { getData } from "@/lib/task";

export async function GET() {
  const data = await getData();
  return Response.json(data);
}
