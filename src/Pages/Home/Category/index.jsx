import React, { useEffect, useState } from 'react'
import CategoryItems from './CategoryItems'
import Loading from '../../../Components/Loading'
import image from "../../../assets/Media/Pages/Home/Category/S4_image_casualLight.webp"
export default function Category() {
    const [posts , setPosts] = useState()
    useEffect(()=>{
        (async()=>{
            const data = await fetch('http://localhost:3000/myket')
            const res = await data.json()
            setPosts(res.categories)
        })()
    },[])
  return (
    <div className='my-Container'>
      <h2 className='text-center text-2xl font-bold py-[48px]'>دسته بندی ها</h2>
      {posts ? <div className="gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{posts?.map( (e,index) => <CategoryItems img={image} index={index} key={index} header={e.headerAlt}  />)}</div> : <div><Loading /></div>}
      
    </div>
  )
}
