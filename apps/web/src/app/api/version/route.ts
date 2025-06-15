import pkg from 'root/pkg';

/**
 * Return the current application version.
 */
export async function GET() {
  return new Response(JSON.stringify({ version: pkg.version }), {
    headers: { 'content-type': 'application/json' },
  });
}
