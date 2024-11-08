import { useState, useEffect } from 'react';

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // Default group by status
  const [sortBy, setSortBy] = useState('priority'); // Default sort by priority

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets || []);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  return { tickets, groupBy, setGroupBy, sortBy, setSortBy };
};
