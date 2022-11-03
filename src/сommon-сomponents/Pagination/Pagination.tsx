import { FC } from 'react';
import Button from '../Button';
import styles from './Pagination.module.scss';

interface IPagination {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination: FC<IPagination> = ({
  setCurrentPage,
  currentPage,
  totalPages,
}) => {
  const onChangePage = (direction: string) => {
    if (currentPage > 1 && direction === 'previous') {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage < totalPages && direction === 'next') {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__wrapper}>
        <Button
          text={'Previous'}
          isDisable={currentPage === 1}
          onClick={() => onChangePage('previous')}
        />
        <span className={styles.pagination__currentPage}>{currentPage}</span>
        of
        <span className={styles.pagination__totalPages}>{totalPages}</span>
        <Button
          text={'Next'}
          isDisable={currentPage === totalPages}
          onClick={() => onChangePage('next')}
        />
      </div>
    </div>
  );
};
