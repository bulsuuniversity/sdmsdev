"use client"

import Layout from "@/components/Layout";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import ima1 from "../../public/ima1.jpeg"
import ima2 from "../../public/ima2.png"
import ima3 from "../../public/ima3.png"
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const [viewPort, setViewPort] = useState(null);


  const refs = {
    blogRef: useRef(null),
    contactRef: useRef(null),
    aboutRef: useRef(null)
  };

  useEffect(() => {
    refs[viewPort]?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [viewPort, refs]);

  const images = [
    ima1,
    ima2,
    ima3
  ]


  return (
    <main>
      <Layout setViewPort={setViewPort}>
        <Blog ref={refs.blogRef} images={images} />
        <Contact ref={refs.contactRef} />
        <About ref={refs.aboutRef} />
      </Layout>
    </main>
  );
}

export default Home;