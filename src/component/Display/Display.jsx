import React from "react";
import { useState } from 'react';
import Header from "../Header/Header"
import Input from "../Input/Input";
import './Display.css';
import Output from "../Output/Output";
import Footer from "../Footer/Footer";


const Display=()=>{
    const [customers, setCustomers] = useState([]);

    const handleAddCustomer = (customer) => {
        setCustomers([...customers, customer]);
      };

    return(
    <div className="dis">
    <Header/>
    <Input onAddCustomer={handleAddCustomer}/>
    <Output customers={customers}/>
    <Footer/>
</div>
    )
};
export default Display;