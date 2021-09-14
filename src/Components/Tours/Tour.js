const Tour = ({ id, name, info, image, price }) => {
  return (
    <section className='tour-container'>
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
        </footer>
      </article>
    </section>
  );
};

export default Tour;
