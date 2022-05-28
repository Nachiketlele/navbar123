import React from 'react'
import { Box, Button} from '@chakra-ui/react'
import styles from './Navbar.module.css'
import Buttons from './Buttons'
import Category from './Category';
const Navbar = () => {
  return (
    <div >
        <Box className={styles.div} bg='white' border='1px solid grey'w='100%' p={4} color='red'>

             <Box bg='white'  w='100%' p={4} color='red'>
                <Category/> 
              </Box>
           
           {/* ------------------------------------------------------------- */}
        
              <Box bg='white'  w='100%' p={4} color='red'>
                    <Buttons/>
              </Box>
       </Box>
    </div>
  )
}

export default Navbar