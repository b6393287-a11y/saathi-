import { useState } from 'react';
import { Plus, Calendar, AlertCircle } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string, priority: 'low' | 'medium' | 'high', category: string, dueDate?: Date) => void;
  categories: string[];
}

export default function TodoInput({ onAdd, categories }: TodoInputProps) {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState(categories[0]);
  const [dueDate, setDueDate] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const due = dueDate ? new Date(dueDate) : undefined;
      onAdd(input, priority, category, due);
      setInput('');
      setDueDate('');
      setPriority('medium');
      setCategory(categories[0]);
      setShowAdvanced(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
      <div className="space-y-4">
        {/* Main Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        {/* Toggle Advanced Options */}
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-purple-300 hover:text-purple-200 transition-colors"
        >
          {showAdvanced ? '▼ Hide options' : '▶ Show options'}
        </button>

        {/* Advanced Options */}
        {showAdvanced && (
          <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {/* Priority */}
            <div>
              <label className="block text-sm text-white/70 mb-2 font-semibold">Priority</label>
              <div className="flex gap-2">
                {(['low', 'medium', 'high'] as const).map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all capitalize ${
                      priority === p
                        ? p === 'high'
                          ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                          : p === 'medium'
                          ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/30'
                          : 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm text-white/70 mb-2 font-semibold">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-gray-900">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm text-white/70 mb-2 font-semibold flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
