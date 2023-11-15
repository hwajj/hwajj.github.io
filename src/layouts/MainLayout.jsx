import React from 'react'
import styled from 'styled-components'

// 스타일을 정의합니다.
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const MainContent = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Menu = styled.div``

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header>배운 것 기록~~~~ </Header>
      <MainContent>{children}</MainContent>
    </Wrapper>
  )
}

export default MainLayout
