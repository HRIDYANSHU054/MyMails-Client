import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function HomePage() {
  const navigate = useNavigate();
  const [messageId, setMessageId] = useState("");
  const { setAuthUser } = useAuthContext();

  function getClassification(e) {
    if (!messageId.length) return;
    e.preventDefault();
    navigate(`/classify/${messageId}`);
  }

  async function logout() {
    try {
      const resp = await fetch(`http://localhost:3000/api/auth/logout`, {
        credentials: "include",
      });
      const data = await resp.json();
      setAuthUser(null);
      navigate("/signup", { replace: true });
      return data.message;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/inbox")}>get inbox mails</button>
      <form onSubmit={getClassification}>
        <input
          type="text"
          value={messageId}
          onChange={(e) => setMessageId(e.target.value)}
          required
          placeholder="#MessageId"
        />
        <button type="submit">
          classify and generate response for a message
        </button>
      </form>
      <button onClick={() => navigate("/generateAndSend")}>
        Generate and send Mails
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;
