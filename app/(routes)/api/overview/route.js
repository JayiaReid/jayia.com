
export async function GET(req, res){

    const overview = [
        {
            text: "Hi there, welcome to my portfolio! Here, you'll find a showcase of the various projects I have worked on, along with details about my skills and experiences. Feel free to explore and learn more about my journey in computer programming. If you'd like to get in touch, you'll also find my contact information. Enjoy your visit!"
        }
    ]
    return new Response(JSON.stringify({ success: true, data: overview }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}