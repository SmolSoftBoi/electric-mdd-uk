'use client';

import { useState } from 'react';

/**
 * Collect basic connection details.
 */
export default function BasicsStep() {
  const [name, setName] = useState('');
  const [voltage, setVoltage] = useState('');
  const [touched, setTouched] = useState({ name: false, voltage: false });

  const handleBlur = (field: 'name' | 'voltage') =>
    setTouched((t) => ({ ...t, [field]: true }));

  const nameError = touched.name && !name ? 'Name is required' : '';
  const voltageError = touched.voltage && !voltage ? 'Voltage is required' : '';

  return (
    <form className="space-y-4">
      <div className="nj-form-item">
        <div className="nj-form-item__field-wrapper">
          <input
            id="connectionName"
            className="nj-form-item__field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
            aria-describedby="connectionNameHint"
          />
          <label htmlFor="connectionName" className="nj-form-item__label">
            Connection name
          </label>
        </div>
        {nameError && (
          <span id="connectionNameHint" className="nj-form-item__errors">
            {nameError}
          </span>
        )}
      </div>
      <div className="nj-form-item nj-form-item--select">
        <div className="nj-form-item__field-wrapper">
          <select
            id="voltage"
            className="nj-form-item__field"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            onBlur={() => handleBlur('voltage')}
          >
            <option value="" disabled hidden>
              Select voltage
            </option>
            <option value="LV">LV</option>
            <option value="HV">HV</option>
          </select>
          <label htmlFor="voltage" className="nj-form-item__label">
            Voltage
          </label>
          <span
            aria-hidden="true"
            className="nj-form-item__icon material-icons"
          >
            keyboard_arrow_down
          </span>
        </div>
        {voltageError && (
          <span className="nj-form-item__errors">{voltageError}</span>
        )}
      </div>
    </form>
  );
}
