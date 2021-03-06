import Tour from "./Tour";

const Tours = ({ tours, removeTour, fetchTours }) => {
  if (tours.length < 2) {
    return (
      <section className='tours-section'>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
        </div>
        <div
          className='tours'
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "35px",
            alignItems: "center",
            maxWidth: "550px",
            margin: "0 auto",
          }}
        >
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    );
  }
  return (
    <section className='tours-section'>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div
        className='tours'
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gridGap: "20px",
          margin: "0 5rem 2rem",
        }}
      >
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
