import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabContent, collabText } from "../constants"
import Section from "./Section"
import Button from "./Button"
import {LeftCurve, RightCurve} from "./design/Collaboration"

const Collaboration = ({clasName}) => {
  return (
    <Section crosses>
        <div className=" container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless Collaboration</h2>

                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {collabContent.map((items,index) =>(
                        <li className="mb-3 py-3" key={index}>
                            <div className="flex items-center">
                                <img src={check} alt="checkmark" width={24} height={24}/>
                                <h5 className="ml-5 body-2">{items.title}</h5>

                            </div>
                            {items.text && (
                                    <p className="body-2 mt-3  text-n-4 ">{items.text}</p>
                            )}                           
                        </li>
                    ))}
                </ul>
                <Button>Try it now</Button>
            </div>

            <div className="lg
            ml-auto xl:w-[38rem] mt-4">
                <p className="body-2 mb-4 text-n-4 md:mb-16
                 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                    {collabText}</p>

                <div className=" relative left-1/2 flex w-[22rem]
                 rounded-full -translate-x-1/2 aspect-square 
                  border border-n-6 scale-100 mt-10 md:scale-100 lg:-mt-5">
                    <div className="flex w-60 aspect-square m-auto
                     border border-n-6 rounded-full ">
                        <div className="w-[6rem] aspect-square m-auto
                         p-[0.2rem] bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center
                             w-full h-full bg-n-8 rounded-full "><img src={brainwaveSymbol} 
                            width={48} height={48} alt="brainwave" />
                            </div>
                         </div>
                     </div>

                     <ul className="">
                        {collabApps.map((app,index) =>(
                        <li className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem]
                         origin-bottom rotate-${index*45}`} key={app.id}>
                            <div className={`relative -top-[1.6rem] flex
                             w-[3.2rem] h-[3.2rem] bg-n-7 border
                              border-n-1/15 transition-all hover:scale-110 rounded-xl -rotate-${index*45}`}><img className="m-auto" width={app.width}
                             height={app.height} src={app.icon} alt="appicons" /></div>
                        </li>
                        ))}
                     </ul>

                     <LeftCurve/>
                     <RightCurve/>
                  </div>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration