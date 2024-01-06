import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {isFetching, error} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  }
  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-200">
      <div className="flex flex-col bg-white sm:w-[28%] md:w-[40%] lg:w-[28%] w-[90%] p-4 gap-2">
        <h2 className="text-2xl font-light mr-auto">SIGN IN</h2>
        <input className="border border-black p-2 w-full text-sm mt-2" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <input className="border border-black p-2 w-full text-sm mt-2" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleOnClick} className="bg-[#008080] mr-auto w-[40%] py-3 text-white text-sm disabled:text-[#008080] disabled:hover:cursor-not-allowed" disabled={isFetching}>LOGIN</button>
        {error && <p className="text-red-700">Something went wrong</p>}
        <Link className="underline text-xs mt-2" href="#">DO NOT REMEMBER THE PASSWORD?</Link>
        <Link className="underline text-xs" href="#">CREATE A NEW ACCOUNT</Link>
      </div>
    </div>
  );
}

export default Login