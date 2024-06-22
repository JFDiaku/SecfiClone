import React from 'react'
import { AnimatePresence, motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileNav = ({isMobileScreen, setMobileNav, mobileNav}) => {
  return (
    <AnimatePresence>
   
    {(isMobileScreen && mobileNav) && 

      <motion.div
      initial={{ translateY:"100%"}}
      animate={{ translateY:"0" }}
      exit={{ translateY:"100%"}}
      transition={{
        duration:.5,
        easings:['.16,1.08,.38,.98', '.77,0,.175,1']
      }}
      
      className='bg-cyan bottom-0 flex gap-10 flex-col overflow-y-scroll fixed  h-full left-0 right-0 top-0  z-0 pt-36 px-5 pb-28' >


        <ul className='flex flex-col gap-3'>
          <p className='font-bold text-sm text-litegray'>FOR EMPLOYEES</p>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Liquidity Solutions For Employees</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Secondary Sales</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Non Recourse Financing</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Financial Advive For Employees</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Stock Options & Equity Advice</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Wealth Management</Link>
          </li>
        </ul>


        <ul className='flex flex-col gap-3'>
          <p className='font-bold text-sm text-litegray'>FOR EXECUTIVES</p>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Full-Service Liquidity Solutions</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Full-Service Wealth Management</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Finacing for Your Teams</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Equity Educatio For Your Teams</Link>
          </li>

        </ul>


        <ul className='flex flex-col gap-3'>
          <p className='font-bold text-sm text-litegray'>FOR INVESTORS</p>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Secfi Asset Management & Overview</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Diversified Funds</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Tailored SMA Vehicles</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Secfi Secondaries</Link>
          </li>
        </ul>


        <ul className='flex flex-col gap-3'>
          <p className='font-bold text-sm text-litegray'>Tools</p>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Portfolio</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >AMT Calculator</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Equity Planner</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Exercise Timing Planner</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Stock Options Tax Calculator</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Stock Options Tax Calculator</Link>
          </li>
          <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
            <Link >Equity Compensation Calculator</Link>
          </li>
        </ul>


        <div className="mt-5 flex gap-4">
          <Link className='bg-grey rounded-full text-white p-3 px-8  hover:bg-liteblue hover:text-white  transition-all'>Get started</Link>
          <Link className='bg-gray rounded-full p-3 px-8 font-normal hover:bg-liteblue hover:text-white transition-all'>Log in</Link>         
        </div>


        <div className="pt-10" style={{borderTop:'#AFCADB .01px solid'}}>

          <ul className='flex flex-col gap-3'>
            <p className='font-bold text-sm text-litegray'>RESOURCES</p>
            <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
              <Link >Secfi Learn</Link>
            </li>
            <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
              <Link >Company Case Studies</Link>
            </li>
            <li className='text-white text-md font-medium' style={{letterSpacing:'-.04em'}}>
              <Link >Founders & Funders</Link>
            </li>

          </ul>
        </div>
      


      </motion.div>
     }
     

    </AnimatePresence>
  )
}

export default MobileNav