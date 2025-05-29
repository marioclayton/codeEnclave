'use client'

const NotFound = () => {
  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <div className='w-full bg-black py-0 px-4 animate-fade-in-up'>
      <div className='overlay-container '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center overlay-content'>
          <h2 className="text-4xl tracking-tight font-extrabold text-center text-white mb-10">404</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Oops! Page not found.</p>
          <button onClick={handleHomeClick} className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>
            <span className='text-l p-4'>Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;