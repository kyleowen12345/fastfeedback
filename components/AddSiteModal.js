import {useRef} from 'react'
import { useForm } from "react-hook-form";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,Input,
    Button,
    useDisclosure,
  } from "@chakra-ui/react"
  import {createSites} from '@/lib/db'
const AddSiteModal=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register, handleSubmit } = useForm();
    const initialRef =useRef()
    const onSubmit=(e)=>{
  console.log(e)
  createSites(e)
    }
    return (
      <>
        <Button onClick={onOpen} maxW="200px" fontWeight="medium">Add a website</Button>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader fontWeight="bold"> Add Site</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
    
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder="My Site" name="site" ref={register({ required: true,  })}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <Input placeholder="https://website.com"  name="link" ref={register({ required: true  })}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">Cancel</Button>
              <Button backgroundColor="#99FFFE" color="#194D4C" fontWeight="medium" type="submit">
               Create
              </Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddSiteModal