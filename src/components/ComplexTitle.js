import React from 'react'
import styled from 'styled-components'

function ComplexTitle({title}) {
  return (
    <Wrapper>
        <h1>{title}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1{
    font-size: 2rem;
    color: red;
  }
`

export default ComplexTitle