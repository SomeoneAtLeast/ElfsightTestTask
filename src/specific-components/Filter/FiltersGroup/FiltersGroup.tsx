import { FC } from 'react';
import styles from './FiltersGroup.module.scss';
import FilterItem from './FilterItem';

interface IFilterGroup {
  groupName: string;
  groupItems: string[];
}

export const FiltersGroup: FC<IFilterGroup> = ({ groupName, groupItems }) => {
  return (
    <fieldset className={styles.filterGroup}>
      <legend className={styles.filterGroup__title}>{groupName}</legend>

      {groupItems.map((item) => (
        <FilterItem key={item} item={item} groupName={groupName} />
      ))}
    </fieldset>
  );
};
