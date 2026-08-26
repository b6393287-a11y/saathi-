import { TrendingUp, AlertCircle, CheckCircle2, Zap } from 'lucide-react';

interface TodoStatsProps {
  stats: {
    total: number;
    completed: number;
    active: number;
    byPriority: {
      high: number;
      medium: number;
      low: number;
    };
  };
}

export default function TodoStats({ stats }: TodoStatsProps) {
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Completion Rate */}
      <div className="bg-gradient-to-br from-green-800/30 to-emerald-900/30 backdrop-blur-md rounded-lg p-6 border border-green-500/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <h3 className="font-semibold text-white">Completion Rate</h3>
          </div>
        </div>
        <div className="relative h-8 bg-black/20 rounded-full overflow-hidden border border-green-500/20">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500 flex items-center justify-center"
            style={{ width: `${completionRate}%` }}
          >
            {completionRate > 10 && (
              <span className="text-xs font-bold text-white">{completionRate}%</span>
            )}
          </div>
        </div>
        <p className="text-sm text-green-300 mt-2">
          {stats.completed} of {stats.total} tasks completed
        </p>
      </div>

      {/* Priority Breakdown */}
      <div className="bg-gradient-to-br from-purple-800/30 to-blue-900/30 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
        <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Priority Breakdown
        </h3>
        <div className="space-y-3">
          {/* High Priority */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-red-300 font-semibold">High Priority</span>
              <span className="text-lg font-bold text-red-400">{stats.byPriority.high}</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden border border-red-500/20">
              <div
                className="h-full bg-red-500 transition-all"
                style={{
                  width: `${stats.active > 0 ? (stats.byPriority.high / stats.active) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Medium Priority */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-yellow-300 font-semibold">Medium Priority</span>
              <span className="text-lg font-bold text-yellow-400">{stats.byPriority.medium}</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden border border-yellow-500/20">
              <div
                className="h-full bg-yellow-500 transition-all"
                style={{
                  width: `${stats.active > 0 ? (stats.byPriority.medium / stats.active) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Low Priority */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-green-300 font-semibold">Low Priority</span>
              <span className="text-lg font-bold text-green-400">{stats.byPriority.low}</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden border border-green-500/20">
              <div
                className="h-full bg-green-500 transition-all"
                style={{
                  width: `${stats.active > 0 ? (stats.byPriority.low / stats.active) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
