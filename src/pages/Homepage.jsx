import SearchIcon from '@mui/icons-material/Search';
import { Link, useActionData } from 'react-router-dom/dist';
import secfi from "../assets/images/secfi.png";
import startup from "../assets/images/startup.svg"
import startup1 from "../assets/images/startup1.svg"
import startup2 from "../assets/images/startup2.svg"
import startup3 from "../assets/images/startup3.svg"
import startup4 from "../assets/images/startup4.svg"
import startup5 from "../assets/images/startup5.svg"
import startup6 from "../assets/images/startup6.svg"
import startup7 from "../assets/images/startup7.svg"
import startup8 from "../assets/images/startup8.svg"
import startup9 from "../assets/images/startup9.svg"
import startup10 from "../assets/images/startup10.svg"
import startup11 from "../assets/images/startup11.svg"
import startup12 from "../assets/images/startup12.svg"
import startups from "../assets/images/startups.webp"
import employees from "../assets/images/employees.webp"
import Employee from "../assets/images/employee.png"
import equity from "../assets/images/equity.webp"
import HeroDetails from "../assets/images/hero-details.webp"
import HeroDetails2 from "../assets/images/hero-details2.webp"
import HeroStone from "../assets/images/hero-stone.webp"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';
import secfivid from "../assets/images/secfivid.mp4"
import CheckIcon from '@mui/icons-material/Check';
import CallMadeIcon from '@mui/icons-material/CallMade';
import calc1 from "../assets/images/calc1.webp"
import calc2 from "../assets/images/calc2.webp"
import calc3 from "../assets/images/calc3.webp"
import calc4 from "../assets/images/calc4.webp"
import calc5 from "../assets/images/calc5.webp"
import calc6 from "../assets/images/calc6.webp"
import mag from "../assets/images/mag.svg"
import mag2 from "../assets/images/mag2.svg"
import mag3 from "../assets/images/mag3.svg"
import mag4 from "../assets/images/mag4.svg"
import mag5 from "../assets/images/mag5.svg"
import mag6 from "../assets/images/mag6.svg"
import article from "../assets/images/article.webp"
import article2 from "../assets/images/article2.webp"
import article3 from "../assets/images/article3.webp"
import article4 from "../assets/images/article4.webp"
import { easeInOut, motion, transform, useMotionValue } from "framer-motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from '@mui/icons-material/East';
import { Close, Menu } from '@mui/icons-material';
import MobileNav from '../components/MobileNav';


const Homepage = ({isMobileScreen, mobileNav, setMobileNav}) => {
  const cards = [
    {img: calc1,
    title:'Stock Option Tax Calculator',
    text: "The Stock Option Tax Calculator shows the costs to exercise your stock options, including taxes, based on your company's current valuation.",
    button:'Calculate your taxes',
  },
  {img: calc2,
    title:'AMT Calculator',
    text: "The AMT Calculator shows how many incentive stock options (ISOs) you can exercise in a calendar year without paying alternative minimum tax (AMT). ",
    button:'Calculate your AMT',
  },
  {img: calc3,
    text:"Track your assets, including the value of your startup equity, in a single place.",
    title:'Portfolio Tracker',
    button:'Track your equity value',
  },
  {img: calc4,
    text:"Our self-guided Equity Planner helps you quickly get a personalized big-picture of your equity to make your best possible decision.",
    title:'Equity Planner',
    button:'Make an Equity Plan',
  },
  {img: calc5,
    text:"Compare the difference in costs and future gains between exercising your stock options now versus waiting for your company to go public.",
    title:'Exercise Timing Planner',
    button:'See the difference',
  },
  {img: calc6,
    text:"See how much you might potentially bring home if your company IPOs or exits.",
    title:'Stock options Exit Calculator',
    button:'Calculate your exit',
  },

];


const testimonials =[
{
  text:`I feel like a small fish in a big pond with wealth advisors. Secfi is exactly what I've been looking for. You get me. You know equity. And you make my life easy.`,
  person: 'Emma',
  company:'Secfi Wealth client',
},
{text:`What I found most comforting was that this would allow all our employees, not just the executives or senior ones, an opportunity to have the option to make a major life decision.`,
person: 'Dan Sinner',
company:'Chief Customer Officer at Happy Money',
},
{text:`I realized I’ve been sorely needing your advisory services. So excited to work with you.`,
  person: 'Senior Engineer',
  company:'Gusto',
},
{text:'Secfi was one of the only places I could find that could give me accurate calculations on AMT.',
  person:'Amanda',
  company:'Early HR employee at pre-IPO startup'
},
{
  text:'Secfi felt like the safest option. There is upside and almost no downside, and I might as well play it safe.',
  person:'Victor',
  company:'Engineering leader at a pre-IPO startup'
},
]



const articles = [
{
  title:"My company is going public or getting aquired",
  img: article,
  color:"#879EAD",
},
{
  title: "Managing wealth with stock options",
  img:article2,
  color:"#1a5866",
},
{
  title:"Exercising stock options",
  img:article3,
  color:"#776C62",
},
{
  title:"Starting a new job with stock options",
  img:article4,
  color:"#99958E",
},
]

  const mags = [mag, mag2, mag3, mag4, mag5, mag6];

  const startupIcons =[startup, startup1, startup3, startup4, startup5, startup6, startup7, startup8, startup9, startup10, startup11, startup12]

  const [expanded, setExpanded] = useState(false);
  const [cardexpanded, setcardExpand] = useState([]);
  const [width, setWidth] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [currentIndex, setIndex]  = useState(0);
  const carousel = useRef();
  const carousel2 = useRef();
  const [activedrop, setdrop] = useState('none');

 


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:'none' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display:'none'}}
        onClick={onClick}
      />
    );
  }


  

  const handleCard = (card) => {
    let opencard = cardexpanded.find(item => item === card);
    if(opencard){
      const updateCards = cardexpanded.filter(item => item !== card)
      setcardExpand(updateCards);
    }
    else{
      setcardExpand([...cardexpanded, card]);
    }
    console.log(cardexpanded)
  }

  const findCard = (card) => {
    let opencard = cardexpanded.find(item => item === card);
    if (opencard){
      return true
    }
    else{
      return false
    }
  }


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

useEffect(()=>{
  const typewriter = document.getElementById('typewriter');

  function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases= ['Secondaries', 'Equity Planning', 'Equity Financing', 'Wealth Management'];
  

  let sleepTime = 100;
  let curPhrase = 0;

  const writeLoop = async() =>{
    while(true){
      let curWord = phrases[curPhrase]
      for(let i = 0; i < curWord.length; i++){
        typewriter.innerHTML = curWord.substring(0, i+1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for(let i = curWord.length;i > 0; i--){
        typewriter.innerHTML = curWord.substring(0, i-1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if(curPhrase === phrases.length - 1){
        curPhrase = 0
      }else{
        curPhrase++
      }

      await sleep(1000)
    }
  };


  writeLoop();
  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  setWidth2(carousel2.current.scrollWidth - carousel2.current.offsetWidth)
},[width])


 
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('video').play();
    


 })




 var settings = {
  infinite: true,
  dots: false,
  speed: 800,
  autoplay:true,
  autoplaySpeed: 6000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToScroll: 1,
  pauseOnHover: false,
 }









  return (
    <div className="home-page ">

      {/* top section */}
      <div className="container top-sec-nav  flex items-center justify-between  ">
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

         
          <Link className='bg-grey text-white  hover:bg-liteblue hover:text-white  transition-all  '  style={{padding:'.8rem .9rem', borderRadius:'50%', zIndex:"999"}}>
            < SearchIcon sx={{fontSize:'1.3em'}}/>
          </Link>
          {isMobileScreen &&
          <Link className='bg-grey text-white  hover:bg-liteblue hover:text-white  transition-all  '   style={{padding:'.8rem .9rem', borderRadius:'50%', zIndex:"999", background:mobileNav && '#5C8B9E'}}>
          {mobileNav ? <Close sx={{fontSize:'1.3em'}}  onClick={()=>setMobileNav(!mobileNav)}  /> : <Menu sx={{fontSize:'1.3em'}} onClick={()=>setMobileNav(!mobileNav)} />}
          </Link> 
          }
        </div>
            
 
      </div>

     
    {/* topsection */}


    <MobileNav  isMobileScreen={isMobileScreen}  mobileNav={mobileNav} setMobileNav={setMobileNav}/>
   




  <section className="hero flex container">


    <div className="hero-left flex flex-col gap-3  "> 

      
      <h1 className='typewriter text-7xl pt-10 '><span id='typewriter'></span><span id='cursor'>|</span> <br /> for startup employees</h1>
      <p className='text-lg text-wrap' style={{fontFamily:'var(--font2)'}}>Get equity planning, stock option financing, secondaries and wealth management
          from advisors that know how stock options and equity can help grow your wealth.
      </p>
      <Link className='rounded-full text-white px-5 py-3 w-fit mt-1' style={{backgroundColor:'darkgray'}}>Get started</Link>
   

    </div>

   
    <div className="hero-right ">
      <img src={Employee}  className='employee-image'  alt="" />
      <img src={HeroDetails}  className='hero-details absolute '  alt="" />
      <img src={HeroDetails2}  className='hero-details2 absolute'  alt="" />
      <img src={HeroStone}  className='hero-stone'  alt="" />
      
    </div>

   </section>



   {!isMobileScreen && <><div className="flex startups py-7 container overflow-hidden relative">
      <p className='startup-text '>We work with employees <br /> from the best startups</p>

      <motion.div className="startup-carousel flex">
        {[...startupIcons,...startupIcons].map((icon,  index) =>(
          <img key={index} src={icon} alt="" className="startupIcon" />
        ))}
      </motion.div>

    </div>
    </>}

    {isMobileScreen &&
    <div className="overflow-hidden lg:px-10 px-3  pt-3">
       <p className='pb-8 text-litegray text-xs'>We work with employees from the best <br /> startups</p>

       <motion.div className="mobile-startup flex  justify-start px-0">
        {[...startupIcons,...startupIcons].map((icon,  index) =>(
          <img key={index} src={icon} alt="" className="startupIcon" />
        ))}
      </motion.div>
    </div>
    }



   {/* equity planning */}

   <section className="equity flex container lg:px-10 px-5 py-40">
    <div className="equity-left">
      <p className='font-bold text-litegray'>THE LEADING EQUITY PLANNING PLATFORM</p>

      <h1 className='pt-4' style={{fontSize:'4.5em', lineHeight:'1em', fontFamily:'var(--font1)', color:'#292a2d',letterSpacing: "-.04em" }}>You’ve got startup  equity. Now what?</h1>

      <div className="accordion pt-24">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{boxShadow:'none', 
      transition:'all .5s ease-in-out',
      color: expanded === 'panel1' ? 'black' : 'gray'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
          <p className='accordion-title'>Keep track of value and taxes</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-text flex flex-col gap-4">
            <p>Track your portfolio and its value while finding the best ways to reduce your tax bill with our calculators.</p>

            <Link className='font-bold underline'>Explore our Calculators</Link>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{boxShadow:'none', 
      transition:'all .5s ease-in-out',
      color: expanded === 'panel2' ? 'black' : 'gray'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        
        <p className='accordion-title'>Make a plan for your equity</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-text flex flex-col gap-4">
            <p>Exercise now or later? Sell on the secondary market or through a tender offer? Compare costs, risks, and potential gains.</p>

            <Link className='font-bold underline'>Get started. I'ts free.</Link>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{boxShadow:'none',
          transition:'all .5s ease-in-out',
          color: expanded === 'panel3' ? 'black' : 'gray'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
    
        <p className='accordion-title'>Sell your private shares</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-text flex flex-col gap-4">
            <p>Get access to our curated network of secondary markets, buyers and other participants.</p>

            <Link className='font-bold underline'>Explore secondaries</Link>
          </div>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{boxShadow:'none',
          transition:'all .5s ease-in-out',
          color: expanded === 'panel4' ? 'black' : 'gray'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >

        <p className='accordion-title'>Get funds for your exercise cost</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-text flex flex-col gap-4">
            <p>Think your company's got potential and want a piece of the pie? See how you can exercise without paying out of pocket.</p>

            <Link className='font-bold underline'>Explore funding options.</Link>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{boxShadow:'none',
          transition:'all .5s ease-in-out',
          color: expanded === 'panel4' ? 'black' : 'gray'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel5bh-header"
        >

        <p className='accordion-title'>Align your equity with your financial goals</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-text flex flex-col gap-4">
            <p>Build a plan for home ownership, retirement, your kid’s education, passion projects, or whatever’s important to you. </p>

            <Link className='font-bold underline'>See how we can help.</Link>
          </div>
        </AccordionDetails>
      </Accordion>
      </div>



    </div>
    <div className="equity-right">
      <video className='secfivid' id='video' autoPlay loop muted>
        <source src={secfivid}  type='video/mp4'/>
      </video>
    </div>
   </section>
   {/* equity planning */}


   <section className='pricing '>
    <div className="lg:px-10 px-5 pt-36 container">
      <p className='font-bold text-litegray'>WHAT WE OFFER</p>

        <h1 className='pt-4 tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-16 font-normal z-4' style={{ fontFamily:'var(--font1)' }}>
          Everything you need to get<br /> your equity and finances right
        </h1>



        <div className="cards pt-20  flex justify-center gap-x-6">
          <div className={findCard('card1') ? 'card rounded-lg flex flex-col p-8 pb-16 relative card-expanded card1' :"card rounded-lg flex flex-col p-8 pb-16 relative"}>
            <ExpandMoreIcon className='card-expand' onClick={()=>handleCard('card1')}/>
            <p className='text-litegray'>Transaction fee</p>
            <h2 className='text-white text-3xl font-normal'>Secondary Sale</h2>

            <p className='text-litegray font-lg mt-3' >Get access to our curated network of secondary markets, buyers and other participants.</p>


            <Link className="rounded-full price-link">
              Submit your interest
            </Link>

            <Link className="underline font-bold text-white text-center mt-3">Learn more</Link>
            

            <div className="flex flex-col gap-2 mt-6 text-litegray">
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>White-glove service</p>
              </div>

              
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Compare multiple offers</p>
              </div>

              
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Leave the complexities to us</p>
              </div>
            </div>
          
          </div>

          <div className={findCard('card2') ? 'card rounded-lg flex flex-col p-8 pb-16 relative card-expanded card2' :"card rounded-lg flex flex-col p-8 pb-16 relative"}>
          <ExpandMoreIcon className='card-expand' onClick={()=>handleCard('card2')}/>
            <p className='text-litegray'>Cash advance fee</p>
            <h2 className='text-white text-3xl font-normal'>Finance</h2>

            <p className='text-litegray font-lg mt-3' >Own your shares² without draining your savings or get liquidity from your shares without selling.</p>


            <Link className="rounded-full price-link">
              request a quote
            </Link>

            <Link className="underline font-bold text-white text-center mt-3">Learn more</Link>
            

            <div className="flex flex-col gap-2 mt-6 text-litegray">
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Covers exercise and potential taxes</p>
              </div>

              
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Repay if/when there is an exit</p>
              </div>

              
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>No prepayment penalties</p>
              </div>
            </div>
          
          </div>

          <div className={findCard('card3') ? 'card rounded-lg flex flex-col p-8 pb-16 relative card-expanded card3' :"card rounded-lg flex flex-col p-8 pb-16 relative "}>
          <ExpandMoreIcon className='card-expand' onClick={()=>handleCard('card3')}/>
            <p className='text-litegray'>Fee only</p>
            <h2 className='text-white text-3xl font-normal'>Wealth Management</h2>

            <p className='text-litegray font-lg mt-3' >
              Financial planning and investment management¹ that align your startup stock with your financial goals.
            </p>


            <Link className="rounded-full price-link">
              Submit your interest
            </Link>

            <Link className="underline font-bold text-white text-center mt-3">Learn more</Link>
            

            <div className="flex flex-col gap-2 mt-6 text-litegray">
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Equity built into your financial plan</p>
              </div>

              
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Access to curated investments</p>
              </div>

              
              <div className="flex items-center gap-2">
                <CheckIcon  sx={{fontSize:'1.1em'}} />
                <p>Get personalized advice from humans not robots</p>
              </div>
            </div>
          
          </div>
        </div>


        <p className='text-center text-white mt-12' style={{fontFamily:'var(--font2)', fontSize:'18px'}}>Not sure where to start? <br /> Reach out, we dont bite.</p>

        <div className="flex text-center items-center underline text-white mt-12 justify-center">
        <Link className="font-bold" style={{fontFamily:'var(--font2)'}}>Get in touch</Link>
        <CallMadeIcon sx={{fontSize:'.9em', marginLeft:'.2rem', marginTop:'.4rem'}}/>
        </div>


        <p className=' text-litegray mt-12'  style={{fontFamily:'var(--font2)', fontSize:'.6em'}}>¹ Offered by Secfi Advisory Limited, an SEC-registered investment adviser. See our Form CRS for more info. <br />
        ² Offered by Secfi Securities, LLC, an SEC-registered broker-dealer and Member FINRA / SIPC. See our Form CRS for more info. </p>

    </div>


   </section>


    <section className='tool container pt-36 lg:px-10 px-5 pb-36'>
    <p className='font-bold text-litegray'>FREE TOOLS AND CALCULATORS</p>

<h1 className='pt-4  tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkgray leading-16 font-normal ' style={{fontFamily:'var(--font1)'}}>A holistic suite of equity tools for startup employees</h1>
      
      <motion.div ref={carousel}  className="tollcard-box mt-16 overflow-hidden cursor-grab pb-5" >
        <motion.div  drag={"x"} dragConstraints={{right:0, left:-width}}
   
        id='inner-carousel'  animate={{x:`-${29 * currentIndex}%`}} transition={{all: .5, ease:easeInOut}} className='inner-carousel flex gap-10 cursor-grab '>
          {cards.map((card, index)=>(
            <motion.div key={index} className='tool-card  pt-10 px-5 pb-12  flex flex-col justify-between'>
     
                <h1 className=' text-white text-center' style={{fontFamily:'var(--font1)', fontSize: '2.2em', fontWeight:400, lineHeight:'1.2em', letterSpacing:'-.04em'}}>{card.title}</h1>
                

         
                <div className="img-container">
                  <img src={card.img} alt="" />
                </div>


                <p className="tool-descrip absolute">{card.text}</p>
               
    
                <div className="tool-btn absolute rounded-full">{card.button}</div>
             
            </motion.div>
          ))}    
        </motion.div>  
      </motion.div>
      
      {!isMobileScreen && <div className="carousel-btns flex w-fit m-auto gap-3 mt-10">   
        <button  id='carousel-btn'  className='carousel-btn' style={{backgroundColor: currentIndex === 0 && "#24282C"}} onClick={()=>setIndex(0)}  ></button>
        <button  id='carousel-btn' className='carousel-btn' style={{backgroundColor: currentIndex === 2.5 && "#24282C"}}  onClick={()=>setIndex(2.5)}  ></button> 
      </div>}


   
   
     
    </section>

    <section className=" lg:px-10 px-5 bg-backPrimary lg:pt-36 pt-20 pb-28 overflow-hidden">
      
    <div className="whysecfi container">
      <div className="whysecfi-top flex justify-between w-full pb-36" style={{borderBottom:'solid 1px gray'}}>
        <div className="whysecfi-left" >
            <p className='font-bold text-litegray'>WHY SECFI</p>

            <h1 className='pt-4 tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkgray leading-16 font-normal' style={{fontFamily:'var(--font1)'}}>Built by startup <br /> employees</h1>

        </div>


        <div className=" flex-col flex gap-6 whysecfi-right" style={{fontFamily:'var(--font2)'}}>
          <div className="flex flex-col gap-4" style={{letterSpacing:'-.04rem'}}>
            <p className="text-darkgray" style={{fontSize:'1.7em' , fontWeight:450}}>We put equity first</p>
            <p className="text-darkgray text-lg">Our team has extensive expertise in equity, tax implications, and how it fits into your financial picture.</p>
          </div>

          <div className="flex flex-col gap-4" style={{letterSpacing:'-.04rem'}}>
            <p className="text-darkgray" style={{fontSize:'1.7em' , fontWeight:450}}>You don’t need millions</p>
            <p className="text-darkgray text-lg">We help you make important equity decisions that can set you up for financial success. </p>
          </div>


          <div className="flex flex-col gap-4" style={{letterSpacing:'-.04rem'}}>
            <p className="text-darkgray" style={{fontSize:'1.7em' , fontWeight:450}}>Holistic wealth management</p>
            <p className="text-darkgray text-lg">We take a comprehensive view of all your finances, including stock options, to help you save time and money, and grow your wealth.</p>
          </div>

        </div>
       
      </div>

      <div className="whysecfi-bottom flex justify-between py-10">
        <p className='md:block text-litegray font-semibold text-xl hidden '>As seen in</p>
        
        <div className="mag-box flex gap-16">
        {mags.map((mag, index)=>(
          <img src={mag} key={index} alt="" className="mag-icon" />
        ))}
        </div>
      </div>
    </div> 
        

    </section>



    <section className="bg-backSecondary carousel2 ">
        <div className="container slider-container lg:px-10 sm:px-5 px-0 pt-20 cursor-grab " >
          <Slider  {...settings}>
            <div className="slide1 carousel-slide equity-slide" >
              <div className="equity-slide-left slide-left ">
                <img className='equity-slide-icon' src={equity} alt="" />
              </div>


              <div className="equity-slide-right carousel-slide-right">
                <p>We know equity</p>

                <h1 className='mt-10'>$48B</h1>

                <p>In equity value on the platform</p>


                <ul className='custom-dots mt-10' >
                  <li className="">
                    <button   className="custom-dot" id='custom-dot' ></button>
                  </li>
                  <li>
                    <button className='custom-dot-dark'></button>
                  </li>
                  <li>
                    <button className='custom-dot-dark'></button>
                  </li>
                </ul>

                

              </div>

             
              

            </div>

            <div className="slide2 carousel-slide employee-slide">
              <div className="employee-slide-left slide-left">
                <img className='employee-slide-icon'  src={employees} alt="" />
              </div>


              <div className="employee-slide-right carousel-slide-right">
                <p>We know startup employees</p>

                <h1 className='mt-10'>30'000</h1>

                <p>Startup employees trust Secfi with equity planning.</p>


                <ul className='custom-dots mt-10' >
                  <li className="">
                    <button className="custom-dot-dark"></button>
                  </li>
                  <li>
                    <button  className='custom-dot' id='custom-dot' ></button>
                  </li>
                  <li>
                    <button className='custom-dot-dark'></button>
                  </li>
                </ul>

              </div>

            </div>




            <div className=" flex startup-slide carousel-slide ">
              <div className="startup-slide-left slide-left ">
                <img className='startup-slide-icon' src={startups} alt="" />
              </div>


              <div className="startup-slide-right carousel-slide-right">
                <p>We know startup investing</p>

                <h1 className='mt-10'>100's</h1>

                <p>Private companies analyzed and valued</p>

                
                <ul className='custom-dots mt-10' >
                  <li className="">
                    <button className="custom-dot-dark"></button>
                  </li>
                  <li>
                    <button className='custom-dot-dark'></button>
                  </li>
                  <li>
                    <button  className='custom-dot' id='custom-dot' ></button>
                  </li>
                </ul>

              </div>


              
            </div>


          </Slider>
        </div>
        
    </section>


   <section className="bg-dark testimonials p-3 pt-28 pb-36 relative " style={{fontFamily:'var(--font2)'}} >
   <p className='font-bold text-litegray' style={{color:'#292a2d', textAlign:'center', fontWeight:600}}>TESTIMONIALS</p>

    <h1 className='pt-4 tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center leading-16 font-normal' style={{fontFamily:'var(--font1)'}}>What our clients say</h1>

    <div className="testimonial-marquee flex gap-6 overflow-hidden w-full mt-20  ">
        {[...testimonials, ...testimonials,].map((item,  index) =>(
          <div key={index} className="testimonial-card  ">
            <p  >"{item.text}"</p>
            <p className='mt-8 font-normal text-litegray'>{item.person}</p>
            <p className='font-bold'>{item.company}</p>
          </div>
        ))}
    </div>

    <p className='text-center text-litegray mt-40 text-xs lg:text-sm'>Testimonials are specific to an individual Client’s experience and may not be representative of all Clients. Unless otherwise <br /> indicated,
       Clients offering a Testimonial do not receive compensation and their statement does not present a conflict of <br /> interest.</p>


    <div className="marquee-shadow-left absolute" ></div>
    <div className="marquee-shadow-right absolute" ></div>
   </section>


   <section className='articles container lg:px-10 xs:px-5 px-5 pt-36 '>
      <div className="mt-5 text-center text-xl articles-title ">
        <h1>Know your options</h1>
      </div>
      <div className="article-cards flex pt-10 pb-20  gap-4 justify-center  ">
        {articles.map((item, index)=>(
          <div key={index} className="article-card p-8 cursor-pointer" style={{backgroundColor:item.color}}>
            <p className=' text-white text-left' style={{fontFamily:'var(--font1)', fontWeight:'380', fontSize:'1.95em', lineHeight:'1', letterSpacing:'-.04rem'}}>{item.title}</p>
            <img src={item.img} alt="" />
            <Link className='flex article-link rounded-full items-center overflow-hidden'>
              <p className='article-text'>Open collection</p>
              <EastIcon sx={{fontSize:'1.5em'}}/>
            </Link>
            
          </div>
        ))}
      </div>

      <motion.div ref={carousel2}  className="mt-16 overflow-hidden cursor-grab pb-5 mobile-cards" >
        <motion.div  drag={"x"} dragConstraints={{right:0, left:-width2 }} 
   
        id='inner-carousel'   className='flex gap-5 cursor-grab '>
{articles.map((item, index)=>(
          <div key={index} className="article-card mobile-card p-8 cursor-pointer" style={{backgroundColor:item.color}}>
            <p className=' text-white text-left' style={{fontFamily:'var(--font1)', fontWeight:'380', fontSize:'1.95em', lineHeight:'1', letterSpacing:'-.04rem'}}>{item.title}</p>
            <img src={item.img} alt="" />
            <Link className='flex article-link rounded-full items-center overflow-hidden'>
              <p className='article-text'>Open collection</p>
              <EastIcon sx={{fontSize:'1.5em'}}/>
            </Link>
            
          </div>
        ))}
        </motion.div>  
      </motion.div>

   </section>



   

   


   

    </div>
   
  )
}

export default Homepage