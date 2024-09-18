import React from 'react'
import { Link } from 'react-router-dom'
import GradualSpacing from '../components/GradualSpecing'
import RetroGrid from '../components/RetroGrid'


export default function Start() {
  return (
    <div className="h-screen bg-slate-900">

      {/* Backdrop Filter Overlay (centered and partial) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-3/4 md:w-1/2 lg:w-1/2 h-1/3 bg-black/50 backdrop-filter backdrop-blur-md rounded-lg p-8 text-center flex flex-col justify-center items-center gap-10">

          {/* Content inside backdrop filter */}
          <GradualSpacing text="Welcome to RentifyDrive" className={"text-xl text-white font-bold w-[80%] tracking-tighter sm:text-2xl md:text-3xl"}/>

          {/* button */}
          <div class="relative inline-flex  group">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#1264d7] via-[#28aaf6] to-[#1264d7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <Link to='/login'
                class="relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black transition-all duration-200 bg-slate-300 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Get Started
            </Link>
          </div>
        </div>
      </div>
      <RetroGrid/>
    </div>
  )
}

