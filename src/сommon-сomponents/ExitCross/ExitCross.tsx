import { FC } from 'react';
import { MAIN_CANCEL_COLOR } from '../../global-constants/colors';
import { ReactComponent as CrossImg } from './imgs/CrossImg.svg';
import styles from './ExitCross.module.scss';

interface IExitCross {
  onExitCb: () => void;
}

export const ExitCross: FC<IExitCross> = ({ onExitCb }) => {
  return (
    <button className={styles.exitCross} onClick={onExitCb}>
      <CrossImg fill={MAIN_CANCEL_COLOR} />
    </button>
  );
};
