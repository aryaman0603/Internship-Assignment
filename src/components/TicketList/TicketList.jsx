import React from 'react';
import TicketCard from '../TicketCard/TicketCard.jsx';
import './TicketList.css';

const TicketList = ({ title, tickets, sortBy }) => {
  const sortTickets = (tickets) => {
    if (sortBy === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const sortedTickets = sortTickets(tickets);

  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      <ul>
        {sortedTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
