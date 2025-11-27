import { client } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await client.from("users").select("*");

  return Response.json({ data, error });
}
