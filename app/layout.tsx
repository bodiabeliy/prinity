"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { useRef } from 'react'
import { AnyAction, Store } from 'redux'
import { store } from '@/providers/store'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<Store<unknown, AnyAction>|null>(null)
  if (!storeRef.current) {
    storeRef.current = store()
  }
  return (
    <html lang="en">
      <Provider store={storeRef.current} >
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
