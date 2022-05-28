import React from 'react'
import {Button,Stack} from '@chakra-ui/react'
import styles from './Navbar.module.css'
const Buttons = () => {
  return (
    <Stack className={styles.stack} spacing={7} direction='row' >
    <Button fontWeight='400' color='black' variant='link'>
     SignIn
    </Button>
    <Button className={styles.bt} fontWeight='500' bg='#ff69b4' color='white' variant='solid'>
      SignUp
    </Button>
    </Stack>
  )
}

export default Buttons