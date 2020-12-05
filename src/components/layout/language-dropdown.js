import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from '../../partials/dropdown';

const LanguageDropdownWrapper = styled.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 0;
    min-width: 105px;
    
    > div > div > div {
      border: none;
    }
  }
`;

const LanguageDropdown = () => {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageDropdownWrapper>
      <Dropdown
        setValue={setLanguage}
        options={[
          { value: 'English', label: 'English' },
          { value: 'Spanish', label: 'Spanish' },
        ]}
        value={language}
      />
    </LanguageDropdownWrapper>
  );
};

export default LanguageDropdown;
