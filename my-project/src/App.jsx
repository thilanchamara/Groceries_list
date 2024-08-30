import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import AddItems from './AddItems'
import SearchItems from './SearchItems'
import axios from 'axios'

const App = () => {
  const API_URL="http://localhost:3500/items";

  const [items,setItems]=useState([])

const [search,setSearch]=useState('');
const [searchResult,setSearchResult]=useState([]);
const [fetchError,setFetchError]=useState(null);
const [isLoading,setIsLoading]=useState(true);

useEffect(()=>{
  const fetchData=async()=>{
    try{
      const response=await axios.get(API_URL);
      setItems(response.data);
    }catch(err){
      setFetchError(err.message);
    }finally{
      setIsLoading(false);
    }
  }
  fetchData();
},[])

useEffect(()=>{
  const filterResult=()=>{
    setSearchResult(items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase())))
  }
  filterResult();
},[search,items])
// console.log(searchIteam);
const handleCheck =async(id)=>{
  const updatedItems=items.map(item =>(item.id===id)? {...item,checked:!item.checked}:item)
  setItems(updatedItems);

  const updatedItem=updatedItems.find((item)=>(item.id===id));
  try{
    await axios.patch(`${API_URL}/${id}`,{checked:updatedItem.checked});
  }catch(err){
    setFetchError(err.message);
    setItems(items);
  }
}
const handleDelete =async(id) =>{
  try{
    await axios.delete(`${API_URL}/${id}`);
    const newItem=items.filter(item => item.id!==id);
    setItems(newItem);
  }catch(err){
    setFetchError(err.message);
  }
}
  return (
    <div className='flex flex-col m-auto w-full h-screen max-w-[500px] c-border '>
      <Header/>
      <AddItems
          API_URL={API_URL}
          items={items}
          setItems={setItems}
          setFetchError={setFetchError}
      />
      <SearchItems
          search={search}
          setSearch={setSearch}
      />
      <>
          { isLoading && <p>loading the list items.......</p>}
          {fetchError &&  <p style={{color:'red'}}>{fetchError} </p>}
          {!isLoading && !fetchError &&
          <Content
              
              items={searchResult}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
          />}
      </>
      <Footer
          items={items}
      />
    </div>
  )
}

export default App