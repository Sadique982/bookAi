import React from "react";
import "./NewsLetter.css";
function NewsLetter() {
  return (
    <section className="newsletter text-center md:mx-20 mt-14 rounded-lg">
      <h3 className=" text-2xl text-textColor font-bold">Stay Updated</h3>
      <p className="text-textColor py-3">
        Subscribe to our newsletter for the latest AI writing tips and BookAI
        updates.
      </p>
      <form action="" className="flex flex-col md:flex-row gap-4 justify-center mt-5 w-full">
        <input
          className="p-3 border-none rounded-md text-lg text-slate-800 md:w-2/3"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="bg-gradient1 p-3 rounded-md  md:w-1/3">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsLetter;
