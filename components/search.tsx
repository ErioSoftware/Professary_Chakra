import { SearchIcon } from '@/components/icons'
import { FunctionComponent } from 'react'

export const Search: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex-1 h-14 w-full">
        <SearchIcon className="absolute top-1/2 -translate-y-1/2 ml-4 text-greyscale-label dark:text-greyscale-placeholder" />
        <input
          className="border-none w-full h-full bg-greyscale-bg dark:bg-greyscale-body rounded-[16px] focus:outline-none focus:ring-1 focus:ring-primary-default pl-12 placeholder:text-desktop-text-small placeholder:text-greyscale-label dark:placeholder:text-greyscale-placeholder"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="ml-5">
        <button className="px-4 h-14 bg-primary-default text-greyscale-bg dark:bg-primary-darkMode dark:text-greyscale-ash text-desktop-link-small rounded-[12px]">
          Search
        </button>
      </div>
    </div>
  )
}
