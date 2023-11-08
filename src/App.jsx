import { useState } from 'react'
import data from './data/data'

function App() {
const [seacrh, setSeacrh] = useState('')


  return (
    <div className='App'>
      <p className='text-center text-3xl mt-5'>Contact</p>
      <div className='flex justify-center mt-10'>
        <input onChange={(e) => setSeacrh(e.target.value)} type="text" placeholder='Cari Data Anda...' className='w-[60%] py-3 px-5 border-2 border-black'/>
      </div>
      <div className='grid justify-items-center mt-10'>
      <table className='table-auto w-[60%] border-2 border-black'>
  <thead>
    <tr className='border-2 border-black font-semibold'>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    {data.filter((item) => {
      return seacrh.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(seacrh), item.last_name.toLowerCase().includes(seacrh), item.email.toLowerCase().includes(seacrh), item.phone.toLowerCase().includes(seacrh)
    }).map((item) => (
    <tr key={item.id} className='border-2 border-black'>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  )
}

export default App
