import React from 'react';

function Missing() {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold text-indigo-600 text-7xl lg:text-9xl">404</h1>
          <p className="mb-4 text-xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-base md:text-base font-light dark:text-gray-300 max-w-[25rem] mx-auto">
            Sorry, we can&apos;t find that project. You&apos;ll find lots to explore on the home
            page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Missing;
