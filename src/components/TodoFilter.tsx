import { FilterType } from '@/types';
import styles from './TodoFilter.module.css';
import clsx from 'clsx';

type TodoFilterProps = {
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
};

export default function TodoFilter({ filter, onFilterChange }: TodoFilterProps) {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className={styles.wrapper}>
      {filters.map(({ label, value }) => (
        <button
          key={value}
          className={clsx(styles.btn, { [styles.active]: filter === value })}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
