import { useState } from 'react';
import './Input.css';

const Input = ({ onAddCustomer }) => {
  const [billAmount, setBillAmount] = useState('');
  const [service, setService] = useState(0);
  const [customerName, setCustomerName] = useState('');

  const handleBillAmountChange = (e) => {
    setBillAmount(parseFloat(e.target.value));
  };

  const handleServiceChange = (e) => {
    setService(parseFloat(e.target.value));
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleAddCustomerClick = () => {
    if (customerName && service && billAmount) {
      const tipAmount = billAmount * service;
      const customer = {
        name: customerName,
        tip: tipAmount.toFixed(2),
      };
      onAddCustomer(customer);
      setBillAmount(0);
      setService(0);
      setCustomerName('');
      const existingCustomers = JSON.parse(localStorage.getItem('customers')) || [];
      existingCustomers.push(customer);
      localStorage.setItem('customers', JSON.stringify(existingCustomers));
    }
};
  
  return (
    <div className='align'>
      <label htmlFor='bill'>Enter your bill amount:</label>
      <br />
      <br />
      <input
        type='number'
        placeholder='Bill Amount in Rs.'
        className='inpt'
        value={billAmount}
        onChange={handleBillAmountChange}
      />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <label htmlFor='service' className='mx-3'>
        How was the service?{' '}
      </label>
      <select
        id='service'
        className='slt'
        value={service}
        onChange={handleServiceChange}
      >
        <option value=''>Choose....</option>
        <option value='0.2'>Excellent - 20%</option>
        <option value='0.1'>Moderate - 10%</option>
        <option value='0.05'>Bad - 5%</option>
      </select>
      <input
        type='text'
        placeholder='Customer Name'
        className='cust-name'
        value={customerName}
        onChange={handleCustomerNameChange}
      />
      <button
        className='btn btn-primary btn-sm cal-bttn'
        onClick={handleAddCustomerClick}
      >
        Add Customer
      </button>
    </div>
  );
};

export default Input;
