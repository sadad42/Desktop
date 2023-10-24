import { HStack, Image, Text } from '@chakra-ui/react'
import skull from '../assets/skull.webp'


const NavBar = () => {
  return (
    <HStack>
      <Image src={skull} boxSize='60px'/>
      <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar