export const SoundFlow =()=>{
    return <>
     <div className="bg-red-600 ring-1 ring-gray-300 text-white mt-8 p-4 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-around items-center rounded-md">
      <div className="text-gray-500 border-5" >
        <span className="uppercase text-center">Sound flow</span>
        <h1 className="font-bold text-4xl my-4">Discover New Music</h1>
        <p>Stream your favorite tracks and discover new artists.</p>
      </div>
        <div className='flex gap-2 mt-6 '>
        <a
          href="#"
          className="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 font-semibold rounded">
          Learn more
        </a>
        <a
          href="#"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded">
          Start listening
        </a>
      </div>
      </div>
      </>
      
}