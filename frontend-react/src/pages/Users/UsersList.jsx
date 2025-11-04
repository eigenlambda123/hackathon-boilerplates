import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/users';
import { Link } from 'react-router-dom';
import { Box, VStack, Heading, Text, Spinner, Button, HStack } from '@chakra-ui/react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <Spinner/>;

  return (
    <VStack>
      <Heading>Users</Heading>
      {users.map((user) => (
        <Box key={user.id}>
          <HStack>
            <Box>
              <Text><b>Name:</b> {user.name}</Text>
              <Text><b>Email:</b> {user.email}</Text>
            </Box>
            <Button as={Link} to={`/users/${user.id}`}>View</Button>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default UsersList;
