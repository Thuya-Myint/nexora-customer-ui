const EventCard = (props) => {

  const { title, data } = props
  return (
    <div className="cursor-pointer">
      <h1 className='text-xl mb-10'>{title}</h1>
      <div className='grid grid-cols-5 gap-6'>
        {
          data.map((item, index) => (
            <div key={index}>
              <p className='bg-black/5 p-2 rounded-t-lg'>{item.title}</p>
              <div className='w-full h-20 bg-primary'>
              </div>
              <p className='bg-primary/50 text-white rounded-b-lg p-2'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EventCard