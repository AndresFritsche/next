import Link from 'next/link';
import { links, social } from '../app/data'
import Image from 'next/image'







const Navbar = () => {
  return (
    <nav className='w-screen h-16 flex justify-between items-center bg-white shadow-md fixed p-8'>
    <div className='flex items-center pt-4 gap-4 ml-12'>
        <Image src="/Next_Design__1_-removebg-preview.png" width={230} height={50} alt="logo" />
    </div>

  
    <div className='flex gap-6 items-center '>
        {links.map((link) => {
            const { id, url, text } = link;
            return (
                <Link
                    key={id}
                    href={url}
                    className='font-bold text-lg hover:bg-slate-300 rounded-lg px-4 py-2 transition duration-300 ease-in-out'
                >
                    {text}
                </Link>
            );
        })}
    </div>
    <div className='flex gap-5 text-4xl px-8 text-[--primary]'>
        {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
                <a
                    key={id}
                    href={url}
                    className='hover:text-[--primary-hover] transition duration-300 ease-in-out'
                >
                    {icon}
                </a>
            );
        })}
    </div>
</nav>
  )
}
export default Navbar;