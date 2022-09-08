import React, { Suspense, useState } from 'react'
import { useSeasonData } from '../../hooks/useSeasonData'
import { COLUMNS } from '../UI/table/columns/seasonColumns'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../UI/spinner/spinner'

const DisplayTable = React.lazy(() => import('../UI/table/Table'))
export const ListPage = () => {
  const driverCode = useSelector((state: any) => state.driverInfo)
  const [seasonData, setSeasonData] = useState([])
  const onSuccess = (data: any) => {
    setSeasonData(data.data.MRData.RaceTable.Races)
  }
  const onError = (error: any) => {
    console.log(error)
  }

  const { season } = useParams()
  const { isError, error } = useSeasonData(season, onSuccess, onError)

  if (isError) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return <h2>{error?.message}</h2>
  }

  const rowSelection = () => {
    //Here Enable row click and can show more circuit details
  }

  return (
    <Suspense
      fallback={
        <div>
          <Spinner isLoading={true} />
        </div>
      }
    >
      {seasonData.length > 0 ? (
        <>
          <DisplayTable
            tableData={seasonData}
            rowSelection={rowSelection}
            COLUMNS={COLUMNS}
            code={driverCode.code}
          />
          <Spinner isLoading={false} />
        </>
      ) : (
        <div>
          <Spinner isLoading={true} />
        </div>
      )}
    </Suspense>
  )
}
