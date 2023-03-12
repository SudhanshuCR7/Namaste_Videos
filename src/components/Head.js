import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import download2 from "../assets/download2.png";
import { toggleMenu } from '../utils/menuSlice';
import { SEARCH_API } from '../utils/constants';


const Head = () => {

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu())
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)
  useEffect( () => {
      const timer = setTimeout( () =>getSearchSuggestion(), 200)
      return () => {
        clearTimeout(timer);
      }
  }, [searchQuery])

  const getSearchSuggestion = async () => {
    const data = await fetch(SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>

        <div className='flex col-span-1 '>
            <img 
            onClick={() => toggleSidebar()}
            className='w-8 h-16 cursor-pointer'
            alt='menu-icon' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvNiiXyHfPY2uDE89LX9bdxESyAfQEzl1Zw&usqp=CAU'/>
            <img className='w-32 h-20 px-2 pb-2' alt='logo' src={download2} />
        </div>

        <div className='col-span-10 px-32 py-2 m-2'>
            <input 
            className='border border-gray-400 w-1/2 px-5 rounded-l-full  py-2 ' 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus = {() => setShowSuggestions(true)}
            onBlur = {() => setShowSuggestions(false)}
            />
            <button className='border border-gray-400 px-3 py-2 rounded-r-full bg-gray-100'>🔍</button>
            { showSuggestions && <div className='fixed bg-white w-[29rem] rounded-lg shadow-lg'>
              <ul>
                {suggestions.map( (s) => { 
                return(
                <li className='px-2 py-1 hover:bg-gray-100'>{s}</li>
                )
                })} 
              </ul>
            </div>
            }
        </div>

        <div className='col-span-1 px-2 py-1 m-2'>
            <img className='w-6 h-6 m-2' alt='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ2pdRFQNGZRLDnCdtiYBUZs1PvaxiAZDbA&usqp=CAU'/>
        </div>
    </div>
    
  )
}

export default Head