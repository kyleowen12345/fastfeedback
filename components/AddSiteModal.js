import {useRef} from 'react'
import { useForm } from "react-hook-form";
import {mutate} from "swr"
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
    useToast 
  } from "@chakra-ui/react"
  import {createSites} from '@/lib/db'
import { useAuth } from '@/lib/auth';

const AddSiteModal=({children})=> {
    const toast = useToast()
    const {user}=useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register, handleSubmit } = useForm();
    const initialRef =useRef()
    const onSubmit=({site,link})=>{
      const newSite={
        authorId:user.uid,
      createdAt:new Date().toISOString(),
      site,
      link
      }
const {id}=createSites(newSite)
  toast({
    title: "Success",
    description: "We've added your site",
    status: "success",
    duration: 5000,
    isClosable: true,
  })
  mutate(user ? ['/api/sites',user?.token]:null,async (data)=>{
    return [{id,...newSite},...data]
  },false)
  onClose()
    }
    return (
      <>

        <Button onClick={onOpen} backgroundColor="gray.900" color="white" fontWeight="medium" _hover={{color:"black", backgroundColor:"white"}} _active={{transform:'scale(0.95)'}}>{children}</Button>
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