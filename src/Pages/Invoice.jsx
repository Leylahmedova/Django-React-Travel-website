import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPrinter } from 'react-icons/bs';
function Invoice() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("http://localhost:8000/payments/get_payments/")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            console.log(data)
          });
      }, []);
      
  return (
    <>

    <div className='invoice__page'>
        <h1>Booking History</h1>
        <div>
          <button><Link to="/">Back Home</Link></button>
          <button>Print<BsPrinter className='printinvoice'/></button>
          
        </div>
                 {data.length
              ? data.map((a) => {           
                  return (
                    <div className='invoices' key={a.id}>
                      <img src="https://t4.ftcdn.net/jpg/01/87/05/85/360_F_187058599_HMTW3JI1N7Xo7I1RZJwdMkjTP6HvJQYR.jpg" alt="" />
                    <h1>Type: <span>{a.type}</span></h1>
                   
                    <div>
                      <div>
                    <h2>Card number:</h2>
                    <span>{a.card_number}</span>
                    </div>
                    <div>
                    <h2>Expiration date:</h2>
                    <span>{a.expiration_date}</span>
                    </div>
                    </div>
                    <div>
                    <div>
                    <h2>Cvc:</h2>
                    <span>{a.cvc}</span>
                    </div>
                    <div>
                    <h2>Name on card:</h2>
                    <span>{a.name_on_card}</span>
                    </div>
                    </div>
                    <div className='invoice__total'>
                    <span>Total price:</span>
                    <span>{a.hotelprice}$</span>

                    </div>

                    <div className='invoice__about'>
                      <h5>www.goolobe.com</h5>
                      <h5>invoice@goolobe.com</h5>
                      <h5>(123) 123-456</h5>
                    </div>
                    

                  
                    </div>
                  );
                })
              : null}
           

    </div>
    </>
  )
}

export default Invoice