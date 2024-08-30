import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';

const AddItems = ({items,setItems,API_URL,setFetchError}) => {
    const [addItem,setAddItem]=useState("");

    const addNewItem=async()=>{
        const id= (items.length ? items.length+1 : 1).toString();

        const newItem={
            id,
            checked:false,
            item:addItem
        }
        try{
            const response= await axios.post(API_URL,newItem);
            const newItemList=[...items,response.data];
            setItems(newItemList);
        }catch(err){
            setFetchError(err.message);
        }
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addNewItem();
        setAddItem('')
    }
  return (
    <form onSubmit={handleSubmit} className=' flex w-full p-2'>
        <input 
            className=' flex-grow min-h-[48px] mr-1 p-1 rounded outline-none text-2xl'
            style={{maxWidth: 'calc(100%- 50px)'}}
            type='text'
            name='name'
            placeholder='Add item'
            autoFocus
            required
            value={addItem}
            onChange={(e)=>setAddItem(e.target.value)}
        />
        <button type='submit' className=' min-w-[48px] text-2xl p-2 text-blue-600 rounded cursor-pointer h-[48px]'><FaPlus/></button>
    </form>
  )
}

export default AddItems