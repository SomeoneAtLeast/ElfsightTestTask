import { FC, useState } from 'react';
import { CharacterCharacteristicsType } from '../../types/types';
import Pagination from '../../сommon-сomponents/Pagination';
import ShowWarning from '../../сommon-сomponents/ShowError';
import Character from './Character';
import CharacterPopup from './CharacterPopup';
import styles from './ListOfCharacters.module.scss';

interface IListOfCharacters {
  error: string | null;
  characters: CharacterCharacteristicsType[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const ListOfCharacters: FC<IListOfCharacters> = ({
  error,
  characters,
  setCurrentPage,
  currentPage,
  totalPages,
}) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [dataForCharacterPopup, setDataForCharacterPopup] = useState({
    image: '',
    name: '',
    status: '',
    gender: '',
    species: '',
    type: '',
    location: '',
    origin: '',
  });

  if (error) return <ShowWarning message={error} />;

  return (
    <>
      <ul className={styles.listOfCharacters}>
        {characters.map((character) => {
          const {
            id,
            image,
            name,
            status,
            species,
            type,
            gender,
            location,
            origin,
          } = character;
          return (
            <Character
              character={character}
              key={id}
              setIsShowPopup={() => setIsShowPopup((oldValue) => !oldValue)}
              setDataForCharacterPopup={() =>
                setDataForCharacterPopup((oldData) => {
                  return {
                    ...oldData,
                    image,
                    name,
                    status,
                    species,
                    type: type || 'Unknown',
                    gender,
                    location: location?.name ?? 'Unknown',
                    origin: origin?.name ?? 'Unknown',
                  };
                })
              }
            />
          );
        })}
      </ul>
      {isShowPopup && (
        <CharacterPopup
          dataForCharacterPopup={dataForCharacterPopup}
          setIsShowPopup={() => setIsShowPopup((oldValue) => !oldValue)}
        />
      )}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};
