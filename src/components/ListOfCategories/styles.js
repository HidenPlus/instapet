import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
    ${fadeIn()}
    display: flex;
    overflow: auto;
    width: 100%;
    list-style: none;
    &::-webkit-scrollbar {
    display: none;
    }
    ${p => p.fixed && css`
    background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, .3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
