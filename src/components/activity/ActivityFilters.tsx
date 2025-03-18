
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

interface ActivityFiltersProps {
  filter: 'all' | 'tasks' | 'claims' | 'burns';
  setFilter: (filter: 'all' | 'tasks' | 'claims' | 'burns') => void;
}

export const ActivityFilters = ({ filter, setFilter }: ActivityFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-gray-400" />
        <div className="flex gap-2">
          <Button 
            variant={filter === 'all' ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter('all')}
            className="text-sm"
          >
            All Activity
          </Button>
          <Button 
            variant={filter === 'tasks' ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter('tasks')}
            className="text-sm"
          >
            Tasks
          </Button>
          <Button 
            variant={filter === 'claims' ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter('claims')}
            className="text-sm"
          >
            Claims
          </Button>
          <Button 
            variant={filter === 'burns' ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter('burns')}
            className="text-sm"
          >
            Burns
          </Button>
        </div>
      </div>
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input 
          placeholder="Search activities..." 
          className="pl-10 w-full sm:w-[250px] bg-gray-800/30 border-gray-700"
        />
      </div>
    </div>
  );
};
