import React from 'react'
import {
  Flex,
  Stack,
  Link,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button
} from '@chakra-ui/react'
import {GoogleIcon} from '@/styles/theme'
import { useAuth } from '@/lib/auth'
import AddSiteModal from './AddSiteModal'
import NextLink from 'next/link'
const DashboardShell = ({children}) => {
   const {user,signout}=useAuth()
   return <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        p={4}
      >
        <Stack spacing={4} isInline alignItems="center">
        <Icon as={GoogleIcon} w="10" h="10" />
         <NextLink href="/">Sites</NextLink>
          <Link>FeedBack</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          {user && <Button variant="ghost" mr={2} onClick={()=>signout()}>Log Out</Button>}
          <Avatar size="sm"  src={user?.photoURL}/>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          maxWidth="800px"
         direction="column"
         width="100%"
          ml="auto"
          mr="auto"
          maxH="300px"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between"  alignItems="center">
          <Heading mb={4}>Sites</Heading>
          <AddSiteModal>
            + Add Site
            </AddSiteModal>
          </Flex>
           {children}
        </Flex>
      </Flex>
    </Flex>

}

export default DashboardShell