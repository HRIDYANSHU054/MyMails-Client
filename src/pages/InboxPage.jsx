import { useLoaderData } from "react-router-dom";

function InboxPage() {
  const data = useLoaderData();

  console.log(data);

  return <div>Inbox</div>;
}

export default InboxPage;

export async function loader() {
  try {
    const resp = await fetch("http://localhost:3000/api/google/inbox", {
      credentials: "include",
    });
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log("err:", err.message);
    return null;
  }
}
