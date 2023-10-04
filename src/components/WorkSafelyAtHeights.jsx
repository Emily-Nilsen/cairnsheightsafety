import Link from 'next/link'
import { Fragment, useContext } from 'react'
import { CourseDataContext } from './CommonParent'

export function WorkSafelyAtHeights() {
  const { workSafelyAtHeights } = useContext(CourseDataContext)

  // Sort by 'date' in ascending order
  const sortedCourses = [...workSafelyAtHeights].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateA - dateB
  })

  return (
    <div className="rounded-xl bg-white p-6 drop-shadow-md">
      <div className="">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Work Safely At Heights
        </h1>
        <p className="my-2 text-sm font-medium text-orange-600">RIIWHS204E</p>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full">
                <tbody>
                  {sortedCourses?.map((course) => {
                    const dateObj = new Date(course.date)
                    const day = dateObj.getDate()
                    const month = dateObj.toLocaleString('en-AU', {
                      month: 'long',
                    })
                    const year = dateObj.getFullYear()
                    const formattedDate = `${day} ${month}, ${year}`

                    return (
                      <tr key={course.id} className="border-t border-gray-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {course.date ? formattedDate : 'N/A'}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                          <Link href="/#enrol">
                            <a className="text-orange-600 hover:text-orange-900">
                              Enrol
                            </a>
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
