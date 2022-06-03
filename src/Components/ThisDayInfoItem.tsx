import React, { FC } from 'react'
import  "../App.scss"

interface InfoItemProps{
  value:number,
  metric:string,
  InfoTitle:string
}

const ThisDayInfoItem:FC<InfoItemProps> = ({value,metric,InfoTitle}) => {
  return (<>
    <div className={"ThisDayInfoItem"}>
      {/*<div className={"ThisDayInfoItem__imgWrapper"}>
          <img src={props.imgSrc} alt="temp" />
      </div>*/}
        <p className={"ThisDayInfoItem__text"}>{/*20° - ощущается как 17°*/} {value} {metric}</p>{/*если value>1000 metric=см*/}
        <p className={"ThisDayInfoItem__title"}>{InfoTitle}</p>
    </div>
    </>
  )
}

export default ThisDayInfoItem