import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";


export default function TransactionForm({onClose, isOpen}){
    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext);
    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData)
    }
 
    return <Modal isOpen={isOpen}  onClose={onClose} >
        <form onSubmit={handleSubmit}>
            <ModalOverlay>
                <ModalHeader>
                    Add New transaction
                </ModalHeader>
                <ModalContent>
                <ModalBody>
                    <FormControl>
                        <FormLabel>
                            Enter Description
                        </FormLabel>
                        <Input placeholder="Enter Transaction Description" name="description" type="text" onChange={handleFormChange}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Enter Description
                        </FormLabel>
                        <Input placeholder="Enter Transaction Amount" name="amount" type="number"  onChange={handleFormChange}/>
                    </FormControl>
                    <RadioGroup mt={'5'} value={value} onChange={setValue}>
                        <Radio name="type" colorScheme="blue" onChange={handleFormChange} value="income" checked={formData.type === 'income'}>Income</Radio>
                        <Radio  name="type" colorScheme="red" value="expense"  onChange={handleFormChange} checked={formData.type === 'expense'}>Expense</Radio>
                        </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'4'} onClick={onClose}>Cancel</Button>
                    <Button  type="submit" colorScheme="blue" onClick={onClose}>Add Transaction</Button>
                </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </form>
    </Modal>

}