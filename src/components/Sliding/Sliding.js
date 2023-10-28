import React, { useEffect, useState } from 'react';
import Sliding1 from './slidingpages/Sliding1';
import Sliding2 from './slidingpages/Sliding2';
import Sliding3 from './slidingpages/Sliding3';
import Sliding4 from './slidingpages/Sliding4';

function Sliding() {
  const slidingComponents = [Sliding1, Sliding2, Sliding3, Sliding4];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((currentSlideIndex + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(interval); 
    };
  }, [currentSlideIndex]);

  const CurrentSlide = slidingComponents[currentSlideIndex];
  const goToPreviousSlide = () => {
    setCurrentSlideIndex((currentSlideIndex - 1 + 4) % 4);
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % 4);
  };

  return (
    <div style={{ height: 'fit-content','display':'flex','background':'black' }}>
      <div className='prevbutton'style={{'width':'5vw'}}>
        <button style={{'background':'black','height':'100%','width':'100%','border':'none','color':'white','font-size':'3rem'}}onClick={goToPreviousSlide}>{"<"}</button>
      </div>
      <Sliding1 />
      <div className='nextbutton' style={{'width':'5vw'}}>
        <button style={{'background':'black','height':'100%','width':'100%','border':'none','color':'white','font-size':'3rem'}} onClick={goToNextSlide}>{">"}</button>
      </div>
    </div>
  );
}

export default Sliding;
