import { FaHtml5, FaAccessibleIcon, FaCogs, FaChalkboardTeacher } from 'react-icons/fa';


export const About = () => {
  const skills = [
    {name: 'WEBSITE DEVELOPMENT', icon: <FaHtml5 size={100} />},
    {name: 'BLOCKCHAIN DESIGN', icon: <FaAccessibleIcon size={100} />},
    {name: 'ARTIFICIAL INTELIGENCE', icon: <FaCogs size={100} />},
    {name: 'PRODUCT MANAGMENT', icon: <FaChalkboardTeacher size={100} />},
  ]
  return (
    <div id="about" className="px-7 md:px-10 sm:mt-12 bg-purple-500">
        <h1 className="text-3xl mt-5 text-purple-700 font-semibold">About me:</h1>
        <p className="text-white my-2 md:w-2/3 leading-[2] ">
          Hello, I'm David Inioluwa Olayiwola, a passionate and versatile professional. 
          I craft captivating digital experiences as a full-stack web developer, 
          master the art of design as a UI/UX enthusiast, and bring innovation to life as a mobile developer. 
          Let's turn your ideas into extraordinary digital journeys!
        </p>
        {/* Section for my experiences */}
        <div className="md:flex items-center my-7">
          <p className="text-purple-700 text-8xl fomt-bold">1.5+</p>
          <p className=" text-white text-2xl md:ml-5 ">years of experience, specialized in building apps, while ensuring a seemles experience for end users.</p>
        </div>
        {/* skill cards section */}
        <div className="flex flex-col md:flex-row md:pb-10">
          {skills.map((skill, index) => {
            return(
              <div key={index} className={` rounded flex flex-col  md:w-[256px] md-h-[254px] ${index == 0 || index == 2 ? 'bg-purple-600 hover:bg-gray-400' : 'bg-gray-400 hover:bg-purple-600'} 
              items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500
            `}>
                {/* the image should be replaced with react-icon icons */}
                {skill.icon}
                <p className="text-2xl mt-3 text-white font-mono">{skill.name}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}
