import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Trash2, Plus, Filter, ListTodo } from 'lucide-react';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';
import TodoStats from './components/Todo/TodoStats';
import TodoFilters from './components/Todo/TodoFilters';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

type FilterType = 'all' | 'active' | 'completed';

const STORAGE_KEY = 'todos';
const CATEGORIES = ['Personal', 'Work', 'Shopping', 'Health', 'Learning'];

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'priority' | 'name'>('date');
  const [showCompleted, setShowCompleted] = useState(true);

  // Load todos from localStorage on mount
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const loadTodos = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        const todos = parsed.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined,
        }));
        setTodos(todos);
      }
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  };

  const saveTodos = (todos: Todo[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  };

  const addTodo = (text: string, priority: 'low' | 'medium' | 'high', category: string, dueDate?: Date) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
      dueDate,
      priority,
      category,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const updateTodoCategory = (id: string, category: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, category } : todo
    ));
  };

  const updateTodoPriority = (id: string, priority: 'low' | 'medium' | 'high') => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  const clearCompleted = () => {
    if (confirm('Are you sure you want to delete all completed tasks?')) {
      setTodos(todos.filter(todo => !todo.completed));
    }
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
      setTodos([]);
    }
  };

  // Filter and sort todos
  let filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (selectedCategory !== 'all') {
    filteredTodos = filteredTodos.filter(todo => todo.category === selectedCategory);
  }

  if (!showCompleted) {
    filteredTodos = filteredTodos.filter(todo => !todo.completed);
  }

  // Sort
  if (sortBy === 'priority') {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    filteredTodos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  } else if (sortBy === 'name') {
    filteredTodos.sort((a, b) => a.text.localeCompare(b.text));
  } else {
    filteredTodos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
    byPriority: {
      high: todos.filter(t => !t.completed && t.priority === 'high').length,
      medium: todos.filter(t => !t.completed && t.priority === 'medium').length,
      low: todos.filter(t => !t.completed && t.priority === 'low').length,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
              <ListTodo className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Todo App</h1>
              <p className="text-white/60 text-sm">Organize your tasks with ease</p>
            </div>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-3 border border-white/20">
              <p className="text-white/60 text-sm">Total Tasks</p>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
              <p className="text-green-200 text-sm">Completed</p>
              <p className="text-2xl font-bold text-green-400">{stats.completed}</p>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
              <p className="text-blue-200 text-sm">Active</p>
              <p className="text-2xl font-bold text-blue-400">{stats.active}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Input Section */}
        <div className="mb-8">
          <TodoInput onAdd={addTodo} categories={CATEGORIES} />
        </div>

        {/* Stats and Filters */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Panel */}
          <TodoStats stats={stats} />

          {/* Filters Panel */}
          <div className="lg:col-span-2">
            <TodoFilters
              filter={filter}
              setFilter={setFilter}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              categories={CATEGORIES}
              showCompleted={showCompleted}
              setShowCompleted={setShowCompleted}
              onClearCompleted={clearCompleted}
              onClearAll={clearAll}
              completedCount={stats.completed}
              totalCount={stats.total}
            />
          </div>
        </div>

        {/* Todo List */}
        {filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onUpdateCategory={updateTodoCategory}
            onUpdatePriority={updateTodoPriority}
            categories={CATEGORIES}
          />
        ) : (
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-12 text-center">
            <ListTodo className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No tasks found</h3>
            <p className="text-white/60">
              {todos.length === 0
                ? 'Add your first task to get started!'
                : 'No tasks match your current filters'}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-white/60 text-sm">
          <p>✅ Your tasks are automatically saved to your browser's local storage</p>
        </div>
      </footer>
    </div>
  );
}
