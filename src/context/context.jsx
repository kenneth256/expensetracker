import { createContext, useState } from "react";


export const GlobalContext= createContext(null);

function GlobalState({children}) {
const [formData, setFormData] = useState({
    type: 'expense',
    amount: 0,
    description: '',
})

    const [value,  setValue] = useState('expense');
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransactions, setAllTransactions] = useState([]);

    function handleFormSubmit(currentFormData){
        if(!currentFormData.description || !currentFormData.amount) return;

        setAllTransactions([
            ...allTransactions,
            {...currentFormData,  id: Date.now()}
        
        ]);
        console.log(currentFormData)

    }
    
    return <GlobalContext.Provider value={{formData, setFormData, allTransactions,
     setAllTransactions, totalExpense, setTotalExpense,
     totalIncome, setTotalIncome, value, setValue, handleFormSubmit}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalState