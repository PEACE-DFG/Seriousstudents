import React from 'react'
import Index from '../Component/Index'

function Home() {
    // const user={
    //     name:"George Peace",
    //     age:'12 years',
    //     phone:'084597526338472'
    // }
  return (
    <div>
        {/* <Index name={user.name} age={user.age}/> */}
        {/* <Index {...user}/> */}
        <Index/>
    </div>
  )
}

export default Home