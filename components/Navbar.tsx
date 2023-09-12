import Link from 'next/link'
import Image from 'next/image'

import  CustomButton  from './CustomButton'

const Navbar = () => {
  return (
    <header className=' w-full z-10 absolute'>
      <nav className=' maax-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href={`/`} className=' flex justify-center items-center'>
          <Image 
          src={"/logo.svg"}
          alt='car hub logo'
          width={118}
          height={18}
          className=' object-contain'
          />
        </Link>

        <CustomButton 
        title='sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  )
}

export default Navbar