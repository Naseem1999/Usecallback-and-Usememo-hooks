import React, { useEffect } from 'react'
const Navbar = ({color}) => {
    //run on every render
    useEffect(()=>{
        alert("Hey i will run on every Render child")
     })
     //run on first render
     useEffect(()=>{
        alert("this is first render")
     },[])
     //run on color change
    useEffect(()=>{
        alert("I am running because ciolor was changed")
    },[color])
    useEffect(()=>{
        alert("this is the first render of App.jsx")
        return ()=>{
            alert("component was unmounted")
        }
     },[])
  return (
    <div>
      I am a Navbar of {color} color hehe...
    </div>
  )
}

export default Navbar