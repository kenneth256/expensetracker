import { Box, Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";
import TransactionForm from "../Transaction/Transanction";
import Chart1 from "../chart/Chart";

const Summary = ({onClose, isOpen, totalIncome, totalExpense}) => {

  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      display={"flex"}
    >
      <Flex
        w="full"
        justifyContent="center"
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"20"}
          mr={"2"}
          flexDirection={"column"}
        >
          <Heading size={"md"} mb={"5"} color={"gray.600"}>
            Balance is {totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.200"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.400"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ {totalIncome}</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex> 
          
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.200"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.400"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ {totalExpense}</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box flex={1} mt={10} ml={'-90'} height={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}> 
<Heading><Chart1 expense={totalExpense} income={totalIncome}/> </Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen}/>
    </Box>
  );
};

export default Summary;
