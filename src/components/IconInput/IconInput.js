import React from 'react';

import VisuallyHidden from '../VisuallyHidden';
import * as S from './IconInput.styles';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  return (
    <S.InputWrapper style={{ ...S.SIZE[size], '--width': `${width}px` }}>
      <VisuallyHidden>
        <label for="sample-id">{label}</label>
      </VisuallyHidden>
      <S.Input
        id="sample-id"
        name="sample-name"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        thinText={value ? false : true}
        ref={inputRef}
      />
      <S.Icon id={icon} onClick={() => inputRef.current.focus()} />
    </S.InputWrapper>
  );
};

export default IconInput;
