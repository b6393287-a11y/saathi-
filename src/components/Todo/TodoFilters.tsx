import { Filter, Trash2, RotateCcw } from 'lucide-react';

interface TodoFiltersProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: 'date' | 'priority' | 'name';
  setSortBy: (sort: 'date' | 'priority' | 'name') => void;
  categories: string[];
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
  onClearCompleted: () => void;
  onClearAll: () => void;
  completedCount: number;
  totalCount: number;
}

export default function TodoFilters({
  filter,
  setFilter,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
  showCompleted,
  setShowCompleted,
  onClearCompleted,
  onClearAll,
  completedCount,
  totalCount,
}: TodoFiltersProps) {
  return (
    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-lg p-6 border border-white/20 space-y-4">
      <h3 className="font-semibold text-white flex items-center gap-2">
        <Filter className="w-5 h-5 text-purple-400" />
        Filters & Sorting
      </h3>

      {/* Filter Status */}
      <div className="space-y-2">
        <p className="text-sm text-white/70 font-semibold">Filter by Status</p>
        <div className="grid grid-cols-3 gap-2">
          {(['all', 'active', 'completed'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm capitalize ${
                filter === f
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <p className="text-sm text-white/70 font-semibold">Filter by Category</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
              selectedCategory === 'all'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="space-y-2">
        <p className="text-sm text-white/70 font-semibold">Sort by</p>
        <div className="grid grid-cols-3 gap-2">
          {(['date', 'priority', 'name'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm capitalize ${
                sortBy === s
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Completed */}
      <div className="space-y-2">
        <p className="text-sm text-white/70 font-semibold">Display Options</p>
        <button
          onClick={() => setShowCompleted(!showCompleted)}
          className={`w-full py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
            showCompleted
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-orange-500/30 text-orange-300 border border-orange-500/50'
          }`}
        >
          {showCompleted ? '✓ Showing completed tasks' : '✗ Hiding completed tasks'}
        </button>
      </div>

      {/* Clear Actions */}
      <div className="border-t border-white/10 pt-4 space-y-2">
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="w-full py-2 px-3 bg-orange-500/20 hover:bg-orange-500/40 text-orange-400 rounded-lg font-semibold transition-all text-sm flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
          </button>
        )}
        {totalCount > 0 && (
          <button
            onClick={onClearAll}
            className="w-full py-2 px-3 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg font-semibold transition-all text-sm flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
}
