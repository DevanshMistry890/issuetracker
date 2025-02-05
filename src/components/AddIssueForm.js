import React from 'react';

const AddIssueForm = () => {
  return (
    <div className="add-issue-form m-5 container">
      <h2>
        Add New Issue
      </h2>
      <form>
        <div class="form-group">
            <label htmlFor='title' className='mb-3'>Title</label>
            <div className="input-group mb-4">
            <input type='text' id='title' name='title' className="form-control"/>
            </div>
        </div>
        <div class="form-group">
          <label htmlFor="status" className='mb-3'>Status:</label>
          <div className='input-group mb-2'>
          <select id="status" name="status" className="form-control">
            <option value="open">Open</option>
            <option value="inProgress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          </div>
        </div>
        {/* <div>
            <label htmlFor='status'>Status:</label>
            <input type='radio' id='status' name='status' value='open'/>Open
            <input type='radio' id='status' name='status' value='close'/>Closed
            <input type='radio' id='status' name='status' value='pending'/>Pending
        </div> */}
        <button type='submit' className='btn btn-primary'>Add Issue</button>
      </form>
    </div>
  );
};

export default AddIssueForm;
