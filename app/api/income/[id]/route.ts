import { getAccessToken } from "@auth0/nextjs-auth0";

export async function GET(req, { params }: { params: { id: string } }) {

  try {

    const { accessToken } = await getAccessToken();
    if (!accessToken) return new Response(JSON.stringify({ message: 'Not authenticated' }), { status: 401 });

    const id = params.id;
    const response = await fetch(`http://localhost:5256/api/income/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })


    if (!response.ok)
      return new Response(JSON.stringify({ message: response.statusText }), { status: response.status });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {

    console.error('Error fetching access token or making request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}

export async function PUT(req, { params }: { params: { id: string } }) {
  try {
    const { accessToken } = await getAccessToken();
    if (!accessToken) return new Response(JSON.stringify({ message: 'Not authenticated' }), { status: 401 });

    const id = params.id;
    const body = await req.json();
    const response = await fetch(`http://localhost:5256/api/income/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body),
    })

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error('Error fetching access token or making request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });

  }
}

export async function DELETE(req, { params }: { params: { id: string } }) {
  try {
    const { accessToken } = await getAccessToken();
    if (!accessToken) return new Response(JSON.stringify({ message: 'Not authenticated' }), { status: 401 });
    const id = params.id;

    const response = await fetch(`http://localhost:5256/api/income/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error('Error fetching access token or making request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });

  }
}

