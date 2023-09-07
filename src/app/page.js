"use client"

import Layout from "@/components/Layout";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import ima1 from "../../public/ima1.jpeg"
import ima2 from "../../public/ima2.jpeg"
import ima3 from "../../public/ima3.jpeg"
import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useProfileData } from "./libs/store";
import ConfirmationModal from "@/utils/ConfirmationModal";

const Home = () => {
  const [viewPort, setViewPort] = useState(null);
  const [setUp, setSetup] = useState(false)
  const { profileData } = useProfileData()

  const { data: session } = useSession();

  useEffect(() => {
    console.log('Home page session', session)
  }, [session])

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
        {profileData && !profileData.name && setUp &&
          <ConfirmationModal>
            <div className="flex flex-col w-96 justify-center p-4 justify-center">
              <div className="text-2xl font-bold whitespace-normal text-center ">
                Please setup you profile first!
              </div>
              <div className="text-center italic text-sm">Personal information are needed to be filled out first before doing any proccess.</div>
              <div className="flex justify-center mt-4">
                <button className="bg-white w-max rounded-md px-5 py-1" onClick={() => setSetup(false)}>Okay</button>
              </div>
            </div>
          </ConfirmationModal>
        }
        <Blog ref={refs.blogRef} images={images} />
        <Contact ref={refs.contactRef} />
        <About ref={refs.aboutRef} />
      </Layout>
    </main>
  );
}

export default Home;