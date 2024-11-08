import React from 'react';
import TicketList from '../TicketList/TicketList.jsx';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  // Function to group tickets based on groupBy option
  const groupTickets = (tickets) => {
    if (groupBy === 'status') {
      return tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'user') {
      return tickets.reduce((acc, ticket) => {
        acc[ticket.user] = acc[ticket.user] || [];
        acc[ticket.user].push(ticket);
        return acc;
      }, {});
    } else if (groupBy === 'priority') {
      return tickets.reduce((acc, ticket) => {
        acc[ticket.priority] = acc[ticket.priority] || [];
        acc[ticket.priority].push(ticket);
        return acc;
      }, {});
    }
    return {}; // Fallback in case of unknown grouping
  };

  // Function to sort tickets based on sortBy option
  const sortTickets = (tickets) => {
    if (sortBy === 'priority') {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = groupTickets(tickets);
  const sortedTickets = sortTickets(Object.values(groupedTickets).flat());

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div className="kanban-column" key={group}>
          <h3>{group}</h3>
          <TicketList tickets={groupedTickets[group]} />
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
