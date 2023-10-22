import HeroVideo from "../assets/home-bg-vid.mp4";
import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useState } from 'react'

const TEXTS: string[] = ['Gabe Cloud', 'an "Amazing Developer"', 'a "Motivator"', 'a "Team Player"', '"Detail Oriented"'];
export default function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return(
        <div className="bg-black opacity-80 flex items-center w-screen h-screen">
            <video autoPlay muted loop className="z-0 w-screen h-screen object-cover fixed">
                <source src={ HeroVideo } type="video/mp4" />
            </video>
            <h1 className="z-10 text-white text-4xl relative text-center w-full flex flex-col md:flex-row gap-2 items-center justify-center">    
                <span className="z-10 text-white text-4xl">They Call Me</span>
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>                
            </h1>
        </div>
    )
}