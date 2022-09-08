interface DriverProps {
  driverCode: any
}

const Driver = ({ driverCode }: DriverProps): JSX.Element => {
  return (
    <>
      {driverCode?.season !== '' && (
        <>
          <div>{driverCode?.driver}</div>
          <div>{driverCode?.nationality}</div>
          <div>
            {driverCode?.wins} Wins & {driverCode?.points} Points
          </div>
        </>
      )}
    </>
  )
}

export default Driver
