"use client"
import React, { useEffect, useState } from 'react';
// import { footerIcons } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import axios from 'axios';
import { sectionWrapper } from '../wrapper';

const FooterIcon = ({ icon, index }) => {

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 2)}>
            <img
                onClick={() => icon.link && window.open(icon.link, "_blank")}
                className='w-10 h-auto cursor-pointer'
                // title={icon.title}
                src={`/${icon.icon}.png`}
                alt={icon.title}
            />
        </motion.div>
    );
};

const Footer = () => {

    const [footerIcons, setIcons] = useState([])

    const getIcons = async () => {

        const res = axios.get('/api/links').then(res => {
            setIcons(res.data)
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        getIcons()
    }, [])

    return (
        <div className='pb-5 flex flex-row justify-evenly cursor-pointer'>
            {footerIcons.map((icon, index) => (
                <FooterIcon key={icon.title} index={index} icon={icon} />
            ))}
        </div>
    );
};

export default sectionWrapper(Footer, "media");
