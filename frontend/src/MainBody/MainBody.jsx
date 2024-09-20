import React from "react";
import "./MainBody.css";
function MainBody() {
  return (
    <>
      <section className="hero text-center pt-20 pb-10 relative">
        <div className="flex justify-center">
          <h1 className="max-w-6xl">
            Explore the Possibilities of
            <span class="highlight bg-gradient2 mx-4">AI Book Writing</span>
            with BookAI
          </h1>
        </div>
        <div className="flex justify-center">
          <p class="subtitle text-textSecondary mb-10 max-w-xl font-medium text-lg">
            Unleash the power of AI to create captivating books in minutes.
            Download, Distribute wherever you want. Generate unlimited free
            books
          </p>
        </div>
        <div className="button">
          <a href="#" className="bg-gradient1">
            Get Started
          </a>
          <a href="#" className="bg-gradient1">
            Get API Access
          </a>
        </div>
        <p className="attention text-yellow">
          Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
          be used for text and image generation
        </p>
      </section>
    </>
  );
}

export default MainBody;
