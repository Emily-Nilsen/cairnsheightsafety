// /pages/api/fetchNotionData.js

import notion from '../../../utils/notion'

export default async (req, res) => {
  try {
    const databaseIdWorkSafely =
      process.env.NEXT_PUBLIC_NOTION_WORK_SAFELY_DB_ID
    const databaseIdTowerRescue =
      process.env.NEXT_PUBLIC_NOTION_TOWER_RESCUE_DB_ID

    const responseWorkSafely = await notion.databases.query({
      database_id: databaseIdWorkSafely,
    })

    const responseTowerRescue = await notion.databases.query({
      database_id: databaseIdTowerRescue,
    })

    res.status(200).json({
      workSafelyAtHeights: responseWorkSafely.results,
      towerRescueDates: responseTowerRescue.results,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
