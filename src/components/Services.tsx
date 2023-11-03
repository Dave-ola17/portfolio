import services from '../../public/services';
const Services = () => {
  return (
    <div className=' bg-[#11111b] px-10  md:pt-[58px] md-[py-10] '>
      <h1 className=' text-center md:text-start text-purple-700 font-semibold text-3xl mt-14'>Services I offer:</h1>
      <div className=' grid md:grid-cols-3 gap-5 py-8'>
        {
            services.map((service, index) => {
                return(
                    <div className={`
                      md:mx-0 rounded-md border bg-[#008080]
                      ${index == 0 || index == 2 || index == 4 ? 'border-blue-400' : 'border-purple-600 hover:border-blue-400'} 
                      flex flex-col justify-center items-center p-6 text-center text-white`} key={index} >
                       {service.image}
                        <div className="pt-3">
                          <h6 className='text-2xl mb-4'>{service.name}</h6>
                          <p className='text-base'>{service.description}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Services;