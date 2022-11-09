import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import './NavBar2.css';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

    const Nav = ({ sticky }) => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue(sticky ? "gray.300" : "" , sticky ? "black" : "")} px={4} className={sticky  ? "navbar navbar-sticky" : "navbar"} >
        
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              
            </Stack>
          </Flex>
        </Flex>
        
      </Box>
    </>
  );
}

export default Nav;