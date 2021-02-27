import React from 'react';
import PropTypes from 'prop-types';

const List = ({ people }) => {
  return (
    <>
      {people.map(({ name, age, image, id }) => {
        return (
          <article key={id} className='person'>
            <img src={image} alt='profile pic'></img>
            <div>
              <h4> {name}</h4>
              <p> {age}</p>
            </div>
            <button className='btn-delete'>delete</button>
          </article>
        );
      })}
    </>
  );
};

List.propTypes = {};

export default List;
