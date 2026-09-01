import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeProductCard = (props) => {

  const { header, data, link } = props;

  return (
    <div className="mt-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="border-l-4 border-primary pl-4 text-2xl">{header}</h1>
        <Link className="underline">
          {link.name}{" >>>"}
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {
          data.map((item, index) => (
            <div key={index} className="mt-10 shadow-xl cursor-pointer shadow-black/20 rounded-t-xl rounded-b-xl">
              <img src={item.photoUrl} alt="" className="rounded-t-xl" />
              <div className="p-4">
                <div className="flex justify-between border-b pb-2 border-slate-200">
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                </div>
                <div>
                  <div className="flex  gap-2 pt-2">
                    {
                      item.size.map((item, index) => (
                        <p className="text-sm bg-slate-100 p-1 rounded-lg" key={index}>
                          {item}
                        </p>
                      ))
                    }
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-2 ">
                      {
                        item.color.map((item, index) => (
                          <p
                            className="w-4 h-4 rounded-full shadow-lg shadow-black/50 cursor-pointer"
                            key={index}
                            style={{
                              backgroundColor: item
                            }}
                          >

                          </p>
                        ))
                      }
                    </div>
                    <div className="text-xl cursor-pointer">
                      <FaRegHeart />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeProductCard