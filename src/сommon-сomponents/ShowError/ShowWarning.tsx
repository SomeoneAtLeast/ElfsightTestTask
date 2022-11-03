import { FC } from 'react';
import styles from './ShowWarning.module.scss';

interface IShowWarning {
  message: string;
}

export const ShowWarning: FC<IShowWarning> = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};
