import React from 'react';

const FilterIssues = () => {
  return (
    <div className="filter-issues m-5 container">
      <h2>Filter Issues</h2>
      <form>
        <label htmlFor="filter">Filter by Status:</label>
        <select id="filter" name="filter" className="form-control">
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </form>
    </div>
  );
};

export default FilterIssues;
