import { getServerSession } from "next-auth"

export default async (req, res) => {
  const session = await getServerSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { accessToken } = session;

  const response = await fetch("localhost:5290/api/todo", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body
  });

  if (!response.ok) {
    return res.staus(response.status).json({ message: response.statusText });
  }

  const data = await response.json();
  res.status(200).json(data);
}
