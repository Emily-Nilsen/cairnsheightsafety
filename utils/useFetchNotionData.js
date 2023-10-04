import { useState, useEffect } from 'react'

// Helper function to transform towerRescueDates
function transformTowerRescueData(item) {
  return {
    id: item.id,
    startDate: item.properties['Start Date']?.date?.start,
    endDate: item.properties['End Date']?.date?.start,
  }
}

// Helper function to transform workSafelyAtHeights
function transformWorkSafelyAtHeightsData(item) {
  return {
    id: item.id,
    date: item.properties.date?.date?.start,
  }
}

export const useFetchNotionData = () => {
  const [data, setData] = useState({
    workSafelyAtHeights: [],
    towerRescueDates: [],
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/fetchNotionData')
      const fetchedData = await res.json()
      if (res.ok) {
        const towerRescueDates = fetchedData.towerRescueDates.map(
          transformTowerRescueData
        )
        const workSafelyAtHeights = fetchedData.workSafelyAtHeights.map(
          transformWorkSafelyAtHeightsData
        )
        setData({ towerRescueDates, workSafelyAtHeights })
      } else {
        setError(fetchedData.error)
        console.error('Error fetching data:', fetchedData.error)
      }
    }

    fetchData()
  }, [])

  return { data, error }
}
