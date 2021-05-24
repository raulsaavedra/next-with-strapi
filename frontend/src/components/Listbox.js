import * as React from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';
import styled from 'styled-components';
import { space } from 'styled-system';
import { useRouter } from 'next/router';

const SListbox = styled(Listbox)`
  font-size: 1.6rem;
  [data-reach-listbox-arrow] {
    font-size: 1rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.blueDark};
  }
  ${space}
`;
const SListboxOption = styled(ListboxOption)`
  font-size: 1.6rem;
`;

export default function ListboxComponent({ data, navigation }) {
  const router = useRouter();
  const { locale } = router;
  const [value, setValue] = React.useState(locale || 'default');

  const handleValue = (val) => {
    setValue(val);
    if (val !== 'default') {
      router.push(
        `/${val}`,
        {},
        {
          locale: val,
        }
      );
    }
  };
  return (
    <SListbox
      value={value}
      onChange={(val) => (navigation ? handleValue(val) : setValue(val))}
    >
      <SListboxOption value="default">Choose a language</SListboxOption>
      {data.map((item) => (
        <SListboxOption key={item} value={`${item}`}>
          {item}
        </SListboxOption>
      ))}
    </SListbox>
  );
}
