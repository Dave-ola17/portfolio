import {BsWhatsapp, BsLinkedin, BsTwitter, BsGithub, } from 'react-icons/bs'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xjvqzroj");
    if(state.succeeded){
        return <p>Your state was succesful</p>
    }
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
                    <form onSubmit={handleSubmit} className="md:w-3/4 w-full">
                            <label className="text-white text-2xl mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className="text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 w-full rounded"
                                placeholder="Your Name"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />

                            <label className="text-white text-2xl mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 w-full rounded"
                                placeholder="Your Email Address"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />

                            <label className="text-white text-2xl mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                className="text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 w-full rounded"
                                placeholder="Your Phone Number"
                            />

                            <textarea
                                id="message"
                                name="message"
                                className="text-white outline-purple-700 my-2 bg-[#f5f5f5] bg-opacity-10 py-3 px-3 w-full rounded"
                                placeholder="Your Message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="block bg-purple-500 text-white rounded hover:bg-white hover-text-purple-500 transition-all duration-500 py-2 px-4"
                            >
                                Send
                            </button>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;