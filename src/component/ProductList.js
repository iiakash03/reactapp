import React, { useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const arr = [];

    for (let i = 0; i < keys.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    console.log(arr);
    setProducts(arr);
  }, []);

  const handleDelete = (itemId) => {
    localStorage.removeItem(itemId);
    setProducts((prevProducts) => prevProducts.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <div>
          <h3>Food</h3>
          <ul>
            {products.map((item) => {
              if (item.category === 'food') {
                return (
                  <li key={item.id}>
                    {`${item.name} ${item.price} ${item.id} ${item.category}`}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div>
          <h3>Cosmetics</h3>
          <ul>
            {products.map((item) => {
              if (item.category === 'cosmetic') {
                return (
                  <li key={item.id}>
                    {`${item.name} ${item.price} ${item.id} ${item.category}`}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div>
          <h3>Clothes</h3>
          <ul>
            {products.map((item) => {
              if (item.category === 'cloth') {
                return (
                  <li key={item.id}>
                    {`${item.name} ${item.price} ${item.id} ${item.category}`}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div>
          <h3>Electronics</h3>
          <ul>
            {products.map((item) => {
              if (item.category === 'electronics') {
                return (
                  <li key={item.id}>
                    {`${item.name} ${item.price} ${item.id} ${item.category}`}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
