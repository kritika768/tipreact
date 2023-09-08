import { useState, useEffect } from 'react';
import './Output.css';

const Output = () => {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const customers = JSON.parse(localStorage.getItem('customers')) || [];
  
  const calculateTotals = () => {
    let customersCount = customers.length;
    let tipAmount = customers.reduce((total, customer) => total + parseFloat(customer.tip), 0);
    setTotalCustomers(customersCount);
    setTotalTip(tipAmount);
    const existingCustomersCount = JSON.parse(localStorage.getItem('customersCount')) || [];
      existingCustomersCount.push(customersCount);
      localStorage.setItem('customerCount', JSON.stringify(existingCustomersCount));

      const existingTipAmount = JSON.parse(localStorage.getItem('tipAmount')) || [];
      existingTipAmount.push(tipAmount);
      localStorage.setItem('tipAmount', JSON.stringify(existingTipAmount));
  }
  useEffect(() => {
    const storedCustomersCount = JSON.parse(localStorage.getItem('customerCount')) || [];
    const storedTipAmount = JSON.parse(localStorage.getItem('tipAmount')) || [];
    setTotalCustomers(storedCustomersCount[storedCustomersCount.length - 1] || 0);
    setTotalTip(storedTipAmount[storedTipAmount.length - 1] || 0);
  }, []);
  return (
    <div>
      <br />
      <h5 className='border text-center py-1'>Customer List</h5>
      {customers.length > 0 && (
        <ul className='list'>
          {customers.map((customer, index) => (
            <li key={index}>
              {customer.name} offering a tip of Rs. {customer.tip}/-
            </li>
          ))}
        </ul>
      )}
      <hr />
      <button className='btn btn-success btn-sm output-bttn' onClick={calculateTotals}>Calculate Tip & Customer</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="col text-center py-1">Total Customer</th>
            <th className="col text-center py-1">Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='col text-center py-0'>{totalCustomers}</td>
            <td className='col text-center py-0'>{totalTip.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Output
