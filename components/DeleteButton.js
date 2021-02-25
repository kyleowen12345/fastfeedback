import React, { useState, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteFeedback } from '@/lib/db';
import {mutate} from 'swr'
import { useAuth } from '@/lib/auth';
const DeleteButton = ({feedbackId}) => {
  const {user}=useAuth()
  const [isOpen, setIsOpen] = useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const removeFeedback=()=>{
    deleteFeedback(feedbackId)
    mutate(user ? ['/api/feedback',user?.token]:null,async (data)=>{
      return data.filter((i)=>i.id !== feedbackId)
    },false)
    onClose()
  }

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Delete feedback"
        icon={<DeleteIcon/>}
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Feedback
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button backgroundColor="red.400" onClick={removeFeedback} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteButton;