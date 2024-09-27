import './App.css';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Navbar from './pages/Navbar/Navbar';
import MainBody from './pages/MainBody/MainBody';
import AiDemo from './pages/AiDemo/AiDemo';
import Features from './pages/Features/Features';
import Footer from './pages/Footer/Footer';
import WorkRoadMap from './pages/WorkRoadmap/WorkRoadMap';
import BookSample from './pages/BookSample/BookSample';
import Testimonials from './pages/Testimonials/Testimonials';
import NewsLetter from './pages/NewsLetter/NewsLetter';
import Book from './assets/book.png';
import Paradox from './assets/paradox.png';

function MovingStars() {
  const starsRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.x = elapsedTime * 0.01;
      starsRef.current.rotation.y = elapsedTime * 0.01;
    }
  });

  return <Stars ref={starsRef} radius={50} count={10000} factor={5} fade />;
}

function App() {
  return (
    <div className='App relative'>
      <motion.section className='relative overflow-hidden min-h-screen bg-transparent'>
        <Navbar />
        <MainBody />
        <AiDemo imgSrc={Book} fltImg={Paradox} altText='Ai Book Generator' />
        <div className='absolute inset-0 -z-10'>
          <Canvas>
            <MovingStars />
          </Canvas>
        </div>
      </motion.section>
      <Features />
      <WorkRoadMap heading='How It Works' />
      <BookSample />
      <AiDemo imgSrc={null} fltImg={null} altText='Ai Book Generator Video' />
      <WorkRoadMap heading='Roadmap' />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
