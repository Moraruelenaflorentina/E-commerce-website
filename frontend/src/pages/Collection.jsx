import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }


  const toggleSubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubcategory(prev => [...prev, e.target.value]);
    }
  }


  const applyFilters = () => {
    let productsCopy = products.slice();
    if(showSearch&&search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory));
    }
    setFilterProducts(productsCopy);
  }
  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'price_low_high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'price_high_low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default: applyFilters();
        break;
    }

  }
  useEffect(() => {
    applyFilters();
  }, [category, subcategory, search, showSearch,products]);


  useEffect(() => {
    sortProducts();
  }, [sortType]);
  
  return (
    <div className='flex flex-col gap-1 sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Optiuni filtrare */}
      <div className='min-w-6'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2  text-xl flex items-center cursor-pointer gap-2'>Filters
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ' '}`} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 items-center px-3 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-1'>
              <input type="checkbox" className='w-3 accent-indigo-700' value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-1'>
              <input type="checkbox" className='w-3 accent-indigo-700' value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-1'>
              <input type="checkbox" className='w-3 accent-indigo-700' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/* subcategori */}
        <div className={`border border-gray-300 pl-5 items-center px-3 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-1'>
              <input type="checkbox" className='w-3 accent-blue-700' value={'Sneakers'} onChange={toggleSubcategory} />Sneakers
            </p>
            <p className='flex gap-1'>
              <input type="checkbox" className='w-3 accent-blue-700' value={'Tops'} onChange={toggleSubcategory} />Tops
            </p>
           
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2-xl mb-4 '>
          <Title text1={'ALL'} text2={'Products'} />
          {/* Sortare */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option className='bg-gray-900 text-gray-100' value="relevent">Sort by relevent</option>
            <option className='bg-gray-900 text-gray-100' value="price_low_high">Sort by Low to High</option>
            <option className='bg-gray-900 text-gray-100' value="price_high_low">Sort by High to Low</option>
          </select>
        </div>
        {/* Map Produse */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default Collection