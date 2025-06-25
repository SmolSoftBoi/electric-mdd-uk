'use client';

import { useCombinationSuggest } from './useCombinationSuggest';

/**
 * Display connection suggestions in a table.
 */
export default function SuggestionsTableStep() {
  const suggestions = useCombinationSuggest();

  return (
    <section>
      <h2>Suggested combinations ✨</h2>
      <table className="nj-table nj-table--striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
