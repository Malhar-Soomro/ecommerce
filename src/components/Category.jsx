import { Link } from "react-router-dom"
import { categoryData } from "../../data"

const Category = () => {

  return (
    <div className="flex gap-2 sm:mx-4 mx-1 sm:mb-40 mt-6 overflow-hidden flex-col md:flex-row">

      {categoryData.map((item) => {
        return(
          <Link key={item.id} className="card h-[70vh] relative flex-1" to={`/products/${item.cat}`}>
            <div className="h-[150px] md:h-[100%] w-[100%]">
              <img className="w-[100%] h-[100%] object-cover" src={item.image} alt="" />
            </div>
            <div className="text-white flex flex-col items-center justify-center gap-4 m-ato absolute top-[50%] bottom-[50%] w-[100%]">
              <h1 className="text-2xl lg:text-4xl font-bold">{item.title}</h1>
              <button className="border-none bg-white text-[#808080] font-semibold p-2">SHOP NOW</button>
            </div>
        </Link>
        )
      })}
    </div>
  )
}

export default Category