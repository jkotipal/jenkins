import React from 'react'
import Navba from '../components/Navba'
import Announcement from '../components/Announcement'
import Sliders from '../components/Sliders'
import Categorie from '../components/Categorie'

export const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navba />
      <Sliders />
      <Categorie />
      
      
    </div>
  )
}
