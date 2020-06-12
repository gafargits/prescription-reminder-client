import React, { Fragment, useContext } from 'react';
import GradientBar from '../components/common/GradientBar';
import bgImage from '../assets/images/bg-image.jpg'
import AvatarLogo from '../components/AvatarLogo';
import "./Home.module.css"
import GradientLink from '../components/common/GradientLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
  const authContext = useContext(AuthContext)
  return (
    <Fragment>
      <GradientBar />
      <div className="w-full top-0 bg-white px-10 py-1">
        <div className="flex justify-between">
          <AvatarLogo className="w-32 h-16" />
          <div className="flex items-center">
            <Link
              to="/signup"
              className="text-blue-700 mr-6">
              Sign Up
            </Link>
            <GradientLink to="/login" text="Log In" />
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-900">
        <div className="opacity-10">
          <img
            src={bgImage}
            className="object-fill w-full"
            alt="Background"
          />
        </div>
        <div className="absolute left-0 top-0 mt-32 lg:mt-48 px-12 nato-sans">
          <div className="w-full lg:w-2/3">
            <h1 className="text-gray-200 text-2xl lg:text-6xl sm:text-5xl font-bold leading-tight">
              Drug Prescription Reminder
            </h1>
            <h2 className="text-gray-300 text-md sm:text-2xl sm:mt-10 mt-4">
              Taking prescription is hard enough. Having to remember taking it shouldn't be harder
            </h2>
            <div className="mt-4 sm:mt-10 w-48">
              <GradientLink
                text="Get Started"
                size="lg"
                to={authContext.isAuthenticated() ? "/dashboard" : "/signup"}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}