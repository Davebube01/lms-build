import { GetCoursesQueryResult } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CourseCardProps {
    course: GetCoursesQueryResult[number],
    progress?: number,
    href: string
}

function CourseCard({course, progress, href}: CourseCardProps) {
  return (
    <Link 
        href={href}
        prefetch={false}
        className='group hover:no-underline flex'
    >
        <div className='bg-card rounded-xl overflow-hidden shadow-lg
        transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px]
        border border-border flex flex-col flex-1'>
            <div>
              {course.image ? (
                <Image
                  src={urlFor(course.image).url() || ""}
                  alt={course.title || "Course Image"}
                  fill
                  className='object-cover translate-transform duration-300 group-hover:scale-110'
                />
                // <div></div>
              ) : (
                <div className='h-full w-full flex items-center justify-center bg-muted'>
                  
                </div>
              )}
            </div>
        </div>
    </Link>
  )
}

export default CourseCard
