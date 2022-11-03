import { GENDERS, STATUSES } from './constants/constants';
import ButtonsGroup from './ButtonsGroup';
import styles from './Filter.module.scss';
import FilterGroup from './FiltersGroup';
import FilterTextField from './FilterTextField';
import InputWithLabel from '../../сommon-сomponents/InputWithLabel';
import { FC, useCallback, useEffect, useState } from 'react';
import SearchField from '../SearchField';
import { MouseButtonOrKeyboardEventType } from '../../types/types';
import { useDebounce } from '../../hooks/useDebounce';

interface IFilter {
  setCharacterName: (name: string) => void;
  characterName: string;
  onApplyFilters: (
    status: string,
    gender: string,
    species: string,
    type: string,
    e?: MouseButtonOrKeyboardEventType
  ) => void;
  onClearFilters: (
    e: React.MouseEvent<HTMLButtonElement>,
    onClearFilterSubStates: () => void
  ) => void;
}
export const Filter: FC<IFilter> = ({
  setCharacterName,
  characterName,
  onApplyFilters,
  onClearFilters,
}) => {
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');

  const onClearFilterSubStates = () => {
    setStatus('');
    setGender('');
    setSpecies('');
    setType('');
  };

  const onSetStatus = (newStatus: string) => {
    setStatus((oldStatus) => (oldStatus !== newStatus ? newStatus : ''));
  };

  const onSetGender = (newGender: string) => {
    setGender((oldGender) => (oldGender !== newGender ? newGender : ''));
  };

  const onApplyFiltersByEnter = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onApplyFilters(status, gender, species, type, e);
      }
    },
    [status, gender, species, type]
  );

  const debouncedCharacterName = useDebounce(characterName, 300);

  useEffect(() => {
    onApplyFilters(status, gender, species, type);
  }, [debouncedCharacterName]);

  useEffect(() => {
    window.addEventListener('keydown', onApplyFiltersByEnter);

    return () => {
      window.removeEventListener('keydown', onApplyFiltersByEnter);
    };
  }, [status, gender, species, type]);

  return (
    <form className={styles.filter}>
      <SearchField
        onGetFieldValue={setCharacterName}
        fieldValue={characterName}
      />
      <FilterGroup
        groupName={'Statuses'}
        groupItems={STATUSES}
        currentGroupValue={status}
        getNewGroupValue={onSetStatus}
      />
      <FilterGroup
        groupName={'Genders'}
        groupItems={GENDERS}
        currentGroupValue={gender}
        getNewGroupValue={onSetGender}
      />
      <FilterTextField>
        <InputWithLabel
          uniqueIdForInput={'Species'}
          labelText={'Enter character species'}
          value={species}
          onGetInputValue={setSpecies}
        />
      </FilterTextField>
      <FilterTextField>
        <InputWithLabel
          uniqueIdForInput={'Type'}
          labelText={'Enter character type'}
          value={type}
          onGetInputValue={setType}
        />
      </FilterTextField>
      <ButtonsGroup
        onApplyFilters={(e) => onApplyFilters(status, gender, species, type, e)}
        onClearFilters={(e) => onClearFilters(e, onClearFilterSubStates)}
      />
    </form>
  );
};
