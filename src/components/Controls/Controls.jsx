import React, { useState } from 'react';
import './Controls.css';

const Controls = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  // State to control visibility of the inner dropdowns
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);

  // Function to toggle display dropdown visibility
  const toggleDisplayDropdown = () => {
    setIsDisplayOpen(!isDisplayOpen);
  };

  // Function to handle selection of group by option and close the dropdown
  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    setIsDisplayOpen(false); // Close dropdown after selection
  };

  // Function to handle selection of sort by option and close the dropdown
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    setIsDisplayOpen(false); // Close dropdown after selection
  };

  return (
    <div className="controls">
      {/* Display Dropdown */}
      <div className="display-dropdown">
        <button onClick={toggleDisplayDropdown} className="display-button">
          <img src="/Display.svg" alt="" /> Display
        </button>

        {isDisplayOpen && (
          <div className="display-options">
            {/* Group By Dropdown */}
            <div className="dropdown-section">
              <label htmlFor="group-by">Group by:</label>
              <select
                id="group-by"
                value={groupBy}
                onChange={handleGroupByChange} // Close dropdown after selection
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div className="dropdown-section">
              <label htmlFor="sort-by">Sort by:</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={handleSortByChange} // Close dropdown after selection
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Controls;
