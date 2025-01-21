import React from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (<>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white mt-20'>
    <div className='items-center justify-center text-center'>
    <h1 className='mt-6 text-2xl font-semibold md:text-4xl'>We're delighted to have you
    <span className='text-pink-500'> here! :)</span></h1>
    <p className='mt-6 text-lg md:text-xl'>
    Dive into a world of knowledge with our expertly designed book-related courses! Whether you're a 
    budding writer, an avid reader, or someone eager to deepen their literary understanding, we have 
    something for everyone. Enhance your storytelling skills, learn the art of crafting memorable 
    characters, or master the techniques of analyzing literature with ease. Our courses are crafted 
    to spark creativity, foster critical thinking, and enrich your reading experience. 
    Join us today and take the first step toward a journey filled with stories, inspiration, and 
    personal growth!
    </p>
    <Link to='/'><button className='bg-pink-500 text-white hover:bg-black rounded-md px-3 py-2
     hover:text-white duration-300 mt-6'>Back</button>
    </Link>
    </div>
    <div className='mt-4 grid grid-cols-1 md:grid-cols-4'>{
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
      }
    </div>
  </div>
  </>
  )
}

export default Course