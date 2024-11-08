import React from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard.jsx';
import Controls from './components/Controls/Controls.jsx';
import { useTickets } from './hooks/useTickets';

const App = () => {
  const { tickets, groupBy, setGroupBy, sortBy, setSortBy } = useTickets();

  return (
    <div className="app-container">
      <Controls groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
