import { StudentDetail } from '@/components/swr'
import React, { useState } from 'react'

export default function SWRPage() {
  const [detailList, setDetailList] = useState([1, 1, 1])

  function handleAddClick() {
    setDetailList((prevList) => [...prevList, 1])
  }
  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleAddClick}>Add detail</button>
      <ul>
        {detailList.map((item, index) => (
          <li key={index}>
            <StudentDetail studentId='lea2aa9l7x3a5v0' />
          </li>
        ))}
      </ul>
    </div>
  )
}
