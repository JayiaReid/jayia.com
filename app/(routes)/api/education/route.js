
export async function GET(req, res){

    const education = [
        {
          institution: "Humber College",
          role: "Advanced Diploma in Computer Programming and Analysis (Co-op)",
          startYear: "Sept. 2023",
          endYear: "Dec. 2026",
          details: [
            "Dean's Honour List",
            "JCA Entrance Scholarship of Excellence"
          ]
        },
        {
          institution: "Immaculate Conception High School",
          role: "High School Diploma",
          startYear: "Sept. 2017",
          endYear: "Jun. 2023",
          details: [
            "Honour Roll for 6 years",
            "Ranked 3rd in Math and 2nd in Computer Science"
          ]
        }
      ];
    return new Response(JSON.stringify({ success: true, data: education }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}