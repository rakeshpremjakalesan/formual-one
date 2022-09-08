import styled from 'styled-components'

export const StyledHeader = styled.div`
  background: #e10600;
  color: #ffffff;
  padding: 10px;
  height: 75px;
`

export const StyledTitle = styled.div<{ variant?: string }>`
  font-size: ${(props) => (props.variant === 'logo' ? '48px' : '14px')};
  font-weight: ${(props) => (props.variant === 'logo' ? 'bold' : '')};
  margin-top: ${(props) => (props.variant === 'logoTitle' ? '-19px' : '')};
`
export const StyledHeaderContainer = styled.div<{
  variant?: string
  highlight?: string
}>`
  padding-right: 20px;
  display: inline;
  float: left;
  font-family: TitilliumWebSemiBold;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: ${(props) => (props.variant === 'info' ? 'right' : '')};
  text-align: ${(props) => (props.variant === 'info' ? 'right' : '')};
  cursor: ${(props) => (props.highlight === 'link' ? 'pointer' : '')};
`
