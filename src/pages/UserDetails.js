import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function UserDetails() {
  const { id } = useParams();
  const { data } = useFetch(`/users/${id}`);

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {console.log(data)}
      {console.log(id)}
      <li>ID: {data?.id}</li>
      <li>Name: {data?.name}</li>
    </ul>
  );
}
