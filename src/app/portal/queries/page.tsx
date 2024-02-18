"use client"
import React from 'react'
import { IQueryProp } from './partials/queryitem'
import { Queries } from './partials/querylist'
import Querylist from './partials/querylist'
import SimpleBar from 'simplebar-react'

const NotiticationInscription = () => {
  return <div className='xl:h-[100dvh] bg-gradient-to-b from-gray-50 via-slate-100/90 to-gray-100 hidden lg:flex items-center justify-center col-span-2'>
    <nav className=' flex flex-col items-center max-w-md mx-auto gap-5'>
      <svg className='text-[var(--primary-blue)]' xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 32 32"><path fill="currentColor" d="M11 24h10v2H11zm2 4h6v2h-6zm3-26A10 10 0 0 0 6 12a9.19 9.19 0 0 0 3.46 7.62c1 .93 1.54 1.46 1.54 2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2 7.2 0 0 1 8 12a8 8 0 0 1 16 0a7.2 7.2 0 0 1-2.82 6.14c-1.07 1-2.18 2-2.18 3.86h2c0-.92.53-1.45 1.54-2.39A9.18 9.18 0 0 0 26 12A10 10 0 0 0 16 2" /></svg>
      <nav className=' text-gray-600 text-center'>
        GRA would like to know more about your applicatoins. <br /> View and respond to queries if any
      </nav>
    </nav>
  </div>
}

const QueryHistory = ({ queriesList }: { queriesList: IQueryProp[] }) => {
  return <nav className='flex flex-col gap-5 col-span-5 px-5 lg:p-auto lg:col-span-3 max-w-xl mx-auto w-full '>
    <nav className='flex items-center gap-2'>
      <nav className=' grid place-items-center bg-[var(--primary-blue)] text-blue-50 rounded-full text-sm w-7 h-7'>
        {queriesList.length}
      </nav>
      <nav className=' text-lg text-gray-600 font-semibold'>
        Application Queries
      </nav>
    </nav>
    <SimpleBar className='w-full query-scroll-list' >
      <Querylist queries={queriesList} />
    </SimpleBar>
  </nav>
}

function page() {
  return (
    <div className=' grid grid-cols-5 h-[60vh]'>
      <NotiticationInscription />
      <QueryHistory queriesList={Queries} />
    </div>
  )
}

export default page