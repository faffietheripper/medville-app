import React from "react";
import Image from "next/image";

export default function MobileApp() {
  return (
    <div>
      <section>
        <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="w-full mx-auto text-left">
            <div class="relative flex-col items-center m-auto align-middle">
              <div class="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
                <div class="order-last block w-full mt-12 aspect-square lg:mt-0 lg:p-10 lg:order-first">
                  <Image
                    height={600}
                    width={600}
                    class="object-center w-full mx-auto bg-gray-200 rounded-2xl"
                    alt="hero"
                    src="https://cdn.pixabay.com/photo/2021/06/28/10/59/social-media-6371249_1280.jpg"
                  />
                </div>
                <div>
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      Mobile App coming soon !
                    </p>
                    <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                      Use this paragraph to share information about your company
                      or products. Make it engaging and interesting, and
                      showcase your brand's personality. Thanks for visiting our
                      website!
                    </p>
                  </div>
                  <div class="flex flex-wrap gap-3 mt-10">
                    <a
                      class="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-6 h-6"
                        viewBox="0 0 512 512"
                      >
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                      </svg>
                      <span class="flex flex-col items-start ml-4 leading-none">
                        <span class="mb-1 text-xs">GET IT ON</span>
                        <span class="font-medium title-font">Google Play</span>
                      </span>
                    </a>
                    <a
                      class="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-6 h-6"
                        viewBox="0 0 305 305"
                      >
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                      </svg>
                      <span class="flex flex-col items-start ml-4 leading-none">
                        <span class="mb-1 text-xs">Download on the</span>
                        <span class="font-medium title-font">App Store</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
