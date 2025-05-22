"use client";

import Video from "next-video";
import trailerVid from "@/videos/trailer.mp4";
import thumbnail from "@/public/images/thumbnail.png";
import { motion } from "framer-motion";

export default function Page() {
  return (

    <section className="relative  bg-gradient-to-b from-red-50 to-white py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Video 
              src={trailerVid}
              className="w-full aspect-video object-cover"
              controls={true}
              poster={thumbnail}
            />
          </div>
        </motion.div>
    </section>
       );
}