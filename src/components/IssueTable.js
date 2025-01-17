import React from 'react';

const IssueTable = () => {
  return (
    <div className='issue-table m-5 container'>
        <h2> Issues </h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Issue 1</td>
                    <td>Open</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Issue 2</td>
                    <td>Closed</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};

export default IssueTable;
