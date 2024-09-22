import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Expense = ({type, data}) => {
  return (
   <Box flex={1} bg={"white"}  p={4} mr={'4'} borderRadius={'12'} pb={'4'} mt={'10'} 
   border={'1px solid'} borderColor={'gray.100'}
   ><Flex justifyContent={'space-between'} alignItems={'center'}>
    <Heading size={'md'} color={'red.700'}>
{
  type === 'income' ? 'Income' : 'Expense'
}
    </Heading>

   </Flex>
   {
    data.map(item => {
      return <Flex bg={type === 'expense' ?  'red.200'  : 'blue.100'}
      mt={'4'}
      justifyContent={'space-between'}
      alignItems={'center'}
      border={'1px solid'}
      borderColor={type === 'expense' ?  'red.400'  : 'blue.200'}
      p={'4'}
      borderRadius={'8'}
      >
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Text ml={'3'} fontWeight="bold" color="gray.600">
            {item.description}
          </Text>
        </Flex>
        <Text>$ {item.amount}</Text>

      </Flex>
    })
   }

   </Box>
  )
}

export default Expense
