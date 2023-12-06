import React from 'react'
import MainRenders from './MainRender';
import { Yogadata } from '../yogadata/yogadata';
function Yoga() {
  return (
    <div>
        <MainRenders
        title={Yogadata.title}
        subtitle={Yogadata.subtitle}
        images={Yogadata.images}
        alts={Yogadata.alts}
        source={Yogadata.source}
        intro={Yogadata.intro}
        time={Yogadata.time}
        states={Yogadata.states}
        tags={Yogadata.tags}
        smallimage={Yogadata.smallimage}
        firstheader={Yogadata.firstheader}
        secondheader={Yogadata.secondheader}
        content={Yogadata.content}
        fullname={Yogadata.fullname}
        email={Yogadata.email}
        routes={Yogadata.routes}
        />
    </div>
  )
}

export default Yoga;
