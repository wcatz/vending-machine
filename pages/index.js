import Head from 'next/head'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import Check from "../components/Check"
import Avalailable from "../components/Available"


export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div
      className="w-full container mx-auto px-4">
      <div className="h-full">
        <div className="w-full container mx-auto mt-10">
          <div className="w-full flex items-center justify-between">
            <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              Vending<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Machine</span>
            </a>

            <div className="flex w-1/2 justify-end content-center">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white hover:text-gray-100 font-bold py-1 px-2 rounded focus:ring"
                onClick={() => {
                  setTheme(theme === 'light' ? 'dark' : 'light')
                }}
              >
                🦭
              </button>
            </div>
          </div>
        </div>
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Powered By Seals
              </span>
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Next.js 🦭 template
            </p>
            <Check />
          </div>
          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <Avalailable />
          </div>
          <div className="mx-auto md:pt-16">
            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
              Tokens
            </p>
            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
