import {BsWhatsapp, BsLinkedin, BsTwitter, BsGithub, } from 'react-icons/bs'

const Contact = () => {
    return(
        <div className="px-7 md:px-10 my-10 bg-[#252530]" id="contact">            
            {/* text an Icols section */}
            <div className='flex flex-col md:flex-row'>
                <div className="md:w-1/2 ">
                    <h1 className="text-3xl mt-16 text-purple-700 font-semibold">
                        Contact me:
                    </h1>
                    <p className="text-white my-2 md:w-2/3 leading-[2]">
                        connect with me on your favorite social media platform by clicking it.
                    </p>

                    {/* social media icons section */}
                    <div className="flex gap-4">
                        <a className='text-purple-700' href="https://github.com/dave-ola17"><BsGithub size={30} /></a>
                        <a className='text-purple-700' href="https://wa.me/+2348139712970"><BsWhatsapp size={30} /></a>
                        <a className='text-purple-700' href="https://x.com/davidolayiwola4?t=b14zrbkOL31gPf_Jrx8kaQ&s=09"><BsTwitter size={30} /></a>
                        <a className='text-purple-700' href="https://www.linkedin.com/in/david-olayiwola-60ab75252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BsLinkedin size={30} /></a>
                    </div>
                </div>
                {/* form section */}
                <div className='md:w-1/2 '>
                    <p className=' mt-16 text-white text-2xl mb-6 '>Send email:</p>

                    <form>
                        <input className='text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded' type="text" name="name" id="name" placeholder='Name' />
                        <input className=' text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded' type="email" name="email" id="email" placeholder='Email address' />
                        <input className='text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded' type="phone" name="phone" id="phone" placeholder='Phone number' />

                        <textarea 
                        className=' text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded'
                        name="message"
                        id="message"
                        placeholder='Enter your message here'></textarea>
                        <button className=' block bg-purple-500 text-white rounded hover:bg-white hover:text-purple-500 transition-all duration-500 py-2 px-4'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;