import React from 'react';
import {
  Box,
  Button,
  Code,
  Tag,
  TagLabel,
  Flex,
  Stack,
  FormLabel,
  Switch,IconButton
} from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import DeleteButton from './DeleteButton';

const FeedbackTable = ({feedback}) => {
  console.log(feedback)
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th width="50px">{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {feedback?.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{feedback.route || '/'}</Code>
            </Td>
            <Td>
              <Switch
                id="email-alerts"
                color="green"
                defaultChecked={feedback.status === 'active'}
              />
            </Td>
            <Td>
              <DeleteButton feedbackId={feedback.id}/>
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;