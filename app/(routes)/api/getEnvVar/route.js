
export async function GET(req, res) {
    const details = {
      id: process.env.TEMPLATE_ID,
      api: process.env.API_KEY,
      project: process.env.PROJECT_NAME,
      email: process.env.EMAIL,
    }
    return new Response(JSON.stringify({ success: true, data: details }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
  }