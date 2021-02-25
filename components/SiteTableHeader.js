import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
  } from '@chakra-ui/react'
  import AddSiteModal from './AddSiteModal'
const SiteTableHeader = () => {
    return (
        <>
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
      </>
    )
}

export default SiteTableHeader
