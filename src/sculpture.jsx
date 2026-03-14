import { sculptureList } from './data.js';
import { useState } from 'react';

export default function Gallery() {
 const [index, setIndex] = useState(0);
 const [showMore, setShowMore] = useState(false);

 const hasNext = index < sculptureList.length - 1;
 const hasPrev = index > 0;

  function  handleNext() {
    if (hasNext) {
  setIndex(index + 1);
    }
   
  }
  function handlePrev() {
    if (hasPrev) {
        setIndex(index - 1);
    }
  }
   function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNext}
                disabled={!hasNext}
      >
        Next
      </button>
       <button onClick={handlePrev}
        disabled={!hasPrev}
       >
        Previous
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
       <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} detaila
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
       
    </>
  );
}
