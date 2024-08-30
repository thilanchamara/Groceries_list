
import { RiDeleteBin5Line } from "react-icons/ri";

const Content = ({items,handleCheck,handleDelete}) => {
    
    

  return (
        <>
            <div className=' w-full h-full flex flex-col flex-grow overflow-y-auto justify-center items-center mt-4 '>
                <ul className='w-full'>
                    {items.map((item)=>
                        <li key={item.id} className='flex justify-start items-center bg-white my-1 p-2'>
                            <input
                                className=" w-[48px] min-w-[48px] h-[48px] min-h-[48px] cursor-pointer mr-2 focus-underline"
                                type='checkbox'
                                onChange={()=>handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <p className=" text-xl flex-grow break-all" style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</p>
                            <RiDeleteBin5Line role="button" onClick={()=>handleDelete(item.id)} className=" min-w-[48px] h-[36px] text-mediumbue cursor-pointer focus:outline-none hover:text-red-500 focus:text-red-500"/>
                        </li>
                    )}
                </ul>
                <p>{items.length ?" ": "The list is empty"}</p>
            </div>
        </>
  )
}

export default Content