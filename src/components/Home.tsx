import { About } from './About'
import Contact from './Contact'
// import { Footer } from './Footer'
import { Header } from './Header'
import { Projects } from './Projects'
import Services from './Services'
import david from '/DAVID .jpg'


export  const Home = () => {
  return (
    <div id='home' className=" px-7 md:px-10 md:h-screen bg-[#1a1a29] ">
      <Header />
        <div className='w-full bg-[#11111b] flex flex-col md:flex-row items-center justify-around'>
          <div>
            {/* text section */}
            <div className="text-white">
              <h6 className=" text-3xl mt-12">
                HELLO I'm
              </h6>
              <h1 className=" font-semibold text-3xl md:text-5xl my-4">
                David Olayiwola
              </h1>
              <p className="md:w-96">
                I craft stunning web interfaces using React.js, Next.js, JavaScript, and TypeScript.
                 With the power of Tailwind CSS and Bootstrap, 
                I deliver seamless web experiences that captivate users.  
              </p>
            </div>
            {/* for buttons */}
            <div className=" mt-5 mb-5 md:mb-0 ">
              <button className=" bg-purple-500 text-white rounded hover:bg-white hover:text-purple-500 transition-all duration-500 py-2 px-4 ">About Me</button>
              <button className=" outline px-6 py-1.5 border border-purple text-white ml-5">Projects</button>
            </div>
          </div>
          {/* images section */}
          <div className='order-first my-8 md:order-last relative'>
            <img className=' rounded-md ' width={300} height={300} src={david} alt="My picture" />
          </div>
        </div>
      <About />      
        {/* divide section */}
        <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block '>

        </div>
        <Services />
        <Projects />
        <Contact />
        {/* <Footer /> */}
    </div>
  )
}
