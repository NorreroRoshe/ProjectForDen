import React, { useState } from 'react';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function App() {
  const [value, setValue] = useState<Range>({ min: 1, max: 10 });

  const handleOnChange = (value: number | Range) => {
    if (typeof value === 'number') {
      // handle single value
      console.log(value);
      setValue({ min: value, max: value });
    } else {
      // handle range value
      console.log(value.min, value.max);
      setValue(value);
    }
  };

  return (
    <div>
      <InputRange maxValue={20} minValue={0} value={value} onChange={handleOnChange} />
    </div>
  );
}

export default App;
