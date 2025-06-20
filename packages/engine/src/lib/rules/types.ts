'use strict';

/**
 * Validation error returned by rules.
 */
export interface ValidationError {
  /** Upper snake case error code. */
  code: string;
  /** Human readable message. */
  message: string;
  /** Severity level, defaults to `ERROR`. */
  severity?: 'ERROR' | 'WARN';
}

/**
 * Interface for validation rules.
 */
export interface Rule<T> {
  /** Name of the rule. */
  name: string;
  /**
   * Validate the given input value.
   *
   * @param input - Input to validate.
   * @returns List of validation errors.
   */
  validate(input: T): ValidationError[];
}
