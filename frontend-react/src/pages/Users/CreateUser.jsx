import React, { useState } from 'react';
import { createUser } from '../../api/users';
import { Box, Heading, Input, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    await createUser({ name, email, password });
    navigate('/');
  };

  return (
    <Box>
      <Heading>Create User</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Create</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateUser;
