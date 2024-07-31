import Section from "./Section"
import Heading from "./Heading"
import {service1, service2, service3, check} from "../assets"
import {brainwaveServices, brainwaveServicesIcons} from "../constants"
import Generating from "./Generating"
import {PhotoChatMessage, Gradient, VideoBar, VideoChatMessage} from "./design/Services"

const Services = () => {
  return (
    <Section id="how-to=use">
      <div className=" container">
        <Heading title="Generative AI made for creators."
         text="Brainwave unlocks the potential of AI-powered applications"></Heading>

         <div className=" relative ">
          <div className=" relative z-1 flex items-center h-[39rem]
           mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden
            lg:p-20 xl:h-[45rem]">
              <div className=" absolute top-0 left-0 w-full h-full 
               pointer-events-none md:w-3/5"><img className="w-full h-full object-cover
                md:object-right"
               width={800} height={730} src={service1} alt="smartest AI" />
               </div>
                <div className="  z-1 max-w-[17rem] ml-auto">
                  <h4 className="h4 mb-4">Smartest AI</h4>
                  <p className="body-2 mb-[3rem]
                   text-n-3">Brainwave unlocks the potential 
                   of AI-powered applications
                   </p>
                  <ul className="body-2">
                    {brainwaveServices.map((item, index) =>(
                      <li className="relative flex gap-4 items-center py-4
                       border-t border-n-6" key={index}><img src={check} alt="" />
                      <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <Generating className=" absolute right-4 left-4 bottom-4
                 border border-n-1/10 lg:right-1/2"/>
            </div>
            
          <div className=" relative z-1 grid gap-5 lg:grid-cols-2">

              <div className=" relative min-h-[39rem] border border-n-1/10
               rounded-3xl overflow-hidden">
                <div className=" absolute inset-0">
                  <img src={service2} className="h-full w-full
                   object-cover" width={630} height={750} alt="Robot" />
                
                </div>

                <div className=" absolute inset-0 flex flex-col 
                justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">

                  <h4 className="h4 mb-4">Photo editing</h4>
                  <p className="body-2 mb-[3rem]
                   text-n-3">Automatically enhacne you photos using our AI 
                    app's photos editing feature. Try it now!
                   </p>
                   </div>
                   <PhotoChatMessage/>

               </div>

              <div className="p-4 bg-n-7 rounded-3xl border border-n-1/10
              overflow-hidden lg:min-h-[46rem]">
                <div className=" py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Video Generation</h4>
                  <p className=" body-2 text-n-3 mb-8">The world's most powerful AI photo and video 
                    art generation engine. What will you create?
                  </p>
                  <ul className=" flex items-center justify-between">
                    {brainwaveServicesIcons.map((item, index) =>(
                      <li className={`flex items-center justify-center
                       ${index===2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]'
                        : ' flex w-10 h-10 bg-n-6 rounded-2xl md:w-15 md:h-15 '}`} key={index}>
                        <div className={
                          index===2 ?
                         "flex items-center justify-center bg-n-7 w-full h-full rounded-[1rem]"
                          : ''
                        }><img src={item} width={24} height={24} alt="icons" /></div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className=" relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]
                 ">
                  <img className="w-full h-full object-cover" 
                  width={520} height={400} src={service3} alt="robot2" />
                  <VideoChatMessage/>
                  <VideoBar/>
                </div>
              </div>
            </div>
            <Gradient/>

          
              
         </div>
      </div>
    </Section>
  )
}

export default Services
