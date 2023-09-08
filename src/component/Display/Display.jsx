import React from "react";
import { useState } from 'react';
import Header from "../header/header";
import Input from "../input/input";
import './Display.css';
import Output from "../output/output";
import Footer from "../footer/footer";


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