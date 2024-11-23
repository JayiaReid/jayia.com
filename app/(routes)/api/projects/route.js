import path from 'path';
import fs from 'fs';

export async function GET(req, res) {

    const projects = [
        {
          id: 0,
          name: "Pinterest",
          link: "https://pinterest-clone-dun.vercel.app/",
          type: "FullStack",
          slides: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
          overview: "Pinterest clone",
          description:
            "A clone of the website/app known as pinterest built using NextJs and MongoDB.",
          tags: [
            { name: "NextJs", color: "blue" },
            { name: "Tailwind CSS", color: "pink" },
            { name: "mongoDB", color: "green" },
            { name: "Full-Stack Development", color: "orange" },
            { name: "Clone", color: "yellow" },
          ],
          image: "pin1",
          source_code_link: "https://github.com/JayiaReid/StuCo-App",
        },
        {
          id: 1,
          name: "StuCo",
          link: null,
          type: "FullStack",
          slides: ["stuco1", "stuco2", "stuco3"],
          overview:
            "A comprehensive study tool platform offering calculators, note-taking, and conversion services",
          description:
            "StuCo is a personal project designed as a comprehensive study platform. It features a study space with tools such as timers, to-do lists, calculators, note-taking services, and conversion utilities in the form of draggable components. Developed using React for the frontend and Express.js for the backend, it is connected to a MySQL database. This project marked my entry into full-stack development and allowed me to apply fundamental concepts from both frontend and database coursework.",
          tags: [
            { name: "React", color: "blue" },
            { name: "CSS", color: "pink" },
            { name: "mySQL", color: "green" },
            { name: "Full-Stack Development", color: "orange" },
            { name: "Study Tools", color: "yellow" },
          ],
          image: "stuco1",
          source_code_link: "https://github.com/JayiaReid/StuCo-App",
        },
        {
          id: 2,
          name: "Rhaen",
          link: "https://rhaen.vercel.app/",
          type: "FullStack",
          slides: ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8"],
          overview: "A cake shop and recipe catalogue ecommerce web app",
          description:
            "Rhaen is an online store that offers a recipe catalogue for customers that wish to get their own hands dirty. This NextJs web app features a beautiful and seamless UI designed using Tailwind CSS and ShadCN UI library. The backend composes of APIs that use NodeJs' fs and path modules for CRUD operations to respective JSON files. The authentication is handled by Clerk.",
          tags: [
            { name: "NextJs", color: "green" },
            { name: "NodeJs", color: "blue" },
            { name: "Clerk", color: "pink" },
          ],
          image: "r1",
          source_code_link: "https://github.com/JayiaReid/Rhaen",
        },
        {
          id: 3,
          name: "FinCo: Expenses",
          type: "FullStack",
          link: "https://finco-three.vercel.app/",
          slides: ["f1", "f2", "f3", "f4", "f5", "f6"],
          overview:
            "Finco is a comprehensive financial management application designed to help users create budgets and track their expenses efficiently for seamless tracking and planning.",
          description:
            "Finco offers a range of key features designed to enhance financial management and planning. It was developed using the NextJs framework with Neon PostgreSQL database and Drizzle ORM for database CRUD operations. The seamless UI was developed using mostly TailwindCSS and some ShadCN UI components.",
          tags: [
            { name: "NextJs", color: "green" },
            { name: "Tailwind CSS", color: "blue" },
            { name: "PostgreSQL", color: "orange" },
            { name: "Full-Stack Development", color: "orange" },
            { name: "Expense-Tracking", color: "yellow" },
            { name: "Clerk Auth", color: "red" },
          ],
          image: "f1",
          source_code_link: "https://github.com/JayiaReid/finco",
        },
        {
          id: 4,
          name: "Targaryen: Team Black",
          link: "https://targaryens.vercel.app/",
          type: "FullStack",
          slides: ["tb1", "tb2", "tb3", "tb4"],
          overview:
            "A website that allows House of the Dragon fans to listen and leave reviews on the soundtrack",
          description:
            "This website is built using the React framework with an implemented backend using ExpressJs. The website incorporates CSS for the UI and implements React fundamentals to present an encaptivating UI. Users are able to listen to the songs of the soundtrack associated with Team Black as well as leave reviews and view user reviews saved within the database.",
          tags: [
            { name: "React", color: "blue" },
            { name: "REST API", color: "green" },
            { name: "CSS", color: "pink" },
          ],
          image: "tb1",
          source_code_link: "https://github.com/JayiaReid/Targaryens",
        }, {
            id: 5,
            name: "Stuco Management",
            link: null,
            type: "FullStack",
            overview: "StuCo Management is an admin-based tool under the StuCo brand that allows admin to manage students, schools, attendance, etc. based on their role.",
            slides: ["man1", "man2", "man3", "man4", "man5", "man6"],
            description:
              "StuCo Management is an extension of the StuCo project. It enables administrators to manage students, schools, and other admins, providing various services including attendance monitoring. Developed using Next.js and Tailwind CSS, this project allowed me to enhance my skills in these technologies and learn about database management with Drizzle ORM.",
            tags: [
              { name: "nextjs", color: "blue" },
              { name: "tailwind", color: "green" },
              { name: "Drizzle ORM", color: "pink" },
              { name: "Administrative Tools", color: "yellow" },
              { name: "KindeAuth", color: "red" },
              { name: "ShadCN UI", color: "orange" },
            ],
            image: "man1",
            source_code_link: "https://github.com/JayiaReid/stuco-admin",
          },
          {
            id: 6,
            name: "Stuco: ToDo",
            link: null,
            type: "FullStack",
            slides: ["todo1", "todo2", "todo3"],
            overview: "A todo app built using Django.",
            description:
              "This is a basic to-do app that allows users to create tasks and mark them as complete. My first Django app, so it is a simple app, but concepts such as models, views, and templates were incorporated.",
            tags: [
              { name: "Django", color: "blue" },
              { name: "Python", color: "pink" },
              { name: "HTML", color: "orange" },
            ],
            image: "todo1",
            source_code_link: "https://github.com/JayiaReid/todo_django",
          },
          {
            id: 7,
            name: "Java Airlines",
            link: null,
            type: "Java",
            slides: ["ja1", "ja2", "ja3", "ja4", "ja5", "ja6"],
            overview:
              "A flight booking simulator where you're able to log in, skim through available flights, book a flight, view current flight tickets, and cancel ticket bookings if desired.",
            description:
              "This app is built using Java object-oriented principles such as encapsulation and polymorphism. The java.awt package was used for UI, bringing the application to life. Multiple class systems and modularization were utilized alongside file handling to store information into respective text files.",
            tags: [
              { name: "Java", color: "orange" },
              { name: "OOP", color: "blue" },
              { name: "Files", color: "yellow" },
            ],
            image: "ja2",
            source_code_link: "https://github.com/JayiaReid/JavaAirlines",
          },
          {
            id: 8,
            name: "Task Force",
            link: null,
            type: "Frontend",
            slides: ["TF1", "TF2", "TF3", "TF4", "TF5", "TF6"],
            overview:
              "A website for a security company, Task Force, that allows customers to view services offered and order services/packages.",
            description:
              "This website was built as a collaborative final project using HTML, CSS, and JavaScript. It is fully frontend and contains no backend. I led the group to the successful completion of the project, earning perfect marks for the website.",
            tags: [
              { name: "HTML", color: "green" },
              { name: "CSS", color: "blue" },
              { name: "JavaScript", color: "yellow" },
            ],
            image: "TF1",
            source_code_link: "https://github.com/n01607926/Home-Security-Task-Force",
          }
    ]

    return new Response(JSON.stringify({ success: true, data: projects }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}