import { Button } from '@chakra-ui/button';
import { useColorMode  } from '@chakra-ui/color-mode'
import {SunIcon, MoonIcon} from "@chakra-ui/icons";
import React from 'react'

const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();

  
  return (
    
    <Button onClick={() => toggleColorMode()}
      top='50' right='0' m='1rem'>
    {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} 
    </Button>
    
  );
};

export default ToggleColorMode;