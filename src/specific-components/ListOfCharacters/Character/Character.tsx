import { FC } from 'react';
import styles from './Character.module.scss';

interface ICharacter {
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const Character: FC<ICharacter> = ({
  image,
  name,
  status,
  species,
  type,
  gender,
}) => {
  return (
    <li className={styles.character}>
      <img
        className={styles.character__img}
        src={image}
        alt={`Character Image - ${name}`}
      />
      <ul className={styles.character__characteristicsList}>
        <li className={styles.character__characteristicsListItem}>
          <span className={styles.character__characteristicsListItemTitle}>
            Name:
          </span>
          {name}
        </li>
        <li className={styles.character__characteristicsListItem}>
          <span className={styles.character__characteristicsListItemTitle}>
            Status:
          </span>
          {status}
        </li>
        <li className={styles.character__characteristicsListItem}>
          <span className={styles.character__characteristicsListItemTitle}>
            Species:
          </span>
          {species}
        </li>
        <li className={styles.character__characteristicsListItem}>
          <span className={styles.character__characteristicsListItemTitle}>
            Type:
          </span>
          {type}
        </li>
        <li className={styles.character__characteristicsListItem}>
          <span className={styles.character__characteristicsListItemTitle}>
            Gender:
          </span>
          {gender}
        </li>
      </ul>
    </li>
  );
};
