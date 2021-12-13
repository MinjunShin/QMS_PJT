import styled from 'styled-components'

export default function MainMenu() {

  const MainMenu = styled.div`
    border: 2px solid gray;
    flex: 1 0 0;
    height: 100vh;
    background-color:#2055A4;
    min-width: 150px;
  `

  const MainBtnContainer = styled.div`   
      background-color:#2055A4;
      display: flex;
      flex-direction: column;
      > .mainBtn {
        display: flex;
        align-items: center;
        border: 2px solid white;
        color: #FAF9F8;
        height: 10vh;
      }
  ` 

  return (
    <MainMenu>
      <MainBtnContainer>
        <div className="write_quote mainBtn">견적서 작성</div>
        <div className="find_quote mainBtn">견적서 조회</div>
        <div className="calc_price mainBtn">예상단가 산출</div>
        <div className="calc_price mainBtn">설정</div>
      </MainBtnContainer>
    </MainMenu>
  )
}