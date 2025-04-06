import React from 'react'
import { Banner } from '../Banner/Banner'
import { JobCategoryList } from '../JobCategoryList/JobCategoryList'
import { FeaturedJobs } from '../FeaturedJobs/FeaturedJobs'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <JobCategoryList/>
      <FeaturedJobs/>
    </div>
  )
}
