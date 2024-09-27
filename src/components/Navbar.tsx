import React from 'react'
import Link from 'next/link'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


const Header = () => {
  return (

    <div className="navbar px-10  text-dust">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href='/dashboard'>Dashboard</Link></li>

            <li><Link href='/quiz'>Quiz</Link></li>
            <li>
              <a>Earn</a>
              <ul className="p-2 text-white">
                <li><a>Payment</a></li>
                <li><a>Stream</a></li>
              </ul>
            </li>
            <li>
              <a>Vote</a>
              <ul className="p-2 text-white">
                <li><a>Payment</a></li>
                <li><a>Stream</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="text-dust font-bold text-xl"><Link href={"/"}>Streambudi</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/dashboard'>Dashboard</Link></li>
          <li><Link href='/quiz'>Quiz</Link></li>
          <li>
            <details>
              <summary>Earn</summary>
              <ul className="p-2 text-white">
                <li><a>Payment</a></li>
                <li><a>Stream</a></li>
              </ul>
            </details>
          </li>
          <li><a>Vote</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <WalletMultiButton />
      </div>
    </div>
  )
}

export default Header