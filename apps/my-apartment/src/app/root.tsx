import React, { FC } from 'react'
import { Header } from 'common/header'
import { Footer } from 'common/footer'
import { BrowserRouter } from 'react-router-dom'

export const Root: FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
