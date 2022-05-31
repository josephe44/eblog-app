import React from 'react'
import CategoryCard from '../components/CategoryCard'
import HomeBanner from '../components/HomeBanner'
import BlogCard from '../components/BlogCard'

function Home() {
  return (
    <div className="mb-10">
      <HomeBanner />
      <div className="grid grid-cols-3 gap-4 mx-4 mt-4">
        <div className='col-span-2 '>
          <BlogCard />
        </div>
        <div>
          <CategoryCard />
        </div>
      </div>
    </div>
  )
}

export default Home
