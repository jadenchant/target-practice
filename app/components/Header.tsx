export default function Header() {
  {
    return (
      <header>
        <div className='h-[50px] flex justify-between p-4 bg-red-600 text-white'>
          <div className='w-[250px] flex justify-between'>
            <button className='flex items-center'>
              <span>Ship to 55404</span>
            </button>
            <button className='flex items-center'>
              <span>Minneapolis</span>
            </button>
          </div>
          <div className='w-[700px] flex justify-between'>
            <div className='flex items-center'>
              <span>Darnit Circle</span>
            </div>
            <div className='flex items-center'>
              <span>Darnit Circle Card</span>
            </div>
            <div className='flex items-center'>
              <span>Darnit Circle 360</span>
            </div>
            <div className='flex items-center'>
              <span>Registry</span>
            </div>
            <div className='flex items-center'>
              <span>Weekly Ad</span>
            </div>
            <div className='flex items-center'>
              <span>Find Stores</span>
            </div>
          </div>
        </div>
        <nav className='h-[125px] md:h-[80px]'></nav>
      </header>
    );
  }
}
