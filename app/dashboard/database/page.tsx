import { neon } from '@neondatabase/serverless';
async function getData() {
  const sql = neon(process.env.DATABASE_URL!);
  const response = await sql`SELECT * from playing_with_neon`;
  return {
    name10: response[10]?.name || "No row 10",
    name11: response[11]?.name || "No row 11",
  };
}
export default async function Page() {
  const data = await getData();
  return (<div className="p-10 text-white">
	<div className="space-y-6 text-lg">
        <p>
          Row 10 Name: <span className="font-mono text-emerald-400">{data.name10}</span>
        </p>
        <p>
          Row 11 Name: <span className="font-mono text-emerald-400">{data.name11}</span>
        </p>
      </div>
      </div>
);
}