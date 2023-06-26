import React, { useRef } from 'react'

const Form = (props) => {

    const pid=useRef();
    const pname=useRef();
    const pprice=useRef();
    const pcategory=useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const obj={
            id:pid.current.value,
            name:pname.current.value,
            price:pprice.current.value,
            category:pcategory.current.value
        }

        localStorage.setItem(obj.id,JSON.stringify(obj))

        console.log(obj)
      
    }



  return (
    <div className="App">
        <form  onSubmit={formSubmitHandler}>
            <label>Product ID</label>
            <input type="number" name='id' ref={pid}/>
            <label>Product Name</label>
            <input type="text" name='name' ref={pname} />
            <label>Product Price</label>
            <input type="number" name='price' ref={pprice}/>
            <label>Product Category</label>
            <select name="category" ref={pcategory}>
                <label>Product</label>
                <option value="food">Food</option>
                <option value="cosmetic">Cosmetics</option>
                <option value="cloth">Clothes</option>
                <option value="electronics">Electronics</option>
            </select>
            <input type="submit" />
        </form>
      
    </div>
  )
}

export default Form
