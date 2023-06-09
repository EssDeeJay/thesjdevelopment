/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function Announcement() {
    const [close, setClose] = useState(false)
  return (
    <div className={close ?  'hidden' : 'relative bg-custom-blue dark:bg-trueGray-900 dark:border-b dark:border-white'}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white dark:text-cstom-blue">
            <span className="md:hidden">Start a free trial and enjoy 3 months of Shopify for $1/month on select plans</span>
            <span className="hidden md:inline">Start a free trial and enjoy 3 months of Shopify for $1/month on select plans</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="https://shopify.pxf.io/c/4211402/1101159/13624" className="text-white font-bold underline">
                {' '}
                Sign up now <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-custom-blue dark:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setClose(!close)}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white " aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}