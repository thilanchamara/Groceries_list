import React from 'react'

const SearchItems = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className=' flex w-full p-2'>
        <input
            className=' flex-grow min-h-[48px] text-2xl p-1 rounded '
            type='text'
            name='search'
            placeholder='search items'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItems