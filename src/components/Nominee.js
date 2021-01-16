import React, { Fragment, useContext } from 'react';
import AppContext from '../context/appContext';

export const Nominee = (props) => {
  const appContext = useContext(AppContext);
  const { nominees, removeNominee } = appContext;
  const lastNomineeIndex = nominees.length - 1;

  const { movie, index } = props;
  return (
    <Fragment>
      <div className='nominee'>
        <p>
          {movie.Title} - ({movie.Year})
        </p>
        <button
          className='btn remove-nominee-btn'
          onClick={() => removeNominee(movie)}
        >
          <i className='fas fa-times remove-icon' />
          Remove
        </button>
      </div>
      {index < lastNomineeIndex && <hr className='my-20' />}
    </Fragment>
  );
};
