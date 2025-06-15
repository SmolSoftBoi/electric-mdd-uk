import pkg from '../../../../../../package.json';

/**
 * Return the current application version.
 */
export async function GET() {
  return new Response(JSON.stringify({ version: pkg.version }), {
    headers: { 'content-type': 'application/json' },
  });
}
