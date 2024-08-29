import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  async function loginThroughGmail() {
    window.open(`http://localhost:3000/api/auth/google`, "_self");
  }

  return (
    <div>
      {/* <button onClick={() => navigate("/home")}>Signup through google</button> */}
      <button onClick={loginThroughGmail}>Signup through google</button>
    </div>
  );
}

export default SignupPage;
