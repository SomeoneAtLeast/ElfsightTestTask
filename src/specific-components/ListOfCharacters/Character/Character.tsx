import { FC, useMemo } from 'react';
import { CharacterCharacteristicsType } from '../../../types/types';
import styles from './Character.module.scss';

interface ICharacter {
  character: CharacterCharacteristicsType;
  setIsShowPopup: () => void;
  setDataForCharacterPopup: () => void;
}

export const Character: FC<ICharacter> = ({
  setDataForCharacterPopup,
  setIsShowPopup,
  character,
}) => {
  const onShowCharacterPopup = () => {
    setDataForCharacterPopup();
    setIsShowPopup();
  };

  const { image, name, status, species, type, gender } = character;

  const arrayOfCharacteristics = useMemo(
    () =>
      Object.entries({
        name,
        status,
        species,
        type: type || 'Unknown',
        gender,
      }),
    [status, species, type, gender]
  );

  return (
    <li className={styles.character} onClick={onShowCharacterPopup}>
      <img
        className={styles.character__img}
        src={image}
        alt={`Character Image - ${name}`}
      />
      <ul className={styles.character__characteristicsList}>
        {arrayOfCharacteristics.map(([name, value]) => {
          return (
            <li className={styles.character__listItem} key={name}>
              <span className={styles.character__listItemTitle}>
                {name.toUpperCase()}:
              </span>
              {value}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
