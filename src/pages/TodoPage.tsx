import styles from './TodoPage.module.css';
import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFilter from '@/components/TodoFilter';
import TodoStats from '@/components/TodoStats';
import { CheckSquare } from 'lucide-react';

export default function TodoPage() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    completedCount,
  } = useTodos();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerIcon}>
            <CheckSquare size={28} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className={styles.title}>My Tasks</h1>
            <p className={styles.subtitle}>Stay organised, get things done</p>
          </div>
        </header>

        <TodoStats activeCount={activeCount} completedCount={completedCount} />

        <TodoInput onAdd={addTodo} />

        <TodoFilter filter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        {completedCount > 0 && (
          <div className={styles.clearWrap}>
            <button className={styles.clearBtn} onClick={clearCompleted}>
              Clear {completedCount} completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
