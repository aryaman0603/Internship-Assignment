import React from "react";
import "./TicketCard.css"; // Importing CSS for styles

const TicketCard = ({ ticket }) => {
  const { id, title, priorityIcon, label, assignee } = ticket;

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{id}</span>
        {/* Safely accessing the avatar URL */}
        {assignee?.avatarUrl ? (
          <img className="avatar" src={assignee.avatarUrl} alt={assignee.name} />
        ) : (
          <div className="avatar-placeholder">N/A</div> 
        )}
      </div>
      <div className="ticket-title">{title}</div>
      <div className="ticket-footer">
        <div className="priority-icon">{priorityIcon}</div>
        <div className="label">
          <span className="label-dot"></span> {label}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
