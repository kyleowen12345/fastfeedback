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
} from '@chakra-ui/react'
import {GoogleIcon} from '@/styles/theme'
import { useAuth } from '@/lib/auth'
const DashboardShell = ({children}) => {
   const auth=useAuth()
   return <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        p={4}
      >
        <Stack spacing={4} isInline alignItems="center">
        <Icon as={GoogleIcon} w="10" h="10" />
          <Link>Sites</Link>
          <Link>FeedBack</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm"  src={auth.user.photoURL}/>
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
          <Heading mb={4}>Sites</Heading>
           {children}
        </Flex>
      </Flex>
    </Flex>

}

export default DashboardShell