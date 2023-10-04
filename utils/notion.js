const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY })

export default notion
