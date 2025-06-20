'use strict';

import type { Rule, ValidationError } from './rules/types';

export interface AggregatedResult<T> {
  input: T;
  errors: ValidationError[];
}

/**
 * Run validation rules against multiple inputs and aggregate errors.
 *
 * @param inputs - Items to validate.
 * @param rules - Validation rules to execute.
 * @returns Array of results per input.
 */
export function aggregateValidators<T>(
  inputs: T[],
  rules: Rule<T>[]
): AggregatedResult<T>[] {
  return inputs.map((input) => ({
    input,
    errors: rules.flatMap((rule) => rule.validate(input)),
  }));
}
