import { currentEvents, upcomingEvents } from '../constants/event'
import EventCard from '../components/EventCard'
const Event = () => {
  return (
    <div className='p-10 flex flex-col gap-15'>
      <EventCard
        title="Current Event"
        data={currentEvents}
      />
      <EventCard
        title="Upcoming Event"
        data={upcomingEvents}
      />

    </div>
  )
}

export default Event