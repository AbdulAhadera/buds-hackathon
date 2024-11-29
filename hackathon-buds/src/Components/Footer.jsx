import logo from '../assets/budsLogo.png'
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import '../StyleSheets/footer.css'


function Footer() {
    return (
        <div className='bg-secondary-background px-10'>
            <div className="sm:flex justify-between">

                <div className='flex justify-center sm:pt-2'>
                    <img src={logo} className='h-12 mt-2' />
                    <h1 className='text-primary-text py-2 text-4xl'>BUDS</h1>
                </div>

                <div className='text-center pt-2 sm:pt-6'>
                    <ul className='list-none text-primary-text font-bold md:flex '>
                        <li className='hover:text-accent-color-1 px-4'>Guide Lines</li>
                        <li className='hover:text-accent-color-1 px-4'>About Us</li>
                        <li className='hover:text-accent-color-1 px-4'>Resources</li>
                    </ul>
                </div>
                <div className='mb-4 pt-4 text-primary-text flex justify-center'>
                    <div className='footer-border bg-primary-background rounded-full p-2 mx-2 hover:bg-hover-color'>
                        <FaTwitter size={25} />
                    </div>
                    <div className='footer-border bg-primary-background rounded-full p-2 mx-2 hover:bg-hover-color'>
                        <FaInstagram size={25} />
                    </div>
                    <div className='footer-border bg-primary-background rounded-full p-2 mx-2 hover:bg-hover-color'>
                        <FaLinkedin size={25} />
                    </div>
                    <div className='footer-border bg-primary-background rounded-full p-2 mx-2 hover:bg-hover-color'>
                        <FaFacebook size={25} />
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='text-center text-md text-primary-text py-4'>© Copyright 2024, Bahria University Developer Society</h1>
            </div>
        </div>
    )
}

export default Footer
