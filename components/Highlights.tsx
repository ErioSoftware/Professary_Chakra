import { ArrowRightIcon } from '@heroicons/react/outline'

const Highlights = () => {
	return (
		<section className='bg-primary-bg mt-12 dark:bg-greyscale-body'>
			<div className="px-6 py-8 mx-auto max-w-7xl ">
				<h3 className="text-desktop-text-large font-bold text-greyscale-off-black dark:text-greyscale-off-white">Recent Insights</h3>
				<div className="mt-8 flex overflow-x-scroll space-x-4 no-scrollbar scroll-smooth">
					{
						Array.from({length: 12}).map((_, index) => {
							return (
								<div key={index} className="bg-primary-default dark:bg-primary-darkMode p-8 w-72 rounded-2xl flex-shrink-0">
									<h4 className="text-lg font-bold text-greyscale-off-white">
										Terminal is now available in the UK and Ireland
									</h4>
									<time className="mt-2 text-xs font-light text-greyscale-off-white">August 10,  2021</time>
									<p className="text-sm mt-4 text-greyscale-off-white leading-relaxed font-light">
										Businesses can now accept in-person payments in the UK and Ireland with Terminal&apos;s flexible APIs, SDKs, and new pre-certified card readers.
									</p>
									<button className="mt-6 text-sm font-medium text-greyscale-off-white inline-flex items-center w-max">
										<span className="flex-shrink-0">Read more</span>
										<ArrowRightIcon className="ml-2 w-5 h-5" />
									</button>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}
export default Highlights