import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';
// import api from '../services/api';

export default function UserList() {
  const { data, mutate } = useFetch('/users');
  
  const handleNameChange = useCallback((id) => {
    api.put(`/users/${id}`, { name: 'Bartolomeu' });

    const updatedUsers = data?.map(user => {
      console.log(user);
      if (user.id === id) {
        return { ...user, name: 'Bartolomeu' }
      }

      return user;
    })

    mutate(updatedUsers, false)
    mutateGlobal(`/users/${id}`, { id, name: 'Bartolomeu' })
  }, [data, mutate]);

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
          <button type="button" onClick={() => handleNameChange(user.id)}>
            Alterar nome
          </button>
        </li>
      ))}
    </ul>
  );
}
