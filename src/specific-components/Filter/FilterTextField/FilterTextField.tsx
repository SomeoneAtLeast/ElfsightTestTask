import { FC, ReactNode } from 'react';
import styles from './FilterTextField.module.scss';

interface IFilterTextField {
  children: ReactNode;
}
export const FilterTextField: FC<IFilterTextField> = ({ children }) => {
  return <div className={styles.filterTextField}>{children}</div>;
};
