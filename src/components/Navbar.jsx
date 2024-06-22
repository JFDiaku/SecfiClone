import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom/dist';
import secfi from "../assets/images/secfi.png"
import { useState } from 'react';
import { mobileStepperClasses, useMediaQuery } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { motion} from 'framer-motion';
import MobileNav from './MobileNav.jsx';

const Navbar = ({isMobileScreen, setMobileNav, mobileNav}) => {
  const [activedrop, setdrop] = useState('none');
  let lastScrollTop = 0;


 window.addEventListener("scroll", function() {
    
      let currentScroll = window.scrollY || document.documentElement.scrollTop;
      
      if (currentScroll > lastScrollTop && !mobileNav) {
          // Downscroll
          document.getElementById('navbar').style.top = "-10rem";
      }else {
          // Upscroll
          document.getElementById('navbar').style.top = "0";
      }

      
    if (currentScroll <= 180 && !mobileNav ) {
      // At the top of the page
      document.getElementById('navbar').style.top = "-10rem";
  }
  
      
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    
  }, false);

  document.body.style.overflow = mobileNav ? 'hidden' : 'auto'


  
  document.addEventListener('mouseleave',()=> setdrop('none'));
  return (
    <>
    <div className='bg-white fixed left-0 right-0 py-6 lg:py-4 px-4 lg:px-10 navbar  ' id='navbar'>
      
      <div className="container flex items-center justify-between ">
        <div className="logo-box mb-2">
          <svg viewBox="0 0 73.4 33" className='logo' fill={mobileNav ? "#ffffff" : "##2D2E31"} xmlns="http://www.w3.org/2000/svg" title="Secfi"><path d="M21.883 20.485c0-2.462.35-4.342 1.05-5.64.701-1.298 1.456-1.946 2.266-1.943.945 0 1.734.702 2.368 2.105.633 1.404.99 3.231 1.072 5.482l-6.756-.004Zm9.589-5.738c-1.485-1.551-3.293-2.326-5.423-2.325a8.657 8.657 0 0 0-3.277.656 9.922 9.922 0 0 0-2.97 1.887c-.904.82-1.64 1.905-2.206 3.256a11.617 11.617 0 0 0-.85 4.535c0 3.283.89 5.812 2.672 7.587 1.78 1.776 3.83 2.663 6.149 2.662a6.977 6.977 0 0 0 2.752-.528 6.87 6.87 0 0 0 2.308-1.563 11.849 11.849 0 0 0 2.993-4.86l-.08-.04c-1.783 1.69-3.578 2.536-5.388 2.536-1.591 0-3.015-.616-4.27-1.848-1.255-1.232-1.921-3.118-2-5.66h12.056c-.161-2.647-.986-4.746-2.474-6.295M9.023 19.803a88.873 88.873 0 0 1-2.348-.834 20 20 0 0 1-1.699-.755c-.647-.317-1.092-.654-1.335-1.012a2.11 2.11 0 0 1-.364-1.212 2.756 2.756 0 0 1 .278-1.247c.19-.389.468-.73.814-.996a4.023 4.023 0 0 1 2.63-.894c1.54 0 2.875.576 4.006 1.728 1.13 1.152 2.358 2.96 3.682 5.422h.081l-.33-6.515c-2.97-.768-5.262-1.152-6.878-1.152-2.078 0-3.858.524-5.341 1.57s-2.222 2.591-2.22 4.634c0 1.483.433 2.7 1.296 3.654.864.954 2.455 1.828 4.773 2.621.865.292 1.458.497 1.78.617.323.12.818.305 1.485.556.485.17.953.382 1.398.635.321.21.632.435.93.675.305.223.548.516.708.854.123.303.185.627.182.954 0 1.165-.371 2.02-1.112 2.563a4.435 4.435 0 0 1-2.691.81 5.525 5.525 0 0 1-2.59-.648 8.303 8.303 0 0 1-2.063-1.471 12.774 12.774 0 0 1-1.7-2.244c-.593-.953-1.019-1.675-1.275-2.165a40.985 40.985 0 0 1-.99-2.085H.09l.476 8.021c3.696.74 6.285 1.111 7.77 1.111 2.022 0 3.768-.516 5.238-1.548 1.47-1.032 2.204-2.622 2.204-4.767 0-1.801-.56-3.212-1.68-4.231-1.12-1.02-2.811-1.902-5.075-2.649ZM65.3 29.846a5.713 5.713 0 0 1-.221.919c-.243.715-.836 1.311-1.78 1.79v.08h10.035v-.084c-.944-.476-1.538-1.07-1.78-1.781a5.952 5.952 0 0 1-.224-.924 12.994 12.994 0 0 1-.141-2.057V12.774H59.674s-.058-3.888.082-6.191c.165-2.721 1.54-4.992 4.305-6.51v-.08c-2.267 0-5.057.247-6.99 1.547-1.738 1.167-2.76 3.094-2.97 5.129-.174 1.69-.185 4.404-.185 6.105H52.35v.555h1.566v14.46c0 1.27-.128 2.263-.385 2.979-.256.716-.843 1.31-1.76 1.782v.08h10.04v-.08c-.944-.476-1.538-1.07-1.78-1.782-.244-.712-.365-1.702-.365-2.972v-14.46 9.414-9.414c1.77 0 4.31-.297 5.255 1.551.495.963.514 2.106.514 3.162v9.747c.008.688-.04 1.376-.143 2.057M51.819 26.007c-1.78 1.696-3.573 2.543-5.38 2.543-1.592 0-3.016-.616-4.27-1.848-1.256-1.232-1.923-3.118-2.002-5.66v-.557c0-2.462.35-4.342 1.051-5.64.518-.959 1.23-1.754 2.269-1.932.232-.038.468-.047.703-.026 1.26.11 2.455.876 3.3 1.743 1.135 1.153 2.364 2.963 3.687 5.43h.08l-.33-6.936c-1.895.162-3.576-.292-5.394-.509-1.565-.188-3.023-.131-4.49.463a9.943 9.943 0 0 0-2.97 1.886c-.904.822-1.64 1.907-2.206 3.257a11.615 11.615 0 0 0-.85 4.535c0 3.283.891 5.812 2.672 7.588 1.78 1.775 3.83 2.662 6.15 2.66a6.976 6.976 0 0 0 2.75-.524 6.87 6.87 0 0 0 2.308-1.56 11.847 11.847 0 0 0 2.993-4.86l-.071-.053Z" fill={mobileNav ? "#ffffff" : "##2D2E31"}></path><path d="M67.723 8.891c2.233 0 4.043-1.733 4.043-3.871s-1.815-3.87-4.043-3.87c-2.227 0-4.042 1.733-4.042 3.87 0 2.136 1.815 3.871 4.042 3.871Z" ></path></svg>
        </div>
        

        {!isMobileScreen && <ul className="flex flex-row gap-8 ml-32">
      
            <li className='navlink'><Link className={activedrop === 'employees' ? 'droplink active-drop':'droplink'} onMouseOver={()=>setdrop('employees')} >For Employees</Link>
              {<div onMouseOver={()=>setdrop('employees')} onMouseEnter={()=>setdrop('employees')} onMouseLeave={()=>setdrop('none')} className="nav-dropdown" style={{display: activedrop === 'employees' ? 'flex' : activedrop === 'none' && 'none'}} >

                <div className="container flex gap-0">
                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">SECFI LIQUIDITY</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Liquidity Solutuions For Employees</Link>
                      <p className='text-xs text-backSecondary'>
                        Learn about our exercise and liquidity offerings for <br /> your options and shares. 
                      </p>
                    </li>

                    <li className='flex flex-col gap-3'>
                      <Link>Secondary Sale</Link>
                      <p className='text-xs text-backSecondary'>
                      Get cash by selling your options or shares through <br /> our network of buyers.
                      </p>
                  </li>


                    <li className='flex flex-col gap-3'>
                      <Link>Non recourse Financing</Link>
                      <p className='text-xs text-backSecondary' >
                      Get the cash you need to own your stock options <br /> or gain some liquidity. Repay when your company <br />exits.
                      </p>
                    </li>
                  </ul>

                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">SECFI WEALTH</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Financial Advice For Employees</Link>
                      <p className='text-xs text-backSecondary'>
                      Learn about our wealth management approach for <br /> those with equity.  
                      </p>
                    </li>

                    <li className='flex flex-col gap-3'>
                      <Link>Stock Option & Equity Advice</Link>
                      <p className='text-xs text-backSecondary'>
                      Get as-needed personalized stock option advice for <br /> your employee equity.   
                      </p>
                    </li>


                    <li className='flex flex-col gap-3'>
                      <Link>Wealth Management</Link>
                      <p className='text-xs text-backSecondary' >
                      Grow your wealth with holistic financial planning <br /> and investment management. 
                      </p>
                    </li>
                  </ul>
                </div>
              </div>}
            </li>



            <li  className='navlink'><Link className={activedrop === 'executives' ? 'droplink active-drop':'droplink'} onMouseOver={()=>setdrop('executives')}>For Executives</Link>
            {<div  onMouseOver={()=>setdrop('executives')} onMouseEnter={()=>setdrop('executives')} onMouseLeave={()=>setdrop('none')} className="nav-dropdown" style={{display: activedrop === 'executives' ? 'flex' : activedrop === 'none' && 'none'}} >

            <div className="container flex justify-between" >
              <ul className='droplist flex-col flex gap-6 '>

                <p className="font-medium text-xs text-backSecondary">SECFI LIQUIDITY</p>

                <li className='flex flex-col gap-3'>
                  <Link>Full Service Liquidity Solutions</Link>
                  <p className='text-xs text-backSecondary'>
                  Explore our liquidity options tailored for <br /> executives. Offering personalized strategies to <br /> help  optimize your financial outcomes for your <br /> equity. 
                  </p>
                </li>

                
              </ul>


              <ul className='droplist flex-col flex gap-6 '>

                <p className="font-medium text-xs text-backSecondary">SECFI WEALTH</p>

                <li className='flex flex-col gap-3'>
                  <Link>Full Service Liquidity Solutions</Link>
                  <p className='text-xs text-backSecondary'>
                  Discover our holistic wealth management services, <br /> designed specifically for executives to potentially <br /> maximize wealth and plan for the future. 
                  </p>
                </li>


              </ul>


                
              <ul className='droplist flex-col flex gap-6 '>

                <p className="font-medium text-xs text-backSecondary">EMPLOYEE BENEFIITS</p>

                <li className='flex flex-col gap-3'>
                  <Link>Financing For Your Teams</Link>
                  <p className='text-xs text-backSecondary'>
                  Learn about our equity solutions to support and <br/>
                    empower your team. 
                  </p>
                </li>


                <li className='flex flex-col gap-3'>
                  <Link>Equity Education For Your Teams</Link>
                  <p className='text-xs text-backSecondary'>
                  Learn about our services to educate your teams on <br /> equity, ensuring they are well-informed and can make <br /> the most of their equity compensation.
                  </p>
                </li>


              </ul>
              </div>

                </div>}
            </li>


            <li  className='navlink'><Link className={activedrop === 'investors' ? 'droplink active-drop':'droplink'} onMouseOver={()=>setdrop('investors')}>For Investors</Link>
            {<div  onMouseOver={()=>setdrop('investors')} onMouseEnter={()=>setdrop('investors')} onMouseLeave={()=>setdrop('none')} className="nav-dropdown" style={{display: activedrop === 'investors' ? 'flex' : activedrop === 'none' && 'none'}} >

                <div className="container flex gap-0">
                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">SECFI ASSET MANAGEMENT</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Secfi Asset Management Overview</Link>
                      <p className='text-xs text-backSecondary'>
                      Comprehensive overview of Secfi's asset management strategies and services.
                      </p>
                    </li>

                  </ul>

                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">OFFERINGS</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Diversified Funds</Link>
                      <p className='text-xs text-backSecondary'>
                      Invest in late-stage startups through Secfi's expertly <br /> managed diversified fund. 
                      </p>
                    </li>

                    <li className='flex flex-col gap-3'>
                      <Link>Tailored SMA Vehicles</Link>
                      <p className='text-xs text-backSecondary'>
                      Partner with Secfi for customized funds in late-stage <br /> private companies.
                      </p>
                    </li>


                    <li className='flex flex-col gap-3'>
                      <Link>Secfi Secondaries</Link>
                      <p className='text-xs text-backSecondary' >
                      Connect and invest in private equity of leading <br /> startups via Secfi.
                      </p>
                    </li>
                  </ul>
                </div>
                
              </div>}
            </li>


            <li  className='navlink'><Link className={activedrop === 'tools' ? 'droplink active-drop':'droplink'} onMouseOver={()=>setdrop('tools')}>Tools</Link>
            {<div  onMouseOver={()=>setdrop('tools')} onMouseEnter={()=>setdrop('tools')} onMouseLeave={()=>setdrop('none')} className="nav-dropdown" style={{display: activedrop === 'tools' ? 'flex' : activedrop === 'none' && 'none'}} >

            <div className="container flex gap-0">
                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">TRACK</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Portfolio</Link>
                      <p className='text-xs text-backSecondary'>
                      Track your assets, including the value of your startup equity, in a single place.
                      </p>
                    </li>

                  </ul>

                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">CALCULATE</p>

                    <ul className='flex calc-list '>

                      <li className='flex flex-col gap-3'>
                        <Link>AMT Calculator</Link>
                        <p className='text-xs text-backSecondary'>
                        Exercise incentive stock options without paying the alternative minimum tax.
                        </p>
                      </li>

                      <li className='flex flex-col gap-3'>
                        <Link>Equity Planner</Link>
                        <p className='text-xs text-backSecondary'>
                        Exercise now or at IPO? Sell on the secondary market or hold? Understand your options in less than 5 minutes.
                        </p>
                      </li>


                      <li className='flex flex-col gap-3'>
                        <Link>Exercise Timing Planner</Link>
                        <p className='text-xs text-backSecondary' >
                        Decide whether to exercise your stock options now or later.
                        </p>
                      </li>

                      <li className='flex flex-col gap-3'>
                        <Link>Stock Options Tax Calculator</Link>
                        <p className='text-xs text-backSecondary'>
                        Calculate the costs to exercise your stock options - including taxes.
                        </p>
                      </li>

                      <li className='flex flex-col gap-3'>
                        <Link>Stock Option Exit Calculator</Link>
                        <p className='text-xs text-backSecondary'>
                        See what your stock options could be worth.
                        </p>
                      </li>


                      <li className='flex flex-col gap-3'>
                        <Link>Equity Compensation Calculator</Link>
                        <p className='text-xs text-backSecondary' >
                        Confidently negotiate your equity compensation
                        </p>
                      </li>
                    </ul>

                  </ul>
                </div>
          
              </div>}
            </li>


            <li  className='navlink'><Link className={activedrop === 'resources' ? 'droplink active-drop':'droplink'} onMouseOver={()=>setdrop('resources')}>Resources</Link>
            {<div  onMouseOver={()=>setdrop('resources')} onMouseEnter={()=>setdrop('resources')} onMouseLeave={()=>setdrop('none')} className="nav-dropdown" style={{display: activedrop === 'resources' ? 'flex' : activedrop === 'none' && 'none'}} >

              
            <div className="container flex gap-0">
                  <ul className='droplist flex-col flex gap-6 pr-3 '>

                    <p className="font-medium text-xs text-backSecondary">RESOURCES</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Secfi Learn</Link>
                      <p className='text-xs text-backSecondary'>
                      Find answers, guides, explanatory videos, and more about your equity and finances.
                      </p>
                    </li>

                    <li className='flex flex-col gap-3'>
                      <Link>Company Case Studies</Link>
                      <p className='text-xs text-backSecondary'>
                      Curated content for employees of the best startups
                      </p>
                    </li>

                  </ul>

                  <ul className='droplist flex-col flex gap-6 '>

                    <p className="font-medium text-xs text-backSecondary">NEWSLETTER</p>

                    <li className='flex flex-col gap-3'>
                      <Link>Founders & Funders</Link>
                      <p className='text-xs text-backSecondary'>
                      Weekly newsletter on what's happening in <br /> startups, venture capital, public markets, and <br /> more
                      </p>
                    </li>

                  </ul>
                </div>
        
              </div>}
            </li>
          
        </ul>}

        <div className="flex gap-2 ml-auto text-center items-center ">
         {!isMobileScreen && 
         <>
          <Link className='bg-gray rounded-full p-3 px-8 font-normal hover:bg-liteblue hover:text-white transition-all'>Log in</Link>
          <Link className='bg-grey rounded-full text-white p-3 px-8  hover:bg-liteblue hover:text-white  transition-all'>Get started</Link>
        </>}

         
          <Link className='bg-grey text-white  hover:bg-liteblue hover:text-white  transition-all  '  style={{padding:'.8rem .9rem', borderRadius:'50%', zIndex:"99"}}>
            < SearchIcon sx={{fontSize:'1.3em'}}/>
          </Link>
          {isMobileScreen &&
          <Link className='bg-grey text-white  hover:bg-liteblue hover:text-white  transition-all  '   style={{padding:'.8rem .9rem', borderRadius:'50%', zIndex:"99", background:mobileNav && '#5C8B9E'}}>
          {mobileNav ? <Close sx={{fontSize:'1.3em'}}  onClick={()=>setMobileNav(!mobileNav)}  /> : <Menu sx={{fontSize:'1.3em'}} onClick={()=>setMobileNav(!mobileNav)} />}
          </Link> 
          }
        </div>

      </div>


      <MobileNav  isMobileScreen={isMobileScreen}  mobileNav={mobileNav} setMobileNav={setMobileNav}/>


    </div>

 
    
    </>
  )
}

export default Navbar