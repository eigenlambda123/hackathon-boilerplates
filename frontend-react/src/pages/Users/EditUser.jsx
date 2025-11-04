import React, { useState, useEffect } from 'react';
import { getUser, updateUser } from '../../api/users';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, Input, Button, VStack } from '@chakra-ui/react';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(id);
      setName(data.name);
      setEmail(data.email);
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async () => {
    await updateUser(id, { name, email });
    navigate(`/users/${id}`);
  };

  return (
    <Box>
      <Heading>Edit User</Heading>
      <VStack>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Button onClick={handleUpdate}>Save</Button>
      </VStack>
    </Box>
  );
};

export default EditUser;
