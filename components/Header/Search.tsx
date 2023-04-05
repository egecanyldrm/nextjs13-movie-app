"use client"
import { ISearchResult, getSearchData } from '@/services/movie';
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';


const Search = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [results, setResults] = useState<ISearchResult[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const getResults = useCallback(async (value: string) => {
        setInputValue(value);
        try {
            const data = await getSearchData(value);
            setResults(data.results)
        } catch (error) {
            console.log(error)
        }
    }, []);

    const handleModalVisible = useCallback(() => {
        setIsOpen(prevState => !prevState);
        const element = document.getElementById('bodyId');
        //@ts-ignore
        element.classList.toggle('overflow-hidden')
    }, []);

    const handleInputSelect = useCallback(() => {
        handleModalVisible();
        setResults([]);
        setInputValue('')
    }, [])

    return (
        <div className='md:mr-12 '>
            <button onClick={handleModalVisible} className='w-full md:w-64 h-10 rounded-md bg-white text-black text-start pl-2 flex  items-center'>
                <BiSearch size={20} />
                <span className='ml-1'> Search Movie </span>
            </button>
            {
                isOpen ?
                    <div className=' backdrop-blur-md fixed  z-50 lg:px-96 md:px-24 px-12  py-48 top-0 right-0 h-screen w-screen flex justify-center items-center '>
                        <div className='bg-white w-full overflow-hidden  h-full rounded-lg  text-black pt-1 '>
                            <div className='flex justify-evenly px-2'>
                                <div className=' basis-5 '>
                                    <BiSearch size={40} />
                                </div>
                                <input
                                    autoFocus
                                    className=' custom_input  outline-none basis-11/12'
                                    placeholder='Search Movie'
                                    value={inputValue}
                                    onChange={e => getResults(e.target.value)}
                                />
                                <button className='basis-5' onClick={handleModalVisible} > <GrClose /></button>
                            </div>
                            <div className='overflow-auto  h-full border-t'>
                                <ul>
                                    {
                                        results?.map((item, key) => (
                                            <Link href={`/movie/${item.id}`} onClick={handleInputSelect} >
                                                <li key={key} className='border-b pl-8 py-3 '>{item.title}</li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default Search