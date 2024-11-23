"use client"
import React, { useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
// import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../wrapper'
import Tech from './_/Tech'
import TypewriterComponent from 'typewriter-effect'
import ResumeDownload from './_/ResumeDownload'
import axios from 'axios'
import { HoverCard } from '@radix-ui/react-hover-card'
import { HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarIcon, DotIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const ServiceCard = ({ title, id }) => {
  const [info, setInfo] = useState([])

  // get respective information from server
  useEffect(() => {
    const res = axios.get(`api/${id}`).then(res => {
      setInfo(res.data.data)
    }).catch(err => console.log(err))
  }, [])

  // hover over card to display neccessary info 
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className=" cursor-pointer rounded-xl xs:w-[250px] w-full flex items-center justify-center">
          <div className='w-full border-2 border-y-green-500 border-x-primary rounded-xl p-[1px]'>
            <div className='bg-black rounded-xl py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col'>

              <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        {info.map((item, index) => (
          <div key={index} className="flex justify-between space-x-4">
            {Array.isArray(item.details) ? <Avatar>
              <AvatarImage src={`/${id}.png`} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar> : null} 
            <div className="space-y-1">
              {item.institution ? <div><h2 className="text-sm font-semibold">@{item.institution}</h2><Separator /> </div> : null}

              {item.role ? <div><h2 className="text-sm font-semibold">{item.role}</h2><Separator /> </div> : null}
              {Array.isArray(item.details) ? (
                item.details.map((detail, index) => (
                  <p key={index} className="text-sm flex gap-2">
                    - {detail}
                  </p>
                ))
              ) : (
                <p className="text-sm flex flex-col gap-2">
                  <Separator/> {item.details}
                </p>
              )}
              {item.startYear && item.endYear ? <div> <Separator /><div className="flex items-center pt-2">

                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  {item.startYear} - {item.endYear}
                </span>
              </div></div> : null}
            </div>
          </div>
        ))}

      </HoverCardContent>
    </HoverCard>

  )
}

const Overview = () => {

  const [services, setServices] = useState([])
  const [overview, setOverview] = useState({})

  const getServices = async () => {
    // get services from server: just the card names really

    const res = axios.get('/api/services').then(res => {
      setServices(res.data.data)
    }).catch(err => console.log(err))
  }

  const getOverview = async () => {
    // get overview from server

    const res = axios.get('/api/overview').then(res => {
      setOverview(res.data.data[0])
    }).catch(err => console.log(err))

  }
    
   

  useEffect(() => {
    getServices()
    getOverview()
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText} mt-9 text-primary`}><TypewriterComponent options={{ strings: ["Introduction"], loop: true, autoStart: true }} /></h2>
        <h2 className={`${styles.sectionHeadText} `}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'>
        {overview.text}
        </motion.p>

      <ResumeDownload /> 

      <div className='my-20 flex gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <Tech />
    </>
  )
}

export default sectionWrapper(Overview, "overview")