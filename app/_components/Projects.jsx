"use client"
import { Button } from '@/components/ui/button';
import { DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Dialog } from '@radix-ui/react-dialog';
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react'
import TypewriterComponent from 'typewriter-effect'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollArea } from '@/components/ui/scroll-area';
import { sectionWrapper } from '../wrapper';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuRadioItem } from '@radix-ui/react-dropdown-menu';


const Slideshow = ({ slides }) => {
  return (
    <Carousel opts={{
      align: "start",
      // loop: true,
    }} className="flex">

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className=" shadow-none border-none ">
                <CardContent className="flex items-center justify-center">
                  <div className="" key={index}>
                    <img src={`/${slide}.png`} alt={`Slide ${index + 1}`} className="w-[400px] rounded-lg h-[250px] object-cover" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      {/* <CarouselNext/>
      <CarouselPrevious/> */}
    </Carousel>
  )


};

const ProjectCard = ({ project }) => {

  const isEven = project.id % 2 === 0; //allows the side of screen to alternate

  return (
    <div className={`bg-transparent py-5   gap-5 rounded-2xl w-full about-card flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
        <img src={`/${project.image}.png`} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className=" bg-black w-10 h-10 rounded-full flex justify-center object-cover items-center cursor-pointer"
          >
            <img src={'/github.png'} alt="github" />
          </div>
        </div>
      </div>

      <div className="mt-5 ml-5 md:mt-0 md:ml-5 md:w-1/2 flex items-start gap-2 flex-col justify-center">
        <h3 className="text-white font-bold text-[24px] md:text-[28px]">{project.name}</h3>
        <p className="mt-2 text-primary text-[14px] md:text-[18px]">{project.overview}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <p key={index} className={`text-[14px] text-${tag.color}-500 `}>
              #{tag.name}
            </p>
          ))}
        </div>
        {/* allows you to see more about the project */}
        <Dialog className="w-[800px]">
          <DialogTrigger>
            <Button variant="outline" className=" mt-5 p-1 w-[100px] bg-transparent hover:bg-white hover:text-black outline outline-2 ring-secondary duration-200 rounded-es-none rounded-se-none">See Project</Button>
          </DialogTrigger>
          <DialogContent>
            <ScrollArea className="flex flex-col gap-10 h-[500px]">

              <h2 className="text-3xl text-primary font-bold mb-4">{project.name}</h2>
              <div className="flex items-center gap-2">
                <h2 className='text-xs font-bold'>Drag to see</h2>
                <Slideshow slides={project.slides} />

              </div>

              <p className="text-black text-md mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className={`text-lg text-${tag.color}-500`}>
                    #{tag.name}
                  </span>
                ))}
              </div>
              <div className="flex mt-5 items-center gap-5">
                <Button
                  onClick={() => window.open(project.source_code_link, "_blank")}
                  className="flex text-black justify-center items-center duration-500 cursor-pointer hover:bg-transparent hover:border-primary hover:border-2"
                >
                  Visit Github
                </Button>
                {project.link ? <Button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex text-black justify-center items-center duration-500 cursor-pointer hover:bg-transparent hover:border-primary hover:border-2"
                >
                  visit website
                </Button> : null}
              </div>


            </ScrollArea>
          </DialogContent>
        </Dialog>
        {/* <button className="mt-5 p-1 w-[100px] hover:bg-white hover:text-primary outline outline-2  ring-secondary duration-200 rounded-es-md rounded-se-md">See Project</button> */}
      </div>

    </div>
  )
}

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [type, setType] = useState('All')
  const [types, setTypes] = useState([])

  const fetchProjects = async () => {
// get projects from server
    const res = axios.get('/api/projects').then(res => {
      console.log(res.data.data)
      setProjects(res.data.data)
    }).catch(err => console.log(err))

  }

  const getTypes = useCallback(() => {
    const uniqueTypes = [...new Set(projects.map(project => project.type))]; //only gets unique types for filtering
    setTypes(uniqueTypes);
  }, [projects]);

  useEffect(() => {
    fetchProjects()

  }, [])

  useEffect(() => {
    getTypes();
  }, [projects, getTypes]);


  return (
    <div className='text-white'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText}`}>
          <TypewriterComponent
            options={{
              strings: ["What I have Worked On So Far"],
              loop: true,
              autoStart: true,
            }}
          />
        </h2>
        <div className='flex justify-between items-center'>
          <h2 className={`${styles.sectionHeadText} flex items-start gap-10`}><span>Projects</span> </h2>
          {/* filter */}
          <DropdownMenu className='flex gap-2 my-8'>
            <DropdownMenuTrigger>
              <Button variant="outline" className="text-black focus:outline-none">{type}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filter By Project Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={type} onValueChange={setType}>
                <DropdownMenuRadioItem className='text-left p-2' value="All">All</DropdownMenuRadioItem>
                {types.map((type, index) => (
                  <DropdownMenuRadioItem className='hover:bg-slate-100 cursor-pointer rounded-lg text-left p-2' key={index} value={type}>{type}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </motion.div>

      <div className='flex flex-col gap-10'>

        {projects?.map((project, key) => (
          project.type == type || type == "All" ?
            <ProjectCard key={key} project={project} /> : null
        ))}
      </div>
    </div>
  )
}

export default sectionWrapper(Projects, "projects");