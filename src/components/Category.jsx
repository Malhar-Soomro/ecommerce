import { categoryData } from "../../data"

const Category = () => {
  return (
    <div className="flex gap-2 sm:mx-4 mx-1 sm:mb-40 mt-6 overflow-hidden flex-col md:flex-row">

      {categoryData.map((item) => {
        return(
          <div key={item.id} className="card h-[70vh] relative flex-1">
          <div className="h-[150px] md:h-[100%] w-[100%]">
            <img className="w-[100%] h-[100%] object-cover" src={item.image} alt="" />
          </div>
          <div className="text-white flex flex-col items-center justify-center gap-4 m-[-20rem] right-[50%] left-[50%] absolute top-[50%] bottom-[50%]">
            <h1 className="text-2xl lg:text-4xl font-bold">{item.title}</h1>
            <button className="border-none bg-white text-[#808080] font-semibold p-2">SHOP NOW</button>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Category