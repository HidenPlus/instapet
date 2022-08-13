import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCats } from './components/ListOfPhotoCats'
import { Logo } from './logo'

export default function App () {
  return (<><GlobalStyle /><Logo /><ListOfCategories /><ListOfPhotoCats /></>)
}
