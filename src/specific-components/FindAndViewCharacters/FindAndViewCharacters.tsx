import React, { useEffect, useMemo, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useHttp } from '../../hooks/useHttp';
import { MouseButtonOrKeyboardEventType } from '../../types/types';
import { createUrl } from '../../utils/helpers';
import ShowWarning from '../../сommon-сomponents/ShowError';
import Filter from '../Filter';
import ListOfCharacters from '../ListOfCharacters';
import styles from './FindAndViewCharacters.module.scss';

export const FindAndViewCharacters = () => {
  const { request, error, clearError } = useHttp();

  const [charactersLoading, setCharactersLoading] = useState(true);

  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [currentFilters, setCurrentFilters] = useState({
    status: '',
    gender: '',
    species: '',
    type: '',
  });
  const [totalCharacters, setTotalCharacters] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const debouncedCharacterName = useDebounce(characterName, 300);

  const url = useMemo(
    () => createUrl(currentPage, characterName, currentFilters),
    [currentPage, currentFilters, debouncedCharacterName]
  );

  const getCharacters = async () => {
    try {
      setCharactersLoading(true);
      clearError();
      const data = await request(url);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setTotalCharacters(data.info.count);
      setCharactersLoading(false);
    } catch {
      setTotalCharacters(0);
      setCharactersLoading(false);
    }
  };

  const onApplyFilters = (
    status: string,
    gender: string,
    species: string,
    type: string,
    e?: MouseButtonOrKeyboardEventType
  ) => {
    e?.preventDefault();

    setCurrentFilters((filters) => {
      return {
        ...filters,
        status,
        gender,
        species,
        type,
      };
    });

    setCurrentPage(1);
  };

  const onClearFilters = (
    e: React.MouseEvent<HTMLButtonElement>,
    onClearTemporaryFilterStorage: () => void
  ) => {
    e.preventDefault();

    const { status, gender, species, type } = currentFilters;

    if (status || gender || species || type) {
      setCurrentFilters((filters) => {
        return {
          ...filters,
          status: '',
          gender: '',
          species: '',
          type: '',
        };
      });
    }
    setCharacterName('');
    onClearTemporaryFilterStorage();
    setCurrentPage(1);
  };

  useEffect(() => {
    getCharacters();
  }, [currentPage, currentFilters, debouncedCharacterName]);

  return (
    <>
      <section className={styles.findCharacters}>
        <Filter
          setCharacterName={setCharacterName}
          characterName={characterName}
          onApplyFilters={onApplyFilters}
          onClearFilters={onClearFilters}
        />
      </section>
      <section className={styles.viewCharacters}>
        {!charactersLoading ? (
          <ListOfCharacters
            error={error}
            characters={characters}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <ShowWarning message="Loading..." />
        )}
      </section>
      <section className={styles.totalCharacters}>
        Total Characters - {totalCharacters}
      </section>
    </>
  );
};
