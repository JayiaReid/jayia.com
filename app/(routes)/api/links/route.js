
export async function GET(req, res){

    const links = [
        { title: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/jayia-reid-31a270314" },
        { title: "X", icon: "x", link: "https://x.com/n01607926" },
        { title: "Instagram", icon: "instagram", link: "https://www.instagram.com/t.jcjr/" },
        { title: "Github", icon: "git", link: "https://github.com/JayiaReid" }
      ];
       
    return new Response(JSON.stringify({ success: true, data: links }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
}