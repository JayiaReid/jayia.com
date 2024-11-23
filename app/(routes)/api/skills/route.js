
export async function GET(req, res){

    const skills = [
        { details: "Strong knowledge of object-oriented programming and software development using Java, Python and C" },
        { details: "Knowledgeable in frontend development using HTML, CSS, Javascript and React.js and Next.js frameworks" },
        { details: "Proficient in database design and programming including Oracle RDMS, SQL Server, and PostgreSQL" },
        { details: "Excellent numeracy, communication (written, oral, listening), collaborative skills, and time management" },
        { details: "Exceptional ability to quickly learn and adapt, problem-solve, work efficiently under pressure, and pay keen attention to detail" },
        { details: "Advanced in Microsoft Office Suite" }
      ];
      
    return new Response(JSON.stringify({ success: true, data: skills }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}