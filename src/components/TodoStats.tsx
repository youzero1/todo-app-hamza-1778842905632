import styles from './TodoStats.module.css';
import { ListChecks, Clock } from 'lucide-react';

type TodoStatsProps = {
  activeCount: number;
  completedCount: number;
};

export default function TodoStats({ activeCount, completedCount }: TodoStatsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon} data-type="active">
          <Clock size={18} />
        </div>
        <div>
          <div className={styles.count}>{activeCount}</div>
          <div className={styles.label}>Remaining</div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon} data-type="done">
          <ListChecks size={18} />
        </div>
        <div>
          <div className={styles.count}>{completedCount}</div>
          <div className={styles.label}>Completed</div>
        </div>
      </div>
    </div>
  );
}
