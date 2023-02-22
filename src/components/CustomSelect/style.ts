import { StylesConfig } from 'react-select';
import { TipsOption } from '../../types/types';

export const selectStyles: StylesConfig<TipsOption> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: '70px',
    border: 'none',
    borderRadius: '30px',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: 'center',
    fontSize: '18px',
    backgroundColor: '#FFFFFF',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    border: 'none',
    boxShadow: 'none',
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    display: 'grid',
    placeItems: 'center',
  }),
};
