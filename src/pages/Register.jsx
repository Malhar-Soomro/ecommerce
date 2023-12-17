
const Register = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-pink-200">
        <div className="bg-white p-6 flex flex-col justify-center items-center gap- sm:w-[45%] w-[90%]">
            <h2 className="text-2xl font-light mr-auto">CREATE AN ACCOUNT</h2>
            <div className="flex gap-4 sm:gap-2 justify-center w-full text-sm mt-4 flex-col sm:flex-row">
                <input className="border border-black p-2 w-full" type="text" placeholder="name" />
                <input className="border border-black p-2 w-full" type="text" placeholder="last name" />
            </div>
            <div className="flex gap-4 sm:gap-2 w-full text-sm mt-4 flex-col sm:flex-row">
                <input className="border border-black p-2 w-full" type="text" placeholder="username" />
                <input className="border border-black p-2 w-full" type="text" placeholder="email" />
            </div>
            <div className="flex gap-4 sm:gap-2 w-full text-sm mt-4 flex-col sm:flex-row">
                <input className="border border-black p-2 w-full" type="text" placeholder="password" />
                <input className="border border-black p-2 w-full" type="text" placeholder="confirm password" />
            </div>
            <p className="text-xs mr-auto mt-3">By creating an account, I consent to the processing of my personal data in accordance with the <span className="font-bold">PRIVACY POLICY</span> </p>
            <button className="bg-[#008080] mr-auto w-[40%] py-3 text-white text-sm mt-3">CREATE</button>
        </div>
    </div>
  )
}

export default Register