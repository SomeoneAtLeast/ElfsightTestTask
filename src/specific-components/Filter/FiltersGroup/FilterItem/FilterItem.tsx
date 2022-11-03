import { FC } from 'react';
import styles from './FilterItem.module.scss';

interface IFilterItem {
  item: string;
  groupName: string;
  currentGroupValue: string;
  getNewGroupValue: (status: string) => void;
}

export const FilterItem: FC<IFilterItem> = ({
  item,
  groupName,
  currentGroupValue,
  getNewGroupValue,
}) => {
  return (
    <>
      <input
        className={styles.filterItem__input}
        type="radio"
        id={`${groupName}${item}`}
        name={groupName}
        value={item}
        onClick={() => getNewGroupValue(item)}
      />
      <label
        className={`${styles.filterItem__label} ${
          item === currentGroupValue ? styles.filterItem__labelActive : ''
        }`}
        htmlFor={`${groupName}${item}`}
      >
        {item}
      </label>
    </>
  );
};
