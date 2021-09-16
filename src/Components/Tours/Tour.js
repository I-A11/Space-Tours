import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className='tour-container'>
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p className='tour-desc'>
            {readMore ? info : `${info.substring(0, 200)}`}
            <button className='button' onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less " : "Read More"}
            </button>
          </p>

          <button className='btn' onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </section>
  );
};

export default Tour;
