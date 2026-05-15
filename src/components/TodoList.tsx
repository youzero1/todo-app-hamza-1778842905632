import { Todo } from '@/types';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import { ClipboardList } from 'lucide-react';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className={styles.empty}>
        <ClipboardList size={48} strokeWidth={1.5} className={styles.emptyIcon} />
        <p className={styles.emptyText}>No tasks here</p>
        <p className={styles.emptyHint}>Add a task above to get started</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
