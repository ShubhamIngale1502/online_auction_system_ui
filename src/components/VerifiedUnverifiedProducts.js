import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function VerifiedUnverifiedProducts() {
      const [products, setProducts] = useState([]);
      const [verifiedProducts, setVerifiedProducts] = useState([]);
      const [unverifiedProducts, setUnverifiedProducts] = useState([]);
    
      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = () => {
            fetch('http://127.0.0.1:8000/v1/show/') 
              .then(response => {
                if (!response.ok) {
                  throw new Error('Failed to fetch product data');
                }
                return response.json();
              })
              .then(jsonData => {
                setProducts(jsonData);
                setVerifiedProducts(jsonData.filter(product => product.product_verify));
                setUnverifiedProducts(jsonData.filter(product => !product.product_verify));
              })
              .catch(error => {
                console.error('Error fetching product data:', error);
              });
          };
   return (
      <div className="product-table">
      <h4>Verified Products</h4>
      <table className='table bg-warning table-striped'>
        <thead>
          <tr>
            <th>Product_id</th>
            <th>product_name</th>
            <th>Product_description</th>
            <th>product_manufacture_year</th>
            <th>product_base_price</th>
            <th>owner</th>
            <th>product_verify</th>
          </tr>
        </thead>
        <tbody>
          {verifiedProducts.map(product => (
            <tr key={product.product_id}>
            <td>{product.product_id}</td>
            <td>{product.product_name}</td>
            <td>{product.product_description}</td>
            <td>{product.product_manufacture_year}</td>
            <td>${product.product_base_price}</td>
            <td>{product.owner}</td>
            <td>{product.product_verify}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <h4>Unverified Products</h4>
      <table className='table bg-warning table-striped'>
        <thead>
        <tr>
            <th>Product_id</th>
            <th>product_name</th>
            <th>Product_description</th>
            <th>product_manufacture_year</th>
            <th>product_base_price</th>
            <th>owner</th>
            <th>product_verify</th>
          </tr>
        </thead>
        <tbody>
          {unverifiedProducts.map(product => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.product_description}</td>
              <td>{product.product_manufacture_year}</td>
              <td>${product.product_base_price}</td>
              <td>{product.owner}</td>
              <td>{product.product_verify}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   )
 }

 export default VerifiedUnverifiedProducts

