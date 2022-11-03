import { FC } from 'react';
import Button from '../../../сommon-сomponents/Button';
import styles from './ButtonsGroup.module.scss';

interface IButtonsGroup {
  onApplyFilters: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClearFilters: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonsGroup: FC<IButtonsGroup> = ({
  onApplyFilters,
  onClearFilters,
}) => {
  return (
    <fieldset className={styles.buttonsGroup}>
      <div className={styles.buttonsGroup__buttonsWrapper}>
        <Button text={'Clear'} isClear onClick={onClearFilters} />
        <Button text={'Apply'} onClick={onApplyFilters} />
      </div>
    </fieldset>
  );
};
