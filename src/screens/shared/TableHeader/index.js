import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ columnsNames, sortColumn }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c.ID}>
            {' '}
            {c.Name}
            {' '}
            <br />
            <a className="waves-effect waves-light btn" onClick={() => sortColumn(c.ID)}>
              Sort by
              {c.Name}
            </a>
          </th>
        ))}
        <th />
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  sortColumn: PropTypes.func.isRequired,
  columnsNames: PropTypes.shape({
    ID: PropTypes.string,
    Name: PropTypes.string,
  }).isRequired,
};
