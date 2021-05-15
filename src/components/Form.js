import React from 'react'
import styled, { css } from 'styled-components/macro'

const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' }
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) =>
    type === 'submit' &&
    css`
      display: block;
      width: 100%;
      margin: 1rem auto;
      border-radius: 0.25rem;
    `}
`

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
    placeholder: props.placeholder || 'please enter value',
  }
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`

const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <BasicInput />
        <BasicInput />
        <BasicInput type='email' placeholder='enter email' />

        <Button type='submit'>submit here</Button>
      </form>
    </div>
  )
}

export default Form
