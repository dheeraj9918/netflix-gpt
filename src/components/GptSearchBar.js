import React from 'react'
import { useSelector } from 'react-redux';
import allLanguage from '../utils/langaugeConstant'

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const placeholderText = allLanguage[langKey]?.gptSearchPlaceholder;
    const search = allLanguage[langKey]?.search;

    return (
        <div className='pt-[10%] flex justify-center'>
            <form
                className=' grid grid-cols-12 bg-black w-1/2 '
                onSubmit={(e) => e.preventDefault()}>
                <input type="text" className='p-4 m-4 col-span-9' placeholder={placeholderText} />
                <button className='bg-red-700 p-4 m-4 col-span-3 '>{search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;