
export async function GET(req, res){

    const techs = [
        { name: "HTML 5", icon: "html" },
        { name: "CSS 3", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Java", icon: "java" },
        { name: "React JS", icon: "reactjs" },
        { name: "Next Js", icon: "NotebookText" },
        { name: "Python", icon: "Code" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Node JS", icon: "nodejs" },
        { name: "mySQL", icon: "Database" },
        { name: "Git", icon: "git" },
        { name: "C", icon: "CpuIcon" },
        { name: "Drizzle ORM", icon: "CloudDrizzle" },
        { name: "PostgreSQL", icon: "docker" },
        { name: "React Native", icon: "docker" },
    ]
    return new Response(JSON.stringify({ success: true, data: techs }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}