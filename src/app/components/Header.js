'use client'; // if using App Router in Next.js 13+

export default function Header() {

  return (
        <nav className='mt-4'>
          <div className='justify-around hidden md:flex mt-7'>
            <div className='text-white text-3xl font-bold'>
              <img src="http://localhost/wordpress/wp-content/uploads/2019/09/light.png" className="size-32" alt=''/>
            </div>
            <ul className='flex justify-center items-center gap-10 text-white font-bold'>
               <a href="/home"><li>Home</li></a>
               <a href="/news"><li>News</li></a>
               <a href="/demos"><li>Demos</li></a>
               <a href="/contact"><li>Contact</li> </a> 
            </ul>
          </div>
        </nav>
  );
}
