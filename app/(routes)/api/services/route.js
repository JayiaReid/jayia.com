
export async function GET(req, res){

    const services = [
        { title: "Education", id: "education" },
        { title: "Experience", id: "experience" },
        { title: "Skills", id: "skills" },
        { title: "Interests", id: "interests" },
      ]; 
    return new Response(JSON.stringify({ success: true, data: services }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}