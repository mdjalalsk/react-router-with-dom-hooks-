import { ColorRing } from 'react-loader-spinner'
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import "./MainLayout.css"
const MainLayout = () => {
    const navigation = useNavigation();
    return (
       <div>
         <section className='flex flex-col lg:flex-row justify-center md:justify-between bg-slate-100 py-2 md:py-5 shadow-lg px-10 '>
        <h1 className='text-3xl font-bold'>Amazon</h1>
        <nav className=' flex gap-2 md:gap-8 text-blue-600 font-semibold'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </nav>
       
      </section>
      {
        navigation.state === 'loading'?
        <div className='w-full h-screen flex justify-center items-center'>
        <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        </div>:  <Outlet ></Outlet>
      }
   
     
      <div>
        
<footer className="bg-slate-100 rounded-lg shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0">
            <h1 className='text-3xl font-bold'>Amazon</h1>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


      </div>
       </div>
    );
};

export default MainLayout;