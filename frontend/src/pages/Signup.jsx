import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className=' border shadow p-6 w-80 bg-white '>
        <h2 className='text-2xl font-bold mb-4'>Signup</h2>
        <form action="submit">
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="name">Name</label>
                <input className='w-full px-3 py-2 border' type="text" placeholder='Enter Name' required />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="email">Email</label>
                <input className='w-full px-3 py-2 border' type="email" placeholder='Email Name' required />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="password">Password</label>
                <input className='w-full px-3 py-2 border' type="password" placeholder='****' required />
                
            
            </div>
            <div className='mb-4'>
            <button className='w-full bg-teal-600 text-white py-2 ' type='submit'>Signup</button>
            <p className='text-center my-2'>Already have account? <a href="login">Login</a></p>
            </div>
            
        </form>
        </div>
      
    </div>
  )
}

export default Signup
