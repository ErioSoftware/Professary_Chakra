import Image from 'next/image'
import { FunctionComponent } from 'react'

export const TestimonialMDX: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-2 p-3 my-8 desktop:p-8 gap-x-3 desktop:gap-x-8 rounded-xl bg-greyscale-input">
      <div className="relative w-full overflow-hidden bg-black aspect-square rounded-xl">
        <Image
          alt={'Testimonial'}
          src={
            'https://images.unsplash.com/photo-1560762354-1be2f3d3c3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80'
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid place-items-center justify-items-start">
        <svg
          className="w-6 h-6 desktop:w-14 desktop:h-14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.99797 14.7036C9.99797 13.5372 9.63693 12.5374 8.91486 11.7042C8.19278 10.8155 7.2763 10.2323 6.16542 9.95458C6.27651 9.2325 6.55423 8.48266 6.99858 7.70504C7.49848 6.87187 8.02615 6.20534 8.58159 5.70544L6.91526 4.28906C2.30509 7.344 0 10.8155 0 14.7036C0 16.1478 0.472127 17.3697 1.41638 18.3695C2.41618 19.3138 3.61038 19.7859 4.99899 19.7859C6.38759 19.7859 7.55402 19.286 8.49828 18.2862C9.49807 17.2864 9.99797 16.0922 9.99797 14.7036ZM23.2453 14.7036C23.2453 13.5372 22.8842 12.5374 22.1622 11.7042C21.4401 10.8155 20.5236 10.2323 19.4127 9.95458C19.5794 9.17696 19.8849 8.39934 20.3292 7.62172C20.8291 6.8441 21.3568 6.20534 21.9122 5.70544L20.1626 4.28906C15.4969 7.45509 13.164 10.9266 13.164 14.7036C13.164 16.0922 13.6639 17.2864 14.6637 18.2862C15.6635 19.286 16.8577 19.7859 18.2463 19.7859C19.5794 19.7859 20.7458 19.286 21.7456 18.2862C22.7454 17.2864 23.2453 16.0922 23.2453 14.7036Z"
            fill="#D9DBE9"
          />
        </svg>
        <p className="font-light text-[10px] desktop:text-desktop-text-large text-greyscale-off-black">
          Faucibus est urna, cursus scelerisque senectus. Nibh sit viverra eget vitae.
        </p>
        <div>
          <strong className="font-semibold text-[12px] desktop:text-desktop-link-large text-greyscale-body">
            Lisha Cook
          </strong>
          <p className="font-medium leading-none text-[10px] desktop:text-desktop-link-small text-greyscale-placeholder">
            Electrical Expert
          </p>
        </div>
      </div>
    </div>
  )
}
