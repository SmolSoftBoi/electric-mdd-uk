export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response('Hello, from electric MDD UK API!');
}
