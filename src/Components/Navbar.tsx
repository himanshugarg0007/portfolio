import AnchorLink from 'react-anchor-link-smooth-scroll';
import DP from '../assets/DP.jpg';
import Himanshu from '../assets/Himanshu.png';
import React,{ReactNode} from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  children: ReactNode
}

const Links = [
<AnchorLink href='#home'>Home</AnchorLink>,
<AnchorLink href='#about'>About</AnchorLink>,
<AnchorLink href='#skills-section'>Skills</AnchorLink>,
<AnchorLink href='#projects'>Projects</AnchorLink>,
<button onClick={() => window.location.href = 'https://drive.google.com/file/d/1NAPagWqo9Nta7_sHBt2BJlEmm4UU3JoT/view?usp=sharing'}>Resume</button>,
<AnchorLink href='#contact'>Contact</AnchorLink>]

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Avatar size={'sm'} src={Himanshu} /></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Text display={"flex"} gap={2}>Himanshu <Text color={'blue'}>Garg</Text></Text>
              </MenuButton>
              <MenuList>
                <MenuItem><Avatar
                  size={"2xl"}
                  src={DP}
                />
                </MenuItem>
                <MenuItem><h1 style={{textAlign:"center",marginTop:"10px",fontSize:"20px",fontWeight:"bold"}}>Himanshu Garg</h1></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )
}
