import React from 'react';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
    border
  } from '@chakra-ui/react';

export default function AlertConfirmation() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
      <>
        <Button onClick={onOpen} colorScheme='blue'  width='100%' marginTop='20px'>Crear tu cuenta</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Registro exitoso</AlertDialogHeader>
            <AlertDialogCloseButton />

            <AlertDialogBody>
                            
            </AlertDialogBody>

            <AlertDialogFooter>              
                <Button colorScheme='blue' ml={3}  type='submit' >
                    Continuar
                </Button>
            </AlertDialogFooter>
            
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }