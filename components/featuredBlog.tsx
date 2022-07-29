import { IBlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export const FeaturedBlog: FunctionComponent<{post: IBlogPost}> = ({ post }) => {
  return (
    <article className="mt-20 p-5 bg-greyscale-off-white rounded-[32px] shadow-large desktop:flex flex-row-reverse dark:bg-greyscale-body">
      <div className="relative w-full overflow-hidden rounded-md aspect-square desktop:aspect-auto desktop:ml-4">
        <Image src={post.featuredImage} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="desktop:pl-5 desktop:pt-3 desktop:pb-3">
        <p className="mt-5 font-bold desktop:mt-0 text-mobile-link-large text-primary-default dark:text-primary-darkMode">
          {post.category}
        </p>
        <h1 className="mt-2 font-bold text-mobile-display-large desktop:text-desktop-display-large text-greyscale-off-black dark:text-greyscale-off-white">
          {post.title}
        </h1>
        <div className="flex items-center mt-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full">
            <Image src={post.author.picture} alt="post image" layout="fill" objectFit="cover" />
          </div>
          <div className="ml-4">
            <p className="font-semibold text-desktop-link-x-small text-greyscale-body dark:text-greyscale-off-white">
              {post.author.name}
            </p>
            <p className="text-desktop-text-x-small text-greyscale-placeholder">
              {post.author.designation}
            </p>
          </div>
        </div>
        <section className="mt-2">
          <p className="font-light text-mobile-text-large text-greyscale-body desktop:text-desktop-text-large dark:text-greyscale-input">
            {post.excerpt}
          </p>
        </section>
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
    </article>
  )
}
