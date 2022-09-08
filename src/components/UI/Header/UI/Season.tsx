import { StyledTitle } from '../Header.styles'

interface SeasonProps {
  driverCode?: any
}

const Season = ({ driverCode }: SeasonProps): JSX.Element => {
  return (
    <>
      {driverCode?.season === '' ? (
        <StyledTitle variant="logo">
          <span>Champions 2005 - 2021</span>
        </StyledTitle>
      ) : (
        <StyledTitle variant="logo">Season - {driverCode?.season}</StyledTitle>
      )}
    </>
  )
}

export default Season
