import { Send } from "@material-ui/icons"

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex flex-col justify-center items-center gap-5">
        <h1 className=" text-7xl font-bold">Newsletter</h1>
        <p className=" text-2xl font-light">Get timely updates from your favorite products.</p>
        <div className="flex items-center w-[50%]">
            <input className="flex-1 h-10 border border-[#d3d3d3] pl-4" type="text" placeholder="Your email" />
            <div className="bg-[#008080] p-2 px-6">
                <Send className="text-white"/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter