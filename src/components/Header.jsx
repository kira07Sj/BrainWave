import {brainwave} from "../assets"
import {navigation} from "../constants"


const Header = () => {
  return (
    <div className="fixed flex top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b
    border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">

      <a href="#hero" className="block w-[12rem] xl:mr-8 ">
                <img src={brainwave} alt="Brainwave" />
            </a>    
      </div>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0
        bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
            <div className="relative z-2 flex justify-center flex-col 
            items-center m-auto lg:flex-row">
                {navigation.map((item) => (
                   <a key={item.id} href= {item.url} className={`block relative font-code text-2xl uppercase transition-colors
                   text-n-1 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''}
                    px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}>{item.title}</a> 
                ))}
            </div>

        </nav>
      
    </div>
  )
}

export default Header
