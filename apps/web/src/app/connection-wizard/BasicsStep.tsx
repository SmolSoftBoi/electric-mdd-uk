'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const NJFormItem = dynamic(
  () =>
    import('@engie-group/fluid-design-system-react').then((m) => m.NJFormItem),
  { ssr: false }
);
const NJRadioGroup = dynamic(
  () =>
    import('@engie-group/fluid-design-system-react').then(
      (m) => m.NJRadioGroup
    ),
  { ssr: false }
);
const NJRadio = dynamic(
  () => import('@engie-group/fluid-design-system-react').then((m) => m.NJRadio),
  { ssr: false }
);

/**
 * Collect basic connection details.
 */
export default function BasicsStep() {
  const [name, setName] = useState('');
  const [voltage, setVoltage] = useState('');
  const [mpan, setMpan] = useState('');
  const [energisationDate, setEnergisationDate] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [usage, setUsage] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    voltage: false,
    mpan: false,
    energisationDate: false,
    customerType: false,
    usage: false,
  });

  const handleBlur = (
    field:
      | 'name'
      | 'voltage'
      | 'mpan'
      | 'energisationDate'
      | 'customerType'
      | 'usage'
  ) => setTouched((t) => ({ ...t, [field]: true }));

  const nameError = touched.name && !name ? 'Name is required' : '';
  const voltageError = touched.voltage && !voltage ? 'Voltage is required' : '';
  const mpanError = touched.mpan && !mpan ? 'MPAN is required' : '';
  const dateError =
    touched.energisationDate && !energisationDate
      ? 'Energisation date is required'
      : '';
  const customerError =
    touched.customerType && !customerType
      ? 'Select half hourly or non half hourly'
      : '';
  const usageError =
    touched.usage && !usage ? 'Expected usage is required' : '';

  return (
    <form className="space-y-4">
      <NJFormItem
        id="connectionName"
        label="Connection name"
        value={name}
        onChange={(e) =>
          setName((e.target as HTMLInputElement | HTMLSelectElement).value)
        }
        onBlur={() => handleBlur('name')}
        hasError={!!nameError}
        subscriptMessage={nameError}
      />
      <NJFormItem
        id="voltage"
        label="Voltage"
        isSelect
        iconName="keyboard_arrow_down"
        value={voltage}
        onChange={(e) =>
          setVoltage((e.target as HTMLInputElement | HTMLSelectElement).value)
        }
        onBlur={() => handleBlur('voltage')}
        hasError={!!voltageError}
        subscriptMessage={voltageError}
      >
        <select data-child-name="inputField">
          <option value="" disabled hidden>
            Select voltage
          </option>
          <option value="LV">LV</option>
          <option value="HV">HV</option>
        </select>
      </NJFormItem>
      <NJFormItem
        id="mpan"
        label="MPAN"
        value={mpan}
        onChange={(e) =>
          setMpan((e.target as HTMLInputElement | HTMLSelectElement).value)
        }
        onBlur={() => handleBlur('mpan')}
        hasError={!!mpanError}
        subscriptMessage={mpanError}
      />
      <NJFormItem
        id="energisationDate"
        label="Required energisation date"
        type="date"
        value={energisationDate}
        onChange={(e) =>
          setEnergisationDate(
            (e.target as HTMLInputElement | HTMLSelectElement).value
          )
        }
        onBlur={() => handleBlur('energisationDate')}
        hasError={!!dateError}
        subscriptMessage={dateError}
      />
      <NJFormItem
        id="usage"
        label="Expected usage (kWh/year)"
        type="number"
        value={usage}
        onChange={(e) =>
          setUsage((e.target as HTMLInputElement | HTMLSelectElement).value)
        }
        onBlur={() => handleBlur('usage')}
        hasError={!!usageError}
        subscriptMessage={usageError}
      />
      <NJRadioGroup
        legend="Half hourly customer?"
        onChange={(id) => {
          setCustomerType(id);
          handleBlur('customerType');
        }}
        checkedId={customerType}
        hasError={!!customerError}
      >
        <NJRadio label="Half hourly" value="HH" id="hh" name="customerType" />
        <NJRadio
          label="Non half hourly"
          value="NHH"
          id="nhh"
          name="customerType"
        />
      </NJRadioGroup>
      {customerError && (
        <p className="nj-form-item__subscript" id="customerType-subscript">
          {customerError}
        </p>
      )}
    </form>
  );
}
