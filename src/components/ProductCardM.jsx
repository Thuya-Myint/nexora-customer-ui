import { Link, useNavigate } from 'react-router-dom';

const ProductCardM = (props) => {

  const { header = "", data = [], link = "", prevLink = "/product" } = props;

  const navigate = useNavigate()

  return (
    <div className="mt-4 p-4 pb-10">
      <div className="flex justify-between items-center">
        <h1 className="border-l-4 border-primary pl-4 text-2xl">{header}</h1>
        <Link to={`/product?type=${link.type}`} className="underline">
          {link.name}{link.length > 0 ? " >>>" : ""}
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-6 mt-10">
        {
          data.map((item, index) => {
            const defaultSku = item.skus[0]
            const hasSeeMoreContent = item.description.length > 30
            const previewDescription = hasSeeMoreContent ? item.description.slice(0, 50) : item.description

            return <div key={index} className="mt-10 shadow-xl cursor-pointer shadow-black/20 rounded-t-xl rounded-b-xl"
              onClick={() => {
                navigate(
                  "/product-detail-m",
                  {
                    state: {
                      item,
                      prevLink
                    }
                  }
                )
              }}>
              <img src={item.images[0]} alt="" className="rounded-t-xl" />
              <div className="p-4">
                <div className="flex  justify-between border-b pb-2 border-slate-200">
                  <p>{item.name}</p>

                  {
                    defaultSku.price.sale ?
                      <div className='relative'>
                        <p className='absolute -top-3 right-0  text-xs line-through opacity-50'>{defaultSku.price.base}</p>
                        <p className=''>${defaultSku.price.sale}</p>
                      </div>
                      :
                      <div>
                        <p className=''>${defaultSku.price.base}</p>
                      </div>
                  }

                </div>
                <div>
                  <div className='opacity-70 text-md'>
                    {
                      hasSeeMoreContent ?
                        <div className='inline'>
                          {previewDescription}
                          <div className='flex justify-end'>
                            <p className='bg-primary/30  w-fit text-xs p-1 rounded-md'>see more</p>
                          </div>
                        </div>
                        :
                        <div>
                          {previewDescription}
                        </div>
                    }
                  </div>
                </div>

              </div>
            </div>
          })
        }
      </div>
    </div >
  )
}

export default ProductCardM