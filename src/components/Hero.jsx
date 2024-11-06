import {HERO} from "../constants";
import profilePic from "../assets/hero.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Code Enclave
                    </h1>
                    <span className="pb-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
                        Web Developement and Consulting
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-lg" width={500} src={profilePic} alt="Code Enclave" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;