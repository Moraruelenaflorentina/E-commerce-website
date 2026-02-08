import React from 'react';
import SectionWrapper from './SectionWrapper'; // import the wrapper

const NewsLatterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <SectionWrapper className="text-center">
<p className="text-2xl text-gray-800 font-medium transform transition duration-300 hover:-translate-y-2 hover:scale-105">
  Subscribe now
</p>
      <p className="text-gray-400 mt-3">
        Join our newsletter to receive updates on new arrivals, exclusive offers, and special releases.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className=" bg-white text-black hover:bg-gray-300 active:bg-gray-500 text-xs px-10 py-4 cursor-pointer"
        >
          Aboneazate
        </button>
      </form>
    </SectionWrapper>
  );
};

export default NewsLatterBox;
