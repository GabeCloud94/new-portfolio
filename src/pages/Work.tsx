import Image1 from '../assets/betseys.jpg'
import Image2 from '../assets/hellfire-hotsauce.jpg'
import Image3 from '../assets/purely-pickleball.jpg'
import Image4 from '../assets/pretty-bash.jpg'
import Image5 from '../assets/roolee.jpg'
import Image6 from '../assets/not-a-wheelchair.jpg'
import GCBlog from '../assets/gc-blog.jpg'
import GCClothing from '../assets/gc-clothing.jpg'
import SitesCard from '../components/SitesCard'





const shopifySites = [
    {
      title: 'Shop Betseys',
      image: `${ Image1 }`, // Provide the actual image path
      link: 'https://shopbetseys.com/',
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
      title: 'Not A Wheelchair',
      image: `${ Image6 }`,
      link: 'https://notawheelchair.com/products/the-rig',
    },
    // Repeat for the other projects
  ];
  
  const projectSites = [
      {
        title: 'GC Blog',
        image: `${ GCBlog }`, // Provide the actual image path
        link: 'https://supabase-blog-tau.vercel.app/',
      },
      {
        title: 'GC Clothing',
        image: `${ GCClothing }`, // Provide the actual image path
        link: 'https://gc-clothing.netlify.app/',
      },
      // Repeat for the other projects
    ];



  
export default function Work() {
    return (
      <div className='w-screen flex justify-center flex-col text-center'>
        <h1 className='text-4xl font-bold my-8'>Shopify Sites I Manage</h1>
        <div className='grid 2xl:max-w-screen-xl xl:max-w-screen-lg md:max-w-screen-md mx-auto px-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {shopifySites.map((project, index) => (
        <SitesCard title={project.title} image={project.image} link={project.link} index={index} key={index} />
        ))}
        </div>
        <h2 className='text-4xl font-bold my-8'>Project Sites I've Built</h2>
        <div className='grid 2xl:max-w-screen-xl xl:max-w-screen-lg md:max-w-screen-md mx-auto px-8 gap-6 grid-cols-1 md:grid-cols-2 mb-6'>
        {projectSites.map((project, index) => (
        <SitesCard title={project.title} image={project.image} link={project.link} index={index} key={index} />
        ))}
        </div>
      </div>
    );
  }
  
