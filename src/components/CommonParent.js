import React, { createContext } from 'react'
import { useFetchNotionData } from '../../utils/useFetchNotionData'

export const CourseDataContext = createContext()

export function CommonParent({ children }) {
  const { data, error, isLoading } = useFetchNotionData()

  if (error) {
    console.error('Data fetch error:', error)
    return <p>Failed to load course data. Please try again later.</p>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <CourseDataContext.Provider value={data}>
      {children}
    </CourseDataContext.Provider>
  )
}
