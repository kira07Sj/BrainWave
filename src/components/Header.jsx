import {brainwave} from "../assets"
import {navigation} from "../constants"
import { useLocation } from "react-router-dom"
import Button from "./Button"
import Menusvg from "../assets/svg/MenuSvg"
import {HamburgerMenu} from './design/Header'
import { useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

const Header = () => {

    const pathName = useLocation();
    const [OpenNav, setOpenNav] = useState(false)
    const toggleNav = ()=>{
      if(OpenNav){
        setOpenNav(false)
        enablePageScroll()
      }
      else{
        setOpenNav(true)
        disablePageScroll()
      }
    }
     const handleClick = ()=>{
      setOpenNav(false)
      enablePageScroll()
     }
  return (
    <div className={`fixed  flex w-full items-center top-0 left-0 z-50 border-b
    border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${OpenNav ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

      <a href="#hero" className="block w-[12rem] xl:mr-8 ">
                <img src={brainwave} alt="Brainwave" />
            </a>    
      </div>

        <nav className={`${OpenNav ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0
        bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className="relative z-2 flex justify-center flex-col 
            items-center m-auto lg:flex-row">
                {navigation.map((item) => (
                   <a onClick={handleClick} key={item.id} href= {item.url} className={`block relative font-code text-2xl uppercase transition-colors
                   text-n-1 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''}
                    px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                     lg:leading-5 lg:hover:text-n-1 xl:px-12`}>{item.title}</a> 
                ))}
            </div>
                <HamburgerMenu/>
        </nav>

        <a href="#signUp" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 
         lg:block">NEW ACCOUNT</a>

         <Button classname=" hidden mr-10 lg:flex " href={"#login"}>Sign In</Button>
         <Button onClick={toggleNav} classname=" ml-auto mr-5 lg:hidden" px="px-4">
            <Menusvg OpenNav={OpenNav} />
         </Button>
      
    </div>
  )
}

export default Header
