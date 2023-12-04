import React from 'react'
import MainRenders from './MainRenders'
import { Photodata } from '../photoData/Photodata'
function Photos() {
  return (
    <div>
        <MainRenders
        title={Photodata.title}
        subtitle={Photodata.subtitle}
        images={Photodata.images}
        alts={Photodata.alts}
        source={Photodata.source}
        intro={Photodata.intro}
        time={Photodata.time}
        states={Photodata.states}
        tags={Photodata.tags}
        smallimage={Photodata.smallimage}
        firstheader={Photodata.firstheader}
        secondheader={Photodata.secondheader}
        content={Photodata.content}
        fullname={Photodata.fullname}
        email={Photodata.email}
        routes={Photodata.routes}
        />
    </div>
  )
}

export default Photos
