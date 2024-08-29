import { useLoaderData } from "react-router-dom";

function ClassifiyPage() {
  const data = useLoaderData();

  console.log(data);

  return <div>Labels and Responses. Inspect Console</div>;
}

export async function loader({ params }) {
  try {
    const messageId = params.messageId;
    const resp = await fetch(
      `http://localhost:3000/api/google/classify/${messageId}`,
      {
        credentials: "include",
      }
    );

    const data = await resp.json();
    if (resp.status === 500) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default ClassifiyPage;
