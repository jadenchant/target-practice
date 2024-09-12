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
          <div className='w-[700px] hidden md:flex justify-between'>
            <button className='flex items-center'>
              <span>Darnit Circle</span>
            </button>
            <button className='flex items-center'>
              <span>Darnit Circle Card</span>
            </button>
            <button className='flex items-center'>
              <span>Darnit Circle 360</span>
            </button>
            <button className='flex items-center'>
              <span>Registry</span>
            </button>
            <button className='flex items-center'>
              <span>Weekly Ad</span>
            </button>
            <button className='flex items-center'>
              <span>Find Stores</span>
            </button>
          </div>
        </div>
        <nav className='h-[125px] md:h-[80px] flex justify-between p-4 border-b-2 shadow-md'>
          <button className='flex items-center'>
            <span>Logo</span>
          </button>
          <button className='flex items-center'>
            <span>Categories</span>
          </button>
          <button className='flex items-center'>
            <span>Deals</span>
          </button>
          <button className='flex items-center'>
            <span>New & Featured</span>
          </button>
          <button className='flex items-center'>
            <span>Pickup & Delivery</span>
          </button>
          <div>
            <form>
              <input name='searchTerm' type='search'></input>
            </form>
          </div>
          <button className='flex items-center'>
            <span>Sign In</span>
          </button>
          <button className='flex items-center'>
            <span>Cart</span>
          </button>
        </nav>
      </header>
    );
  }
}
