import React from 'react'
import { info } from './data'

const pages = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center ">
      <div className="flex flex-col gap-6">
<h2 className="text-white text-[30px] font-bold">Shorts</h2>
<div className="flex flex-row gap-12">
  {info.map((inf) => <div className="bg-[#333333] flex flex-col gap-[1rem] px-[2rem] py-[0.5rem] rounded-lg">
<h4 className="text-gray-300 text-[16px] font-semibold">{inf.header}</h4>
<h5 className="text-white text-[28px] font-bold">{inf.number}</h5>
    </div>)}
</div>
<img src="/images/video.png" className="w-5xl" />
      </div>
      </div>
  )
}

export default pages
