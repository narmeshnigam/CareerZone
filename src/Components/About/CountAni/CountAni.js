import React, {useEffect, useState} from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const CountAni = ({targetValue}) => {
    
  return (
    <CountUp end={targetValue} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div className="content__subheading" style={{ textAlign: "center" }} ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
  )
}

export default CountAni
