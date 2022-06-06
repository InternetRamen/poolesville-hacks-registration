import * as React from 'react'
import NextApp from 'next/app'
import '../styles/app.css'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import ForceTheme from '../components/force-theme'
import Flag from '../components/flag'
import NProgress from '../components/nprogress'
import Meta from '@hackclub/meta'
import Head from 'next/head'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta
          as={Head}
          name="Assemble" // site name
          title="Assemble" // page title
          description="" // page description
          image="https://apply.hackclub.com/card_1.png" // large summary card image URL
          color="#ec3750" // theme color
        />
        <Flag />
        <NProgress color={'#ec3750'} />
        <ForceTheme theme="light" />
        <div
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              height: '100vh',
              width: '100vw',
              background: 'rgba(0,0,10, 0.8)',
              overflowY: 'scroll'
            }}
          >
            <Component {...pageProps} />
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            duration={2000}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 'auto !important',
              width: '100vw !important',
              zIndex: -1
            }}
          >
            <source src="https://stream.mux.com/dTJ01wpc7pKN84IZXzP02LipW6t00tr01U00sQJX00wuGSriE" />
          </video>
        </div>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

          * {
            box-sizing: border-box;
          }
        `}
        </style>
      </ThemeProvider>
    )
  }
}