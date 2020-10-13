import React, { useState } from 'react';
import Header from '../shared/Header';
import Table from '../shared/Table';

export default function Main() {
  const usersInitial = [
    { UserID: 1, firstName: 'Jan', lastName: 'Malewicz' },
    { UserID: 2, firstName: 'Andrzej', lastName: 'Andrzejewicz' },
    { UserID: 3, firstName: 'Anna', lastName: 'Kwiatkowski' },
    { UserID: 4, firstName: 'Marcin', lastName: 'Kowalski' },
    { UserID: 5, firstName: 'Michał', lastName: 'Malinowski' },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = () => {
    setUsers([...users, { UserID: users[users.length - 1].UserID + 1, firstName: 'Filip', lastName: 'Wozniak' }]);
  };

  const removeUser = (user) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].UserID === user.UserID) {
        users.splice(i, 1);
        break;
      }
    }
  };

  const sortColumn = (key) => {
    let arrayCopy = [...users];
    setUsers(sortByKey(arrayCopy, key));
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  function sortByKey(array, key) {
    return array.sort((a, b) => {
      const x = a[key]; const y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn"> ADD USER </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          removeUser={removeUser}
          selectedUser={selectedUser}
          sortColumn={sortColumn}
        />
      </div>
    </>
  );
}
