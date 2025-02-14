import { links, social } from '../app/data'
import Image from 'next/image'





const Navbar = () => {
  return (
    <nav className='w-screen flex  justify-evenly items-center px-5 py-2 '>
        
        <Image src="/Next_Design__1_-removebg-preview.png" width={200} height={150} alt="image" className=''/>
        {links.map((link) => {
            const {id, url, text} = link
            return <a key={id} href={url} className='font-bold text-xl'>{text}</a>
        })}
        <div className='text-3xl flex gap-5'>
            {social.map((socialIcon) => {
                const {id, url, icon,} = socialIcon
                return <a key={id} href={url} className=''>{icon}</a>
            })}
        </div>
    </nav>
  )
}
export default Navbar;