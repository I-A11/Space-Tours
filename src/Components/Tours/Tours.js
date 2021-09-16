import Tour from "./Tour";

const Tours = ({ tours, removeTour, fetchTours }) => {
  return (
    <section className='tours-section'>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
