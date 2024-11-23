
export async function GET(req, res){

    const experience = [
        {
          institution: "Guardsman Group",
          role: "Data Processing Assistant",
          startYear: "May 2024",
          endYear: "Aug. 2024",
          details: [
            "Maintained an Excel database of employee records",
            "Assisted employees in updating their documents"
          ]
        }
      ];
      
    return new Response(JSON.stringify({ success: true, data: experience }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}