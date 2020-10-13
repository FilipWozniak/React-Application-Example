import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({
  user, setSelectedUser, selectedUser, removeUser,
}) {
  return (
    <tr
      style={{ backgroundColor: user.UserID === selectedUser.UserID ? 'yellow' : 'white' }}
      onClick={() => setSelectedUser(user)}
    >
      <td>
        {user.UserID}
      </td>
      <td>
        {user.firstName}
      </td>
      <td>
        {user.lastName}
      </td>
      <td>
        <button type="button" onClick={() => removeUser(user)} className="btn"> Remove User </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  removeUser: PropTypes.func.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    UserID: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    UserID: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
