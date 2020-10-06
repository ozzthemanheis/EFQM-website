import React from 'react';
import { Link } from 'react-router-dom';

function CardItem3(props) {
  return (
    <>
      <li className='cards__item3'>
        <Link className='cards__item__link3' to={props.path}>
          <figure className='cards__item__pic-wrap3' data-category={props.label}>
            <img
              className='cards__item__img3'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info3'>
            <h5 className='cards__item__text3'>{props.text}</h5>
          </div>
          <div class="dropdown">
            <span>{props.job}</span>
            <div class="dropdown-content">
              <p>{props.more}</p>
            </div>
          </div>

        </Link>
      </li>
    </>
  );
}

export default CardItem3;