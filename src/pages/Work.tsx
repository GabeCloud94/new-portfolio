import Image1 from '../assets/journee-collection.jpg'
import Image2 from '../assets/hellfire-hotsauce.jpg'
import Image3 from '../assets/purely-pickleball.jpg'
import Image4 from '../assets/pretty-bash.jpg'
import Image5 from '../assets/roolee.jpg'
import Image6 from '../assets/dynomite-diesel.jpg'





const projects = [
    {
      title: 'Journee Collection',
      image: `${ Image1 }`, // Provide the actual image path
      link: 'https://www.journeecollection.com',
    },
    {
      title: 'Hellfire Hot Sauce',
      image: `${ Image2 }`,
      link: 'https://www.hellfirehotsauce.com',
    },
    {
      title: 'Purely Pickleball',
      image: `${ Image3 }`,
      link: 'https://www.purelypickleball.com',
    },
    {
      title: 'Pretty Bash',
      image: `${ Image4 }`,
      link: 'https://www.prettybash.com',
    },
    {
      title: 'Roolee',
      image: `${ Image5 }`,
      link: 'https://www.roolee.com',
    },
    {
      title: 'Dynomite Diesel',
      image: `${ Image6 }`,
      link: 'https://www.dynomitediesel.com',
    },
    // Repeat for the other projects
  ];
  
export default function Work() {
    return (
      <div className='w-screen flex justify-center flex-col text-center animate-fade-in'>
        <h1 className='text-4xl font-bold my-4'>Some Sites I Currently Manage</h1>
        <div className='grid 2xl:max-w-screen-xl xl:max-w-screen-lg md:max-w-screen-md mx-auto px-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer'>
          {projects.map((project, index) => (
            <div className='bg-violet-400 p-4 flex flex-col gap-2 rounded-2xl transition-all hover:-translate-y-2 duration-300' key={index}>
              <h2 className='text-2xl font-semibold'>{project.title}</h2>
              <img src={project.image} alt={project.title} />
              <a className='underline hover:no-underline' href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
