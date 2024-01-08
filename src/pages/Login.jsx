import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state => state.user);
  const [authData, setAuthData] = useState({username:"", password:"" });

  const handleOnChange = (e) => {
    setAuthData({...authData, [e.target.name]:e.target.value});
  }

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-200">
      <div className="flex flex-col bg-white sm:w-[28%] md:w-[40%] lg:w-[28%] w-[90%] p-4 gap-2">
        <h2 className="text-2xl font-light mr-auto">SIGN IN</h2>
        <input className="border border-black p-2 w-full text-sm mt-2" type="text" placeholder="username" name="username" onChange={handleOnChange} />
        <input className="border border-black p-2 w-full text-sm mt-2" type="password" placeholder="password" name="password" onChange={handleOnChange}/>
        <button onClick={() => login(dispatch, authData)} className="bg-[#008080] mr-auto w-[40%] py-3 text-white text-sm disabled:cursor-not-allowed disabled:text-[#008080]" disabled={isFetching}>LOGIN</button>
        {error && <p className="text-red-500">Something Went Wrong</p>}
        <a className="underline text-xs mt-2" href="#">DO NOT REMEMBER THE PASSWORD?</a>
        <a className="underline text-xs" href="#">CREATE A NEW ACCOUNT</a>
      </div>
    </div>
  );
}

export default Login