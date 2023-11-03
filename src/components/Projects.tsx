import wolexy from '../../public/wolexy.png'
export const Projects = () => {
  const projects = [
    {
      title: 'LIFEEZY PHOTOGRAPHY',
      discription: 'A live website that displays images captured during special moments.',
      Image: wolexy,
      link : 'https://wolexy-media.vercel.app/',
    },
    {
      title: 'LIFEEZY PHOTOGRAPHY',
      discription: 'A live website that displays images captured during special moments.',
      Image: wolexy,
      link : 'https://wolexy-media.vercel.app/',
    },
    {
      title: 'LIFEEZY PHOTOGRAPHY',
      discription: 'A live website that displays images captured during special moments.',
      Image: wolexy,
      link : 'https://wolexy-media.vercel.app/',
    },
  ]
  return (
    <div className="px-7 md:pb-10 bg-[#252530] md:px-10 my-8 ">
         <h1 className=" text-center md:text-start text-purple-700 font-semibold text-3xl py-8">Featured Projects:</h1>
          {/* <p className="text-white my-2 md:w-2/3 leading-[2] ">
            These are some of the projects I've had the privilege to work on. 
            Each one represents a unique challenge and a commitment to delivering excellence in every line of code.
          </p> */}

          {/* my featured projects */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
            {
              projects.map((project, index) => {
                return(
                  <div className=' py-5 flex flex-col px-4 shadow-sm md:w-[343px] bg-[#31313f] rounded ' key={index}>
                    <a className='mb-4' href={project.link}>
                      <img src={project.Image}  alt="Featured project" />
                    </a>
                    <h3 className='text-violet-900 font-semibold text-lg'>{project.title}</h3>
                    <p className=' text-white mt-1'>{project.discription}</p>
                     {/* for buttons */}
                      <div className=" mt-5 mb-5 md:mb-0 ">
                        <button className=" bg-purple-500 text-white rounded hover:bg-white hover:text-purple-500 transition-all duration-500 py-2 px-4 ">Github</button>
                        <button className=" outline px-9 py-1.5 rounded border-none text-white ml-5">Demo</button>
                      </div>
                  </div>
                )
              })
            }
          </div>
    </div>
  )
}
