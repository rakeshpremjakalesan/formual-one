import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useWinnerData } from '../../hooks/useWinnerData'
import { setDriverInfo } from '../../redux/actions'
import { COLUMNS } from '../UI/table/columns/winnerColumns'
import Spinner from '../UI/spinner/spinner'

const DisplayTable = React.lazy(() => import('../UI/table/Table'))

export const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [winnerData, setWinnerData] = useState([])
  const onSuccess = (data: any) => {
    setWinnerData(data.data.MRData.StandingsTable.StandingsLists)
  }
  const onError = (error: any) => {
    console.log(error)
  }
  useEffect(() => {
    dispatch(
      setDriverInfo({
        season: '',
        code: '',
        driver: '',
        nationality: '',
        car: '',
        points: '',
        wins: '',
      })
    )
  }, [])

  const { isError, error } = useWinnerData(onSuccess, onError)

  if (isError) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return <h2>{error?.message}</h2>
  }

  const rowSelection = (row: any) => {
    //Selecting Season
    dispatch(
      setDriverInfo({
        season: row.original.season,
        code: row.original.DriverStandings[0].Driver.code,
        driver:
          row.original.DriverStandings[0].Driver.givenName +
          ' ' +
          row.original.DriverStandings[0].Driver.familyName,
        nationality: row.original.DriverStandings[0].Driver.nationality,
        car: row.original.DriverStandings[0].Constructors[0].name,
        points: row.original.DriverStandings[0].points,
        wins: row.original.DriverStandings[0].wins,
      })
    )
    navigate(`/list/${row.values.season}`)
  }

  return (
    <Suspense
      fallback={
        <div>
          <Spinner isLoading={true} />
        </div>
      }
    >
      {winnerData.length > 0 ? (
        <>
          <DisplayTable
            tableData={winnerData}
            rowSelection={rowSelection}
            COLUMNS={COLUMNS}
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
