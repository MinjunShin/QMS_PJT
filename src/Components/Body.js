import styled from 'styled-components'
import MainMenu from './MainMenu'
import DescribePage from './DescribePage'

export default function Body () {

  const Body = styled.div`
    display: flex;
  `
  return (
    <Body>
      <MainMenu />
      <DescribePage />
    </Body>
  )
}