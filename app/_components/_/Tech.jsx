"use client"
import React, { useEffect, useRef, useState } from 'react'
import { sectionWrapper } from '../../wrapper'
// import { technologies } from '../constants'
import axios from 'axios'

// automatic scrolling words css defined in global css source code: N/A 

const Tech = () => {
    const [technologies, setTech] = useState([])

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        addAnimation(scrollers);
        getTech()
    }, []);

    const getTech = async () => {

        const res = axios.get('/api/technologies').then(res => {
            // console.log(res.data)
            setTech(res.data.data)
        }).catch(err => console.log(err))

    }
    function addAnimation(scrollers) {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
    return (
        <div id="scroller_body" className=" scroller w-full relative" data-speed="fast">
            <ul className="tag-list m-0 list-none scroller__inner flex items-center justify-center flex-wrap gap-[1rem]">
                {technologies.map((tech, index) => (
                    <li className='p-[1rem] cursor-pointer bg-transparent br-[0.5em]' key={index}>{tech.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tech