import React from 'react'
import { BriefcaseBusiness, CalendarDays, FilePlus, House,  } from 'lucide-react'
import Link from 'next/link'


export const LinkToPages = () => {
    const menuArray = [
        {
          title:'Home',
          bgColor:'bg-green-500',
          hoverColor:'bg-green-600',
          icon:House,
          linkTitle:'home',
          roundedBorder:'rounded-l-lg'
        },
        {
          title:'Work',
          bgColor:'bg-blue-500',
          hoverColor:'bg-blue-600',
          icon:BriefcaseBusiness,
          linkTitle:'work',
          roundedBorder:''
        },
        {
          title:'Create',
          bgColor:'bg-yellow-500',
          hoverColor:'bg-yellow-600',
          icon:FilePlus,
          linkTitle:'create',
          roundedBorder:''
        },
        {
          title:'Calender',
          bgColor:'bg-slate-400',
          hoverColor:'bg-slate-500',
          icon:CalendarDays,
          linkTitle:'calender',
          roundedBorder:'rounded-r-lg'
        },
      ]
  return (
    <>
    {menuArray.map((item,index) => {
        const Icon = item.icon
        return (

            <Link
            href={`?tab=${item.linkTitle}`}
             className={`p-5 ${item.bgColor} cursor-pointer transition-all ${item.roundedBorder} hover:${item.hoverColor} `} key={index}>
              <span className='block max-sm:hidden'>{item.title}</span>
               <Icon className='hidden max-sm:block'/>
            </Link>
        )
        })
    }
    </>
  )
}
