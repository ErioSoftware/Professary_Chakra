import { IBlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export const BlogCard: FunctionComponent<{post: IBlogPost}> = ({post}) => {
  return (
    <article>
      <header className="">
        <p className="font-bold text-mobile-link-large text-primary-default dark:text-primary-darkMode">
          {post.category}
        </p>
        <div className="grid-cols-12 desktop:grid desktop:mt-5">
          <div className="col-span-7">
            <h2 className="mt-5 font-bold desktop:mt-0 text-mobile-display-large desktop:text-desktop-display-large text-greyscale-off-black dark:text-greyscale-off-white">
              {post.title}
            </h2>
          </div>
          <div className="col-span-5">
            <div className="mt-3 desktop:mt-0">
              <time className="mt-3 text-desktop-text-medium text-greyscale-placeholder">
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center mt-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image src={post.author.picture} alt="avatar" layout="fill" />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-desktop-link-medium text-greyscale-body dark:text-greyscale-off-white">
                  {post.author.name}
                </p>
                <p className="desktop-text-medium text-greyscale-body dark:text-greyscale-off-white desktop:font-light">
                  {post.author.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="grid-cols-12 mt-4 desktop:grid desktop:mt-9 desktop:gap-x-4">
        <div className="relative w-full aspect-[16/11] desktop:aspect-[16/10] rounded-[24px] overflow-hidden desktop:order-2 col-span-5">
          <Image src={post.featuredImage} alt="post image" layout="fill" objectFit="cover" />
        </div>
        <div className="col-span-7 desktop:order-1">
          <p className="col-span-7 mt-4 font-normal desktop:mt-0 text-mobile-text-large desktop:text-desktop-text-medium text-greyscale-body dark:text-greyscale-line desktop:font-light">
            {post.excerpt}
          </p>
          <footer className="mt-6">
            <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
              <a className="flex items-center font-semibold text-desktop-link-small text-primary-default dark:text-primary-darkMode">
                Read more
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 5L16.9632 11.9632L10 18.9263"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Link>
          </footer>
        </div>
      </main>
    </article>
  )
}
