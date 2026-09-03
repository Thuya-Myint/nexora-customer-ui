import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo/logo.png'
import { navItems } from '../constants/navitem'
import { IoIosSearch, IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState } from "react";

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
  const searchInputRef = useRef(null)
  const [searchKeyword, setSearchKeyword] = useState("")
  const openHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
    if (isHamburgerMenuOpen) {
      setSearchKeyword("")
    }
  }
  const searchKeywordOnChange = (e) => setSearchKeyword(e.target.value)
  return (
    <nav className="flex lg:flex-row flex-col items-center justify-between fixed w-screen bg-white z-40">


      <div className=" flex justify-between w-full px-4 py-2">
        {/* Nav Logo */}
        <Link
          to={"/"}
          className='flex items-center '>
          <img src={logo} alt="" className='md:w-25 md:h-20 w-20 h-15' />
          <h1 className='font-bold md:text-xl text-md'>Nexora</h1>
        </Link>
        {/* Nav Logo */}

        {/* Nav Items */}
        {/* lg size */}
        <div className="lg:flex hidden justify-between items-center gap-4 ">
          <div className='lg:flex hidden border-2 border-secondary h-fit  items-center rounded-full w-80 justify-between px-2'>
            <input
              value={searchKeyword}
              onChange={(e) => searchKeywordOnChange(e)}
              type="text"
              className=' p-2 outline-0'
            />
            <div className='flex transition-all duration-200 justify-center cursor-pointer bg-primary/50 hover:bg-primary active:opacity-65 text-white rounded-full p-1'>
              <IoIosSearch
                className='text-2xl'
              />
            </div>
          </div>
          <div className='lg:flex hidden items-center gap-4'>
            {
              navItems.map((value, index) => (
                <NavLink to={value.path} key={`${value.path} + ${index}`}
                  className={({ isActive }) => `${isActive ? "bg-primary/20" : ""} p-2 rounded-xl`
                  }
                >
                  {value.title}
                </NavLink>
              ))
            }
            <IoMdCart
              className=' text-2xl cursor-pointer'
            />
            <FaUserCircle
              className=' text-2xl cursor-pointer'
            />
          </div>

        </div>
        {/* lg size */}

        {/* md size */}
        <div className='flex lg:hidden  items-center gap-4'>
          <div className='flex lg:hidden justify-center cursor-pointer bg-primary/50 hover:bg-primary active:opacity-65 text-white rounded-full p-1'>
            <IoIosSearch
              className='text-2xl'

              onClick={() => {
                openHamburgerMenu()
                setTimeout(() => {
                  searchInputRef?.current.focus()
                }, 700);

              }}
            />
          </div>
          <IoMdCart
            className='text-2xl lg:hidden cursor-pointer'
          />
          <FaUserCircle
            className='text-2xl lg:hidden cursor-pointer'
          />
          <GiHamburgerMenu
            onClick={openHamburgerMenu}
            className='text-2xl lg:hidden cursor-pointer text-primary active:opacity-35 '
          />
        </div>
      </div>
      {/* hamburger open */}
      <div className={`w-full lg:hidden transition-all rounded-b-4xl duration-500 px-4 ${isHamburgerMenuOpen ? " shadow-black/20 shadow-2xl" : ""}   overflow-hidden`}
        style={{
          height: isHamburgerMenuOpen ? "80vh" : "0vh"
        }}>
        <div className={`lg:hidden flex border-2 transition-all  border-secondary  ${isHamburgerMenuOpen ? " opacity-100 duration-1000" : " opacity-0 duration-100"}  items-center rounded-full w-full justify-between px-2`}>
          <input
            ref={searchInputRef}
            value={searchKeyword}
            onChange={(e) => searchKeywordOnChange(e)}
            type="text"
            className='w-[90%] p-2 outline-0'
          />
          <div className='flex transition-all duration-200 justify-center cursor-pointer bg-primary/50 hover:bg-primary active:opacity-65 text-white rounded-full p-1'>
            <IoIosSearch
              className='text-2xl'
            />
          </div>
        </div>
        <div className='lg:hidden flex flex-col items-center gap-4 w-full mt-4'>
          {
            navItems.map((value, index) => (
              <NavLink key={`${value.path} + ${index}`}
                to={value.path}
                onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
                className={({ isActive }) => `w-full  transition-all   ${isHamburgerMenuOpen ? " opacity-100 duration-1000" : " opacity-0 duration-100"}   p-2 rounded-xl   ${isActive ? "bg-primary/20" : ""}`}>
                {value.title}
              </NavLink>
            ))
          }
        </div>
      </div>
      {/* hamburger open */}
      {/* md size */}
    </nav >
  )
}

export default Navbar