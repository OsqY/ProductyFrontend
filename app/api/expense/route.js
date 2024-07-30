import { getAccessToken } from "@auth0/nextjs-auth0";

export async function GET() {
  try {

    const { accessToken } = await getAccessToken();

    if (!accessToken) return new Response(JSON.stringify({ message: 'Not authenticated' }, { status: 401 }))

    const response = await fetch('http://localhost:5256/api/expense', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    if (!response.ok) {
      console.error('Response not OK:', response.statusText);
      return new Response(JSON.stringify({ message: response.statusText }), { status: response.status });

    }

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.error('Error fetching access token or making request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }

}

export async function POST(req) {

  try {
    const { accessToken } = await getAccessToken();

    if (!accessToken) return new Response(JSON.stringify({ message: 'Not authenticated' }, { status: 401 }))

    const body = await req
    // console.log(body)

    const response = await fetch('http://localhost:5256/api/expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body)
    })

    return new Response("Created expense", { status: 201 });
  } catch (error) {

    console.error('Error fetching access token or making request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
