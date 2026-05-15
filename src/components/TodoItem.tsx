import { useState } from 'react';
import { Todo } from '@/types';
import { Trash2, Pencil, Check, X } from 'lucide-react';
import styles from './TodoItem.module.css';
import clsx from 'clsx';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
};

const PRIORITY_LABELS: Record<string, string> = {
  low: 'Low',
  medium: 'Med',
  high: 'High',
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  function handleEditSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onEdit(todo.id, editValue);
    setIsEditing(false);
  }

  function handleCancelEdit(): void {
    setEditValue(todo.text);
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Escape') handleCancelEdit();
  }

  return (
    <li
      className={clsx(styles.item, {
        [styles.completed]: todo.completed,
        [styles.editing]: isEditing,
      })}
    >
      <button
        className={clsx(styles.checkbox, {
          [styles.checked]: todo.completed,
        })}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && <Check size={13} strokeWidth={3} />}
      </button>

      {isEditing ? (
        <form className={styles.editForm} onSubmit={handleEditSubmit}>
          <input
            className={styles.editInput}
            value={editValue}
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className={clsx(styles.iconBtn, styles.saveBtn)} aria-label="Save">
            <Check size={15} strokeWidth={2.5} />
          </button>
          <button type="button" className={clsx(styles.iconBtn, styles.cancelBtn)} onClick={handleCancelEdit} aria-label="Cancel">
            <X size={15} strokeWidth={2.5} />
          </button>
        </form>
      ) : (
        <div className={styles.content}>
          <span className={styles.text}>{todo.text}</span>
          <span
            className={clsx(
              styles.priority,
              styles[`priority_${todo.priority}`]
            )}
          >
            {PRIORITY_LABELS[todo.priority]}
          </span>
        </div>
      )}

      {!isEditing && (
        <div className={styles.actions}>
          <button
            className={clsx(styles.iconBtn, styles.editBtn)}
            onClick={() => {
              setEditValue(todo.text);
              setIsEditing(true);
            }}
            aria-label="Edit task"
          >
            <Pencil size={15} strokeWidth={2} />
          </button>
          <button
            className={clsx(styles.iconBtn, styles.deleteBtn)}
            onClick={() => onDelete(todo.id)}
            aria-label="Delete task"
          >
            <Trash2 size={15} strokeWidth={2} />
          </button>
        </div>
      )}
    </li>
  );
}
