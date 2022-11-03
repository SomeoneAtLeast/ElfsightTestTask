import { FC, useMemo } from 'react';
import Popup from '../../../сommon-сomponents/Popup';
import styles from './CharacterPopup.module.scss';

interface ICharacterPopup {
  dataForCharacterPopup: { [key: string]: string };
  setIsShowPopup: () => void;
}

export const CharacterPopup: FC<ICharacterPopup> = ({
  dataForCharacterPopup,
  setIsShowPopup,
}) => {
  const { image, ...otherCharacteristics } = dataForCharacterPopup;

  const arrayOfCharacteristics = useMemo(
    () => Object.entries(otherCharacteristics),
    [otherCharacteristics]
  );

  return (
    <Popup onClosePopup={setIsShowPopup}>
      <img
        className={styles.characterPopup__img}
        src={image}
        alt={`Character Image - ${otherCharacteristics.name}`}
      />
      <ul className={styles.characterPopup__characteristicsList}>
        {arrayOfCharacteristics.map(([name, value]) => {
          return (
            <li className={styles.characterPopup__listItem} key={name}>
              <span className={styles.characterPopup__listItemTitle}>
                {name.toUpperCase()}:
              </span>
              {value}
            </li>
          );
        })}
      </ul>
    </Popup>
  );
};
