import Section from "./Section"
import Heading from "./Heading"
import { benefits } from "../constants"
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath"


const Benefits = () => {
  return (
    <Section id="features">
        <div className="container relative z-2">
            <Heading className="md:max-w-md lg:max-w-2xl  " title="Chat Smarter, Not Harder with Brainwave"></Heading>
        </div>

        <div className=" flex flex-wrap gap-10  p-8 mb-10 justify-center">
            {benefits.map((cards) =>(
                <div className="block relative p-0.5 bg-no-reapt
                 bg-[length:100%_100%]  md:max-w-[24rem]"
                 style={{
                    backgroundImage: `url(${cards.backgroundUrl})`,
                  }}
                 
                 key={cards.id}>
                    <div className=" relative z-2 flex flex-col min-h-[22rem]
                     p-[2.4rem] pointer-events-none ">
                        <h5 className="h2 mb-5">{cards.title}</h5>
                        <p className="body-2 mb-6 text-n-3">{cards.text}</p>
                        <div className="flex items-center mt-auto">
                            <img src={cards.iconUrl} width={48} height={48} alt={cards.title} />
                            <p className="ml-auto font-code text-xs font-bold text-n-1
                             uppercase tracking-wider">Explore more</p>
                            <Arrow/>
                        </div>
                        
                    </div>
                    {cards.light && <GradientLight/>}
                    <div className="absolute inset-0.5   bg-n-8"
                     style={{clipPath:"url(#benefits)"}}>
                        <div className=" absolute inset-0 opacity-0 transition-opacity
                         hover:opacity-10">
                        {cards.imageUrl && (
                            <img src={cards.imageUrl} width={380} height={362}
                             className="w-full h-full " alt="" />
                        )}
                        </div>
                        
                     </div>
                     <ClipPath/>
                     

                </div>
            ))}
        </div>
    </Section>
  )
}

export default Benefits
