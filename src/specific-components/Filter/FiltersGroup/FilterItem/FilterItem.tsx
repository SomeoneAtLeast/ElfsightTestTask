import { FC } from 'react';
import styles from './FilterItem.module.scss';

interface IFilterItem {
  item: string;
  groupName: string;
}

export const FilterItem: FC<IFilterItem> = ({ item, groupName }) => {
  return (
    <>
      <input
        className={styles.filterItem__input}
        type="radio"
        id={item}
        name={groupName}
        value={item}
      />
      <label className={styles.filterItem__label} htmlFor={item}>
        {item}
      </label>
    </>
  );
};
