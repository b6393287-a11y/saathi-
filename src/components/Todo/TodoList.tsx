import { Edit2, Trash2, CheckCircle2, Circle, Calendar, Flag } from 'lucide-react';
import { useState } from 'react';
import { Todo } from '../../TodoApp';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onUpdateCategory: (id: string, category: string) => void;
  onUpdatePriority: (id: string, priority: 'low' | 'medium' | 'high') => void;
  categories: string[];
}

const PRIORITY_CONFIG = {
  high: { color: 'bg-red-500/20 border-red-500/30 text-red-400', label: 'High', dot: 'bg-red-500' },
  medium: { color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400', label: 'Medium', dot: 'bg-yellow-500' },
  low: { color: 'bg-green-500/20 border-green-500/30 text-green-400', label: 'Low', dot: 'bg-green-500' },
};

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  onUpdateCategory,
  onUpdatePriority,
  categories,
}: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const startEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id: string) => {
    if (editText.trim()) {
      onEdit(id, editText);
    }
    setEditingId(null);
  };

  const getPriorityColor = (priority: string) => {
    const config = PRIORITY_CONFIG[priority as keyof typeof PRIORITY_CONFIG];
    return config || PRIORITY_CONFIG.medium;
  };

  const isOverdue = (dueDate?: Date) => {
    if (!dueDate) return false;
    return dueDate < new Date() && dueDate.toDateString() !== new Date().toDateString();
  };

  return (
    <div className="space-y-3">
      {todos.map(todo => {
        const isEditing = editingId === todo.id;
        const config = getPriorityColor(todo.priority);

        return (
          <div
            key={todo.id}
            className={`bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-lg p-4 border transition-all hover:border-purple-400/50 border-white/10 group ${
              todo.completed ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Checkbox */}
              <button
                onClick={() => onToggle(todo.id)}
                className="mt-1 text-white/60 hover:text-white transition-colors flex-shrink-0"
              >
                {todo.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>

              {/* Todo Content */}
              <div className="flex-1 min-w-0">
                {isEditing ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                      autoFocus
                      className="flex-1 px-3 py-2 bg-white/10 border border-purple-400 rounded text-white focus:outline-none"
                    />
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-gray-600 text-white rounded font-semibold hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <p className={`text-lg ${
                      todo.completed ? 'line-through text-white/50' : 'text-white'
                    }`}>
                      {todo.text}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {/* Priority Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${config.color} inline-flex items-center gap-1`}
                      >
                        <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                        {config.label}
                      </span>

                      {/* Category Badge */}
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-semibold">
                        {todo.category}
                      </span>

                      {/* Due Date Badge */}
                      {todo.dueDate && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border inline-flex items-center gap-1 ${
                            isOverdue(todo.dueDate)
                              ? 'bg-red-500/20 border-red-500/30 text-red-300'
                              : 'bg-purple-500/20 border-purple-500/30 text-purple-300'
                          }`}
                        >
                          <Calendar className="w-3 h-3" />
                          {todo.dueDate.toLocaleDateString()}
                        </span>
                      )}

                      {/* Created Date */}
                      <span className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 rounded-full text-xs">
                        {todo.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Actions */}
              {!isEditing && (
                <div className="flex gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Edit Button */}
                  <button
                    onClick={() => startEdit(todo.id, todo.text)}
                    className="p-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-lg transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
