import React from 'react'
import MainRenders from './MainRenders'
import { selfDefensedata } from '../selfdefenseData/selfdefenseData'
function SelfDefense() {
  return (
    <div>
        <MainRenders
        title={selfDefensedata.title}
        subtitle={selfDefensedata.subtitle}
        images={selfDefensedata.images}
        alts={selfDefensedata.alts}
        source={selfDefensedata.source}
        intro={selfDefensedata.intro}
        time={selfDefensedata.time}
        states={selfDefensedata.states}
        tags={selfDefensedata.tags}
        smallimage={selfDefensedata.smallimage}
        firstheader={selfDefensedata.firstheader}
        secondheader={selfDefensedata.secondheader}
        content={selfDefensedata.content}
        fullname={selfDefensedata.fullname}
        email={selfDefensedata.email}
        routes={selfDefensedata.routes}
        />
    </div>
  )
}

export default SelfDefense
