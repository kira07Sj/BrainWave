import Section from "./Section"
import Heading from "./Heading"
import { benefits } from "../constants"


const Benefits = () => {
  return (
    <Section id="features">
        <div className="container relative z-2">
            <Heading className="md:max-w-md lg:max-w-2xl  " title="Chat Smarter, Not Harder with Brainwave"></Heading>
        </div>

        <div className=" flex flex-wrap gap-10 mb-10">
            {benefits.map((cards) =>(
                <div className="block relative p-0.5 bg-no-reapt
                 bg-[length:100%_100%] md:max-w-[24rem]"
                 style={{
                    backgroundImage: `url(${cards.backgroundUrl})`,
                  }}
                 
                 key={cards.id}>
                    <div className=" relative z-2 flex flex-col min-h-[22rem] ">
                        <h5>{cards.title}</h5>
                    </div>

                </div>
            ))}
        </div>
    </Section>
  )
}

export default Benefits
