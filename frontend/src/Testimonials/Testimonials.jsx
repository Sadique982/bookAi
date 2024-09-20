import React from "react";
import "./Testimonials.css";
function Testimonials() {
  return (
    <section className="text-center mt-16 m-0 md:mx-5">
      <h3 className="font-bold text-textColor text-2xl">What Our Users Say</h3>
      <div className="testimonials mx-0 md:mx-16  grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
        <div className="testimonial py-5 px-3 rounded-lg">
          <q>
            BookAI revolutionized my writing process. I completed my debut novel
            in just two weeks!
          </q>
          <div className="text-lg font-semibold">- Sarah J., Author</div>
        </div>
        <div className="testimonial py-5 px-3 rounded-lg">
          <q>
            The AI-generated ideas helped me overcome writer's block. It's like
            having a co-author at your fingertips.
          </q>
          <div className="text-lg font-semibold">
            - Mark T., Aspiring Writer
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
