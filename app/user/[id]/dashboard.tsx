import { getSession } from "next-auth/react";
import { useRouter } from "next/router"

const Dashboard = ({ user }) => {
  const router = useRouter();
  const { id } = router.query

  return (
    <div>
      {id}
    </div>
  )

}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.params;

  if (!session || session.user.id !== id) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}

export default Dashboard;
