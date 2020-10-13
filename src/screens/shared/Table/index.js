import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

export default function Table({
  users, setSelectedUser, selectedUser, removeUser, sortColumn,
}) {
  return (
    <table>
      <TableHeader
        sortColumn={sortColumn}
        users={users}
        columnsNames={[
          {
            ID: 'UserID',
            Name: 'User ID',
          },
          {
            ID: 'firstName',
            Name: 'First Name',
          },
          {
            ID: 'lastName',
            Name: 'Last Name',
          },
        ]}
      />
      <tbody>
        {/* eslint-disable-next-line react/prop-types */}
        {users.map((u) => (
          <TableRow
            key={u.UserID}
            user={u}
            setSelectedUser={setSelectedUser}
            removeUser={removeUser}
            selectedUser={selectedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  removeUser: PropTypes.func.isRequired,
  sortColumn: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    UserID: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
