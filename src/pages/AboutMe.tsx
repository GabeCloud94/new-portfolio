import Keypoint from "../components/KeyPoint";
import AboutMeImage1 from "../assets/about-me-img1.jpg";
import AboutMeImage2 from "../assets/about-me-img2.jpg";
import AboutMeImage3 from "../assets/about-me-img3.jpg";
import "../styles/FadeIn.css";

export default function AboutMe() {
  const keyPoints = [
    {
      header: "About Me",
      body: "Hello, I'm Gabe Cloud, a 31-year-old web developer based in St. George, Utah, specializing in the React ecosystem. Outside of web development, I enjoy playing the guitar and spending quality time with friends and family.",
      image: AboutMeImage1, // Use the image as a prop
    },
    {
      header: "Professional Background",
      body: "Over the past three years, I've been actively involved in Shopify theme development and web management employed at a tech company based in St. George, Utah. During this time, I've played a pivotal role in enhancing their team's productivity and optimizing company operations.",
      image: AboutMeImage2, // Use the image as a prop
    },
    {
      header: "Technical Expertise",
      body: "My technical toolkit includes HTML, CSS, JavaScript, JQuery, Liquid, React, Remix, Vite, NextJS, Tailwind, Redux, React Query, MySQL, and PostgreSQL among others. These skills empower me to create robust digital solutions for any technical requirement.",
      image: AboutMeImage3, // Use the image as a prop
    },
  ];

  return (
    <div className="grid 2xl:max-w-screen-xl xl:max-w-screen-lg md:max-w-screen-md md:mx-auto my-4 md:gap-16 gap-6 px-8">
      {keyPoints.map((point, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-4 animate-fade-in"
        >
          {index % 2 === 0 && (
            <div className="w-2/3 m-auto hidden md:block animate-fade-in">
              <img
                src={point.image}
                alt={point.header}
                className="w-full h-auto rounded-full"
              />
            </div>
          )}
          <Keypoint header={point.header} body={point.body} />
          {index % 2 !== 0 && (
            <div className="w-2/3 m-auto hidden md:block animate-fade-in">
              <img
                src={point.image}
                alt={point.header}
                className="w-full h-auto rounded-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

