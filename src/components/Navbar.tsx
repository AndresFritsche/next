import { links, social } from '../app/data'
import Image from 'next/image'





const Navbar = () => {
  return (
    <nav className=' flex justify-evenly items-center px-5 py-5 '>
        
        <Image src="/Next_Design__1_-removebg-preview.png" width={200} height={150} alt="image" className=''/>
        {links.map((link) => {
            const {id, url, text} = link
            return <a key={id} href={url} className=''>{text}</a>
        })}
        <div className='text-3xl flex gap-5'>
            {social.map((socialIcon) => {
                const {id, url, icon, description} = socialIcon
                return <a key={id} href={url} className='w-1/2'>{icon}</a>
            })}
        </div>
    </nav>
  )
}
export default Navbar;