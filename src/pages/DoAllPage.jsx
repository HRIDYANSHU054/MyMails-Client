import { useLoaderData } from "react-router-dom";

function DoAllPage() {
  const loaderData = useLoaderData();

  console.log(loaderData);

  return (
    <div>
      Response Generated and Mail sent ( for the first 2 unseen mails coz of api
      limits ) check your gmail
    </div>
  );
}

export async function loader() {
  try {
    const resp = await fetch("http://localhost:3000/api/google/send/gen", {
      credentials: "include",
    });
    const data = await resp.json();

    if (resp.status === 500) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.log("err:", error.message);
    return null;
  }
}

export default DoAllPage;
