import React, { useEffect, useState } from 'react';
import { getUser } from '../../api/users';
import { useParams, Link } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(id);
      setUser(data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <Text>Loading...</Text>;

  return (
    <Box>
      <Heading>User Detail</Heading>
      <Text>ID: {user.id}</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button as={Link} to={`/users/${id}/edit`}>Edit User</Button>
      <Button onClick={() => handleDelete(user.id)}>Delete User</Button>
      <Button as={Link} to={`/users/list`}>Back to Users</Button>
    </Box>
  );
};

export default UserDetail;
