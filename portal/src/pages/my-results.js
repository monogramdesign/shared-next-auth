import { useSession } from "next-auth/react";

const MyResultsPage = () => {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <div>This is were the user results will be listed.</div>;
};

export default MyResultsPage;
