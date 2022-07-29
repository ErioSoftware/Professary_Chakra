import { FunctionComponent } from "react"

export const CTA: FunctionComponent = () => {
  return (
    <div
      className="items-center justify-center p-12 desktop:flex bg-origin-content desktop:bg-contain rounded-2xl"
      style={{
        backgroundImage: 'url("/ctaPattern.png")',
        backgroundColor: '#610BEF'
      }}>
      <h2 className="flex-1 font-bold text-center text-desktop-display-medium text-greyscale-off-white">
        I want to take the test
      </h2>
      <div className="py-8 mx-auto w-max">
        <button className="inline-flex px-8 py-4 font-semibold rounded-lg text-primary-default dark:text-greyscale-label-off-white bg-greyscale-off-white text-desktop-link-small">
          Let&apos;s go
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.2827 5L20.9998 12L14.2827 19"
              stroke="#610BEF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="19.7329"
              y1="12.0312"
              x2="3.99985"
              y2="12.0312"
              stroke="#610BEF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
