
export async function GET(req, res){

    const interests = [
        { details: "President of Steel Band in high school for 3 years and double bass player for school’s orchestra" },
        { details: "Led student team in developing an airport management system using C that won a STEM fair" },
        { details: "Consistently commended by professors and peers for programming ability, quick grasp of concepts, and desire for continuous learning" },
        { details: "Hobbies: programming, solving sudoku puzzles, drawing, playing the double bass, walking, photography" }
      ];
       
    return new Response(JSON.stringify({ success: true, data: interests }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}