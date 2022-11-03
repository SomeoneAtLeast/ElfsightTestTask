import { FC } from 'react';
import styles from './FiltersGroup.module.scss';
import FilterItem from './FilterItem';

interface IFilterGroup {
  groupName: string;
  groupItems: string[];
  currentGroupValue: string;
  getNewGroupValue: (status: string) => void;
}

export const FiltersGroup: FC<IFilterGroup> = ({
  groupName,
  groupItems,
  currentGroupValue,
  getNewGroupValue,
}) => {
  return (
    <fieldset className={styles.filterGroup}>
      <legend className={styles.filterGroup__title}>{groupName}</legend>

      {groupItems.map((item) => (
        <FilterItem
          key={item}
          item={item}
          groupName={groupName}
          currentGroupValue={currentGroupValue}
          getNewGroupValue={getNewGroupValue}
        />
      ))}
    </fieldset>
  );
};
