import ReactSelect, { MultiValue, SingleValue } from 'react-select';

import * as ST from './styled.ts';
import { FC } from 'react';
import { COLORS } from '@src/constants/styles.ts';
import ArrowRightSvg from '@assets/icons/Icon3.svg?react';

type SelectOptions = {
  label: string | number;
  value: number | string;
};

type Props = {
  options: SelectOptions[];
  value?: SelectOptions[] | SelectOptions | null;
  onChange?: (
    value: SelectOptions[] | SingleValue<SelectOptions> | MultiValue<SelectOptions>,
  ) => void;
  defaultValue?: SelectOptions;
  placeholder?: string;
  isMulti?: boolean;
};

const Select: FC<Props> = ({ options, value, onChange, defaultValue, placeholder, isMulti }) => {
  return (
    <ST.SelectWrapper>
      <ReactSelect
        styles={{
          menu: (styles) => {
            return {
              ...styles,
              border: `2px solid black`,
              borderRadius: `0`,
              boxShadow: `3px 3px 0px 0px rgba(0, 0, 0, 1)`,
            };
          },
          menuList: (styles) => {
            return {
              ...styles,
              overflow: 'hidden',
            };
          },
          option: (styles) => {
            return {
              ...styles,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            };
          },
          control: (styles) => {
            return {
              ...styles,
              borderRadius: `0`,
              border: `2px solid black`,
              padding: `6px 10px`,
              columnGap: `10px`,
              cursor: `pointer`,
              boxShadow: `3px 3px 0px 0px rgba(0, 0, 0, 1)`,
              minWidth: '120px',
              '&:hover': { borderColor: COLORS.$PRIMARY_DARK_GRAY },
            };
          },
          indicatorSeparator: () => ({ display: `none` }),
          valueContainer: (styles) => {
            return {
              ...styles,
              padding: `0`,
            };
          },
          dropdownIndicator: (styles) => {
            return {
              ...styles,
              padding: `0`,
              color: 'black',
            };
          },
        }}
        components={{
          DropdownIndicator: () => {
            return (
              <ArrowRightSvg
                style={{
                  transform: 'rotate(90deg)',
                }}
              />
            );
          },
        }}
        options={options}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        isMulti={isMulti}
      />
    </ST.SelectWrapper>
  );
};

export { Select };
export type { SelectOptions };
