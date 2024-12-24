import React from 'react'
import Homeslide from './homeslide'
import Jewellery from './jewellery'
import Homecollection from './collection'
import Trending from './trending'
import Client from './client'
import Update from './update'


export default function Home() {
  return (
    <div>
       <Homeslide/>
       <Jewellery/>
       <Homecollection/>
       <Trending/>
       <Client/>
       <Update/>
    </div>
  )
}
