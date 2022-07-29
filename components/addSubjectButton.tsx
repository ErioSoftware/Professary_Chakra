import { useAuth } from '@/lib/auth'
import { classNames } from '@/utils'
import { BookmarkIcon } from '@heroicons/react/outline'
import { SkewLoader } from 'react-spinners'

export const AddSubjectButton = ({
  subjectID,
  color
}: {
  subjectID: string | null
  color: string
}) => {
  const auth = useAuth()

  const addSubject = async (subjectID: string | null) => {
    if (!auth?.moduleData?.subjects || !subjectID) {
      auth?.setModuleData({ ...auth.moduleData, subjects: [subjectID] })
    } else if (!auth?.moduleData?.subjects.includes(subjectID)) {
      auth?.setModuleData({
        ...auth.moduleData,
        subjects: auth?.moduleData?.subjects.concat([subjectID])
      })
    }
  }

  return (
    <>
      {auth?.moduleData && auth?.moduleAPI && subjectID ? (
        <>
          {!auth.moduleData.subjects.includes(subjectID) ? (
            <button
              onClick={() => addSubject(subjectID)}
              className={classNames(
                'ring-1 text-white dark:text-greyscale-ash w-full py-3 rounded-xl flex items-center justify-center',
                'ring-primary-default dark:ring-primary-darkMode bg-primary-default dark:bg-primary-darkMode'
              )}>
              <BookmarkIcon className="w-6 h-6" />
              <span className="text-sm ml-2 font-semibold">Add to My Subjects</span>
            </button>
          ) : (
            <button
              className={classNames(
                'ring-1 w-full py-3 rounded-xl flex items-center justify-center',
                'ring-primary-default dark:ring-primary-darkMode'
              )}>
              <span
                className={classNames(
                  'text-sm ml-2 font-semibold',
                  'text-primary-default dark:text-primary-darkMode'
                )}>
                Already In Your Subjects
              </span>
            </button>
          )}
        </>
      ) : (
        <button className="ring-1 ring-primary-default bg-primary-default text-white dark:ring-primary-darkMode dark:bg-primary-darkMode dark:text-greyscale-ash w-full py-3 rounded-xl flex items-center justify-center">
          <SkewLoader color="#ffffff" loading={true} size={15} />
        </button>
      )}
    </>
  )
}
