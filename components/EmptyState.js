import React from 'react'
import {
  Heading,
  Box,
  Text,
  Button,
  Flex
} from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'
const EmptyState = () => (
<Flex width="100%"
              backgroundColor="white"
              borderRadius="8px"
              p={16}
              height="100%"
              justify="center"
              direction="column"
             align="center"
            >
              <Heading size="md"  mb={4}>
               You haven't added any sites.
              </Heading>
              <Text mb={4}> Lets get started</Text>
              <AddSiteModal>
                Add your first site
                </AddSiteModal>
            </Flex>
    
)

export default EmptyState