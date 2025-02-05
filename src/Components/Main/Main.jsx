import { Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import Summary from '../Summary/Summary'
import Expense from '../ExpenseView/Expense'
import { GlobalContext } from '../../context/context'





const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {totalExpense,allTransactions, setTotalExpense, setTotalIncome, totalIncome} = useContext(GlobalContext)

  useEffect(()=>{
    let income = 0;
    let expense = 0;
    allTransactions.forEach(transaction=>{
      transaction.type === 'income' ? income = income+ parseFloat(transaction.amount)  
      : expense = expense + parseFloat(transaction.amount)});
      setTotalExpense(expense);
      setTotalIncome(income);

  }, [allTransactions])
  
  return (
    <Flex textAlign={'center'} flexDirection={'column'} pr={'5'}  pl={'5'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
            <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>
                Expense Tracker
            </Heading>
            <Flex alignItems={'center'} >
                <Button onClick={onOpen} bg={'blue.300'} color={'black'} ml={'4'}>Add Transaction</Button>
            </Flex>
        </Flex>
        <Summary isOpen={isOpen} onClose={onClose}  totalExpense={totalExpense} totalIncome={totalIncome} />
        <Flex w='full' alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column',
           'column', 'column', 'row', 'row']}>
        <Expense data={allTransactions.filter(item =>  item.type === 'expense')}  type='expense'/>
        <Expense  data={allTransactions.filter(item =>  item.type === 'income')} type='income'/>
        </Flex>
    </Flex>
  )
}

export default Main
