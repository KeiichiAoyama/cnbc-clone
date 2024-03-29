"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import DropDownModal from './NavOptModal'
import DropDownSelect from './SelectOpt'
import ScreenModal from './ScreenModal'

function NavBar() {
    const [backgroundColor, setBackgroundColor] = useState('bg-white')
    const [activeButton, setActiveButton] = useState(null)
    const [activeOption, setActiveOption] = useState(null)
    const [screenModal, setScreenModal] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        markets: false,
        business: false,
        investing: false,
        tech: false,
        politics: false,
        'cnbc-tv': false,
        'investment-club': false,
        pro: false,
        select: false
    });

    const toggleScreenModal = () => {
        setScreenModal(!screenModal)
    }

    const toggleDropdown = (option) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    const closeDropdown = () => {
        setIsDropdownOpen({
            markets: false,
            business: false,
            investing: false,
            tech: false,
            politics: false,
            'cnbc-tv': false,
            'investment-club': false,
            pro: false,
            select: false
        });
    };

    const clickRoute = () => { }

    const clickReg = (buttonId) => {
        setActiveButton(buttonId)
    }

    return (
        <div className="bg-blue-950 w-screen min-h-[90px]">
            <div className='flex justify-end'>
                <div className="max-h-10 pl-8 mr-auto">
                    <Image src="/site-header-logo.png" alt="cnbc site image" className="py-2" width={150} height={150} onClick={clickRoute(1)} style={{ cursor: 'pointer' }}></Image>
                </div>

                <button className="bg-black text-white mr-2 my-3 h-9 opacity-95 flex justify-end items-center px-2 bg-opacity-25">
                    <div className='px-1 font-calibri text-xs font-bold'>
                        Search quotes, news, & videos
                    </div>
                    <Image src={"/magnifier.png"} width={23} height={23}></Image>
                </button>

                <button className="bg-blue-950 text-white mr-2 my-4 h-6 hover:text-orange-400" onClick={clickRoute(2)}>
                    <div className='px-1 font-calibri text-xs font-bold'>
                        WATCHLIST
                    </div>
                </button>

                <div className="max-h-10">
                    <Image src={"/small-bell.png"} className='py-4 mr-2' width={20} height={20}></Image>
                </div>

                <div className='text-white mr-2 my-5 h-6 px-1 font-calibri text-xs font-bold'>|</div>

                <button className="bg-blue-950 text-white mr-2 my-4 h-6 hover:text-orange-400" onClick={clickRoute(3)}>
                    <div className='px-1 font-calibri text-xs font-bold'>
                        SIGN IN
                    </div>
                </button>

                <button className="bg-white text-blue-950 mr-8 my-4 h-6 hover:opacity-75" onClick={clickRoute(4)}>
                    <div className='px-1 font-calibri text-xs font-bold'>
                        CREATE FREE ACCOUNT
                    </div>
                </button>
            </div>

            <div className='flex items-center'>
                <div className="flex flex-col justify-between w-[15px] h-[14px] ml-8 mb-1 origin-center overflow-hidden"
                    onMouseOver={() => setBackgroundColor('bg-orange-400')}
                    onMouseOut={() => setBackgroundColor('bg-white')}
                    style={{ cursor: 'pointer' }}
                    onClick={() => [toggleScreenModal(), setBackgroundColor('bg-white')]}
                >
                    <div className={`h-[2px] w-7 ${backgroundColor}`}></div>
                    <div className={`h-[2px] w-7 ${backgroundColor}`}></div>
                    <div className={`h-[2px] w-7 ${backgroundColor}`}></div>
                    {screenModal && <ScreenModal onClose={toggleScreenModal} />}
                </div>

                <button className={`text-white ml-4 border-b-4 border-transparent hover:border-yellow-400 hover:transition ease-in-out duration-300 focus:outline-none ${activeOption === "markets" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('markets')
                        toggleDropdown('markets')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='px-1 font-calibri text-sm font-bold'>
                        MARKETS
                    </div>
                    {isDropdownOpen.markets && <DropDownModal onClose={closeDropdown} type={"markets"} />}
                </button>


                <button className={`text-white ml-4 border-b-4 border-transparent hover:border-yellow-400 hover:transition ease-in-out duration-300 focus:outline-none ${activeOption === "business" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('business')
                        toggleDropdown('business')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='px-1 font-calibri text-sm font-bold'>
                        BUSINESS
                    </div>
                    {isDropdownOpen.business && <DropDownModal onClose={closeDropdown} type={"business"} />}
                </button>

                <button className={`text-white ml-4 border-b-4 border-transparent hover:border-yellow-400 hover:transition ease-in-out duration-300 focus:outline-none ${activeOption === "investing" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('investing')
                        toggleDropdown('investing')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='px-1 font-calibri text-sm font-bold'>
                        INVESTING
                    </div>
                    {isDropdownOpen.investing && <DropDownModal onClose={closeDropdown} type={"investing"} />}
                </button>

                <button className={`text-white ml-4 border-b-4 border-transparent hover:border-yellow-400 hover:transition ease-in-out duration-300 focus:outline-none ${activeOption === "tech" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('tech')
                        toggleDropdown('tech')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='px-1 font-calibri text-sm font-bold'>
                        TECH
                    </div>
                    {isDropdownOpen.tech && <DropDownModal onClose={closeDropdown} type={"tech"} />}
                </button>

                <button className={`text-white ml-4 border-b-4 border-transparent hover:border-yellow-400 hover:transition ease-in-out duration-300 focus:outline-none ${activeOption === "politics" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('politics')
                        toggleDropdown('politics')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='px-1 font-calibri text-sm font-bold'>
                        POLITICS
                    </div>
                    {isDropdownOpen.politics && <DropDownModal onClose={closeDropdown} type={"politics"} />}
                </button>

                <button className={`text-white ml-4 border-b-4 border-transparent hover:border-yellow-400 hover:transition ease-in-out duration-300 focus:outline-none ${activeOption === "cnbc-tv" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('cnbc-tv')
                        toggleDropdown('cnbc-tv')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='px-1 font-calibri text-sm font-bold'>
                        CNBC TV
                    </div>
                    {isDropdownOpen['cnbc-tv'] && <DropDownModal onClose={closeDropdown} type={"cnbc-tv"} />}
                </button>

                <button className={`text-white ml-4 items-center border-b-4 border-transparent hover:border-yellow-400 transition ease-in-out duration-300 focus:outline-none ${activeOption === "investing-club" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('investing-club')
                        toggleDropdown('investing-club')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='flex'>
                        <div className='px-1 font-calibri text-sm font-bold'>
                            INVESTING CLUB
                        </div>
                        <Image src={"/locked.png"} width={12} height={10} className='ml-1'></Image>
                    </div>
                    {isDropdownOpen['investing-club'] && <DropDownModal onClose={closeDropdown} type={"investing-club"} />}
                </button>

                <button className={`text-white ml-4 items-center border-b-4 border-transparent hover:border-yellow-400 transition ease-in-out duration-300 focus:outline-none ${activeOption === "pro" ? "border-yellow-400 transition ease-in-out duration-300" : ''}`}
                    onMouseEnter={() => {
                        setActiveOption('pro')
                        toggleDropdown('pro')
                    }}
                    onMouseLeave={() => {
                        setActiveOption(null)
                    }}
                >
                    <div className='flex'>
                        <div className='px-1 font-calibri text-sm font-bold'>
                            PRO
                        </div>
                        <Image src={"/locked.png"} width={12} height={10} className='ml-1'></Image>
                    </div>
                    {isDropdownOpen.pro && <DropDownModal onClose={closeDropdown} type={"pro"} />}
                </button>

                <div className='ml-auto justify-end flex'>
                    <button className="text-white mr-5 hover:text-orange-400" onClick={clickRoute(3)}>
                        <div className='px-1 font-calibri text-xs opacity-90'>
                            MAKE IT
                        </div>
                    </button>

                    <button className="text-white mr-16 hover:text-orange-400" 
                        onMouseEnter={() => {
                            setActiveOption('select')
                            toggleDropdown('select')
                        }}
                        onMouseLeave={() => {
                            setActiveOption(null)
                        }}
                    >
                        <div className='px-1 font-calibri text-xs opacity-90'>
                            SELECT
                        </div>
                        {isDropdownOpen.select && <DropDownSelect onClose={closeDropdown}/>}
                    </button>

                    <button className={`text-white ${activeButton == 1 ? "border-b-2 border-white" : ""} hover:text-orange-400`}
                        onClick={() => clickReg(1)}
                    >
                        <div className='px-1 font-calibri text-xs opacity-90'>
                            USA
                        </div>
                    </button>

                    <div className='text-white px-1 font-calibri text-xs font-bold'>.</div>

                    <button className={`text-white mr-32 ${activeButton == 2 ? "border-b-2 border-white" : ""} hover:text-orange-400`}
                        onClick={() => clickReg(2)}
                    >
                        <div className='px-1 font-calibri text-xs opacity-90'>
                            INTL
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar