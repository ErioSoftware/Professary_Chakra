import Link from 'next/link'
import { ChevronLeft, ChevronRight } from '@/components/icons'
import { FunctionComponent } from 'react'

export const Pagination: FunctionComponent = () => {
  return (
    <section className="px-6 mx-auto mt-10 max-w-7xl">
      <div className="flex items-center justify-between desktop:justify-center desktop:space-x-2">
        <Link href="#">
          <a className="inline-flex items-center justify-center h-10 w-[60px] rounded-md bg-primary-default dark:bg-primary-darkMode text-greyscale-off-white dark:text-greyscale-ash">
            <ChevronLeft className="h-4 w-4" />
          </a>
        </Link>
        <Link href="#">
          <a className="inline-flex items-center justify-center h-10 px-5 border-2 rounded-md text-desktop-link-x-small border-primary-default dark:border-primary-darkMode text-primary-default dark:text-primary-darkMode">
            1
          </a>
        </Link>

        <Link href="#">
          <a className="hidden desktop:inline-flex items-center justify-center h-10 px-5 text-greyscale-body dark:text-greyscale-placeholder text-desktop-link-x-small">
            2
          </a>
        </Link>

        <Link href="#">
          <a className="inline-flex items-center justify-center h-10 px-5 text-greyscale-body dark:text-greyscale-placeholderr text-desktop-link-x-small">
            ...
          </a>
        </Link>

        <Link href="#">
          <a className="inline-flex items-center justify-center h-10 px-5 text-greyscale-body dark:text-greyscale-placeholder text-desktop-link-x-small">
            46
          </a>
        </Link>

        <Link href="#">
          <a className="inline-flex items-center justify-center h-10 w-[60px] rounded-md bg-primary-default dark:bg-primary-darkMode text-greyscale-off-white dark:text-greyscale-ash">
            <ChevronRight className="w-4 h-4" />
          </a>
        </Link>
      </div>
    </section>
  )
}
