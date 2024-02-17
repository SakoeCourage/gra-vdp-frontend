"use client"
import React from 'react'
import Link from 'next/link'
import IconifyIcon from '@app/components/ui/IconifyIcon'
import Image from 'next/image'
import Querylist from './queries/partials/querylist'
import { IQueryProp } from './queries/partials/queryitem'
import { Queries } from './queries/partials/querylist'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../components/ui/dropdown'
import { useSession } from 'next-auth/react'
import { getInitials } from '../lib/utils'
import { handleSignOut } from '@app/providers/Authserviceprovider/userAuthentication'

function NotificationDropDown({ queries }: { queries: IQueryProp[] }) {
  return <div className=' max-h-[80vh] overflow-y-scroll'>
    <Querylist queries={queries} />
  </div>
}


function Header() {
  const { status, data } = useSession()

  return < div className='border-b border-gray-300 bg-[var(--primary-blue)]' >
    <div className='flex items-center container  mx-auto justify-evenly py-2 h-[var(--header-height)] '>
      <nav className='  flex items-start justify-center gap-1'>
        <Link href="/portal/home" className='object-contain h-[3rem] '>
          <Image className=' h-full w-full' src="/images/gra-logo.png" height={4000} width={400} quality={100} alt='gra-logo' />

        </Link>

      </nav>
      <nav className=' text-blue-100 text-base font-semibold mx-auto my-auto flex items-center justify-center h-full tracking-wider'>
        Voluntary Disclosure Program
      </nav>
      <nav>
        {status === "authenticated" && <nav className=' flex items-center gap-5 ml-auto'>
          {/* Notification -------- */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <nav className=' flex items-center justify-center relative'>
                <span className=' absolute inline-block h-2 w-2 aspect-square rounded-full bg-red-700 top-1 right-1'>
                  &nbsp;
                </span>
                <IconifyIcon className='bg-transparent text-blue-100' icon='basil:notification-outline' />
              </nav>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <NotificationDropDown queries={Queries} />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notification ends.............. */}

          <nav className='flex items-center gap-3 text-blue-50'>
            <nav className='h-[2.0rem] w-[2.0rem] rounded-full bg-sky-600 flex items-center justify-center overflow-hidden object-cover'>
              <nav className=' overflow-hidden h-12 w-12 shadow  font-medium rounded-full  p-1 aspect-square uppercase flex items-center justify-center gap-[0.20rem]'>
                {data?.user?.surname.charAt(0)}.{data?.user?.otherNames.charAt(0)}
              </nav>
            </nav>
            <nav>
              {data?.user?.surname} {data?.user?.otherNames}
            </nav>
            <button onClick={handleSignOut} className="border-l border-white px-2">
              Logout
            </button>
          </nav>

        </nav>}
      </nav>

    </div>
  </div >
}


export default Header