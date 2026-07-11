'use client';

import { useState } from 'react';
import { Button } from '@design-system/react';
import { Playground } from './Playground';

export function ButtonPlayground() {
  const [variant, setVariant] = useState('primary');
  const [size, setSize] = useState('md');
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState('Continue');

  return (
    <Playground
      controls={[
        { kind: 'select', label: 'variant', value: variant, options: ['primary', 'secondary', 'ghost'], onChange: setVariant },
        { kind: 'select', label: 'size', value: size, options: ['sm', 'md', 'lg'], onChange: setSize },
        { kind: 'toggle', label: 'disabled', value: disabled, onChange: setDisabled },
        { kind: 'text', label: 'label', value: label, onChange: setLabel },
      ]}
      preview={(s) => (
        <Button
          variant={s.variant as 'primary' | 'secondary' | 'ghost'}
          size={s.size as 'sm' | 'md' | 'lg'}
          disabled={Boolean(s.disabled)}
        >
          {String(s.label)}
        </Button>
      )}
    />
  );
}