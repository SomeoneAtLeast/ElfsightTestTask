import { GENDERS, STATUSES } from './constants/constants';
import ButtonsGroup from './ButtonsGroup';
import styles from './Filter.module.scss';
import FilterGroup from './FiltersGroup';
import FilterTextField from './FilterTextField';
import InputWithLabel from '../../сommon-сomponents/InputWithLabel';

export const Filter = () => {
  return (
    <form className={styles.filter}>
      <FilterGroup groupName={'Statuses'} groupItems={STATUSES} />
      <FilterGroup groupName={'Genders'} groupItems={GENDERS} />
      <FilterTextField>
        <InputWithLabel
          uniqueIdForInput={'Species'}
          labelText={'Enter character species'}
        />
      </FilterTextField>
      <FilterTextField>
        <InputWithLabel
          uniqueIdForInput={'Type'}
          labelText={'Enter character type'}
        />
      </FilterTextField>
      <ButtonsGroup />
    </form>
  );
};
