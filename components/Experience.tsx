// "use client"
// import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
// import { motion, useMotionValue } from 'framer-motion';
// import SectionHeading from './Section-Header';
// import { usePartInView } from '@/lib/hooks';
// import { experiencesData } from '@/lib/data';

// const DRAG_BUFFER = 50;


// export default function Experience() {
//     const {ref} = usePartInView("Experience", 0.5);
//     const [liIndex, setLiIndex] = useState(0);
//     const dragX = useMotionValue(0);
    


//     const onDragEnd = () => {
//         const x = dragX.get();
    
//         if (x <= -DRAG_BUFFER && liIndex < experiencesData.length - 1) {
//           setLiIndex((prev) => prev + 1);
//         } else if (x >= DRAG_BUFFER && liIndex > 0) {
//           setLiIndex((prev) => prev - 1);
//         }
//       };


//   return (
//     <section className='relative max-w-[64rem] scroll-mt-28 mb-28 overflow-hidden'
//     id="experience"
//     ref={ref}>
//         <SectionHeading>My experience</SectionHeading>
      
//         <div className='flex items-center relative cursor-grab active:cursor-grabbing'>
//             <motion.ul className="flex gap-2 relative text-lg text-gray-800 p-8"
//             drag='x' dragConstraints={{left: 0, right: 0}}
//             style={{ x: dragX }}
//             animate={{ translateX: `-${liIndex * 100}%`}}
//             onDragEnd={onDragEnd}
//             >
//                 {experiencesData.map((item, index) => (
//                     <motion.li key={index} className=' bg-white border border-black/10 min-h-[40rem] 
//                     w-[30rem] rounded-xl p-6'>
//                         <h3 className='font-bold'>{item.title}</h3>
//                         {item.company}
//                         <p>{item.description}</p>
//                     </motion.li>
//                 ))}
//             </motion.ul>
//         </div>
        
//     </section>
//   )
// }



