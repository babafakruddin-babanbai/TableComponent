import React, { useState } from 'react'
import MockData from '../MOCK_DATA.json'
import './Sort.css'
const SortTable = () => {
    const [datas,setdata]=useState(MockData)
    const [order,setOrder] =useState("ASC")
    const sorting =(col)=>
    {
      if(order === "ASC")
      {
        const sorted=[...datas].sort((a,b) =>
        a[col].toLowerCase() > b[col].toLowerCase ?1 :-1
        )
        setdata(sorted)
        setOrder("DSC")

      }
      if(order === "DSC")
      {
        const sorted=[...datas].sort((a,b) =>
        a[col].toLowerCase() < b[col].toLowerCase ?1 :-1
        )
        setdata(sorted)
        setOrder("ASC")
        
      }

    }
    const handleSelect=(e)=>
    {
       
      setOrder(e.target.value);
    
      
    } 
    //
  return (
    <div className='container'>
      <table className='table table-bordered'>
   
    <thead>
        
            <th onClick={()=>sorting("first_name")} scope="col" > <select onChange={handleSelect} >
  <option value="ASC">ASC</option>
  <option value="DSC">DSC</option>
</select>First Name</th>

            <th scope="col">Last Name</th>
             <th scope="col">Email</th>
             <th scope="col">Gender</th>
             <th scope="col">Status</th>
    </thead>
    <tbody>
        {datas.map((d)=>
        {
           return <tr key={d.id}>
            <th scope="row">{d.first_name}</th>
            <td scope="row">{d.last_name}</td>
            <td scope="row">{d.email}</td>
            <td scope="row">{d.gender}</td>
            <td  scope="row" style={{
        backgroundColor: d.status ? 'red' : 'green',
      }}>{d.status }</td>
        </tr>
        })}     
    </tbody>
</table>
    </div>
  )
}

export default SortTable