import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { socialLinks, shop, customerCare, saleEvent } from '../constants/footer'
import { AiOutlineAppstore } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
import logo from '../assets/logo/logo.png'

const Footer = () => {

  return (
    <div className="bg-footer text-white p-6 flex justify-center gap-20">


      <div>
        <div className="flex items-center">
          <img src={logo} alt="" className="w-30" />
          <h1 className="text-2xl">NEXORA</h1>
        </div>

        <div className="my-6">
          <div >Your go-to destination for quality </div>
          <div>products at the best prices.</div>
        </div>

        <div className="flex items-center gap-2 my-2">
          <div className="bg-primary/25 p-2 rounded-xl">
            <FaPhoneAlt />
          </div>
          <p>+81 9020 1111</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-primary/25 p-2 rounded-xl">
            <IoMdMail />
          </div>
          <p>nexora@shop.com</p>
        </div>

        <div className="flex items-center text-xl gap-4 mt-8">
          {
            socialLinks.map((item, index) => (
              <div key={index} className="border border-white/40 p-2 rounded-xl">
                {item.logo}
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8">
        <div className="text-xl">Shop</div>
        <div className="w-8 h-1 bg-primary rounded-full mb-2"></div>
        {
          shop.map((item, index) => (
            <div key={index}>
              {item.title}
            </div>
          ))
        }
      </div>

      <div className="flex flex-col gap-2 mt-8 border-x border-slate-50/8 px-20">
        <div className="text-xl">Customer Care</div>
        <div className="w-8 h-1 bg-primary rounded-full mb-2 "></div>
        {
          customerCare.map((item, index) => (
            <div key={index} className="">
              {item.title}
            </div>
          ))
        }
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <div className="text-xl">Current Sale Events</div>
        <div className="w-8 h-1 bg-primary rounded-full mb-2"></div>
        {
          saleEvent.map((item, index) => (
            <div key={index} className={`${index === saleEvent.length - 1 ? "" : "border-b border-slate-50/8 "} pb-4`}>
              <p className="text-primary text-xl">
                {item.title}
              </p>
              <p>
                {item.description}
              </p>
            </div>
          ))
        }
        <div className="text-xl">Quick shop</div>
        <div className="w-8 h-1 bg-primary rounded-full mb-2"></div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border-2 border-primary p-2 rounded-lg">
            <div>
              <AiOutlineAppstore className="text-xl" />
            </div>
            Browse all
          </button>
          <button className="flex items-center gap-2 border-2 border-primary  bg-primary p-2 rounded-lg">
            <div>
              <FaRegStar className="text-xl" />
            </div>
            Popular items
          </button>
        </div>
      </div>



    </div>
  )
}

export default Footer