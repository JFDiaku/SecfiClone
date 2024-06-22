import { LinkedIn } from '@mui/icons-material'
import React from 'react'
import MobileFooter from './MobileFooter'
import { Link } from 'react-router-dom'


const Footer = ({isMobileScreen}) => {
  return (
    <>
    {isMobileScreen ? <MobileFooter/> : 
      
      <section className='container px-10 pt-28 pb-24'>
     
     <div className='flex  gap-16'>

        <ul className='solutions footer-list flex-col flex gap-3'>
          <p className="font-medium text-backSecondary">SOLUTIONS</p>
          <li><Link>Exercising Finance</Link></li>
          <li><Link>Liquidity Finance</Link></li>
          <li><Link>secondary Sale</Link></li>
          <li><Link>Wealth Management </Link></li>
          <li><Link>Stock Options & Equity Advice</Link></li>
          <li><Link>Investment Management</Link></li>
          <li><Link>Secfi for Startuops</Link></li>
          <li><Link>Secfi Capital</Link></li>
          <li><Link>Secfi Financing Explained for Executives</Link></li>
        </ul>

        <ul className='footer-list flex-col flex gap-3'>
           <p className="font-medium text-backSecondary">TOOLS</p>
          <li><Link>Euity Planner</Link></li>
          <li><Link>AMT Calculator</Link></li>
          <li><Link>Stock Option Tax Calculator</Link></li>
          <li><Link>Exercise Timing Planner </Link></li>
          <li><Link>Stock Options Exit Calculator</Link></li>
        </ul>




        <ul className='footer-list flex-col flex gap-3'>
           <p className="font-medium text-backSecondary">LEARN</p>
          <li><Link>Secfi Learn</Link></li>
          <li><Link>Founders & Funder </Link></li>
          <li><Link>FAQ</Link></li>
        </ul>
        
        <ul className='footer-list flex-col flex gap-3'>
           <p className="font-medium text-backSecondary">ABOUT US</p>
          <li><Link>Our Story</Link></li>
          <li><Link>Careers</Link></li>
          <li><Link>News and Press </Link></li>
          <li><Link>Contact Us</Link></li>
          <li><Link>Legal</Link></li>
        </ul>


        <ul className='footer-list footer-icons flex-col flex gap-3 ml-auto items-end text-backSecondary text-sm'>
           <li className='flex gap-3 '>
            <Link>
            <svg className='footer-icon'  xmlns="http://www.w3.org/2000/svg" title="Twitter"><path d="M14 1.67a5.758 5.758 0 0 1-1.65.45c.6-.358 1.05-.922 1.265-1.587a5.833 5.833 0 0 1-1.826.694 2.876 2.876 0 0 0-4.894 2.62A8.167 8.167 0 0 1 .975.847a2.876 2.876 0 0 0 .886 3.833 2.794 2.794 0 0 1-1.278-.356 2.876 2.876 0 0 0 2.281 2.852 2.835 2.835 0 0 1-1.295.047 2.87 2.87 0 0 0 2.684 
            1.995A5.78 5.78 0 0 1 0 10.386a8.12 8.12 0 0 0 4.404 1.289 8.122 8.122 0 0 0 8.167-8.54A5.89 5.89 0 0 0 14 1.67Z" ></path></svg>
            </Link>
           
            <Link>
           <svg  className='footer-icon'  xmlns="http://www.w3.org/2000/svg" title="LinkedIn"><path d="M2.668 11.833h-2.5V3.5h2.5v8.333Zm9.167
            0h-2.5V7.382c0-1.16-.414-1.738-1.233-1.738-.649 0-1.06.324-1.267.971v5.218h-2.5s.033-7.5 0-8.333h1.973l.152 1.667h.052c.513-.834 1.332-1.399 
            2.455-1.399.854 0 1.545.238 2.073.835.53.597.795 1.399.795 2.525v4.705ZM1.417 2.667c.713 0 1.291-.56 1.291-1.25S2.13.167 1.417.167C.703.167.125.727.125 1.417s.578 1.25 1.292 1.25Z"></path></svg>
            </Link>
           
           <Link>
           <svg fill="#004250"  width="1rem" height="1rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Angel">
              <path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z"></path>
          </svg>

           </Link>
           </li>
           
          <li><Link>Privacy policy</Link></li>
          <li><Link>Cookie Policy</Link></li>
          <li><Link>Security </Link></li>
          <li><Link>Terms of Service </Link></li>
          <li><Link>Refferal Program</Link></li>
          <li><Link>Sitemap</Link></li>
        </ul>
      </div>


      <div className="footer-bottom flex flex-col gap-4 pt-28">
       <p className='text-xs text-backSecondary'> <span className='font-bold'>Secfi™ 2024 — All rights reserved.</span> “Secfi” refers to Secfi, Inc. and its affiliates. Secfi, Inc. is a technology company offering a range of financial products 
       and services through its wholly-owned, separately managed but affiliated subsidiaries, Secfi Securities, LLC and Secfi Advisory Limited.</p>

       <p className="text-xs text-backSecondary">Check the background of Secfi Securities on FINRA’s BrokerCheck.</p>

       <p className="text-xs text-backSecondary">
       Securities products offered by Secfi Securities, LLC, an SEC-registered broker-dealer and Member FINRA / SIPC ((https://www.finra.org/#/ and https://www.sipc.org/)). Access important information in our Legal Resources (https://secfi.com/important-information-secfi-securities-llc) and learn more about Secfi Securities in our Customer Relationship Summary (https://files.brokercheck.finra.org/crs_302112.pdf). 
       </p>


       <p className="text-xs text-backSecondary">
       Investment advisory products and services, including financial planning and investment management, offered exclusively to Clients under an in-force Agreement by Secfi Advisory Limited, an SEC-registered investment adviser. Access important information in our Legal Resources (https://secfi.com/important-information-secfi-advisory-limited) and learn more about Secfi Advisory Limited in our Client Relationship Summary (https://reports.adviserinfo.sec.gov/crs/crs_306961.pdf). Testimonials are specific to an individual Client’s experience and may not be representative of all Clients. Unless otherwise indicated, Clients offering a Testimonial do not receive compensation and their statement does not present a conflict of interest.
       </p>


       <p className="text-xs text-backSecondary">This information is provided by Secfi for educational and illustrative purposes only and is not considered an offer, solicitation of an offer, advice, or recommendation to buy, sell, or hold any security. All investing involves risk, including the risk of losing the money you invest, and past performance does not guarantee future performance. Secfi relies on information from various sources believed to be reliable, including information from its Customers, Clients, and other third parties, but cannot guarantee the accuracy or completeness of that information. Secfi, 
       Inc. does not provide tax, legal, or investment advice. </p>

       <p className="text-xs text-backSecondary">
       Secfi is not affiliated with, sponsored, or endorsed by the companies listed, described, or featured on its site. Company logos or trademarks used do not imply endorsement and are the property of their respective owners. This is a representative list of clients that work with Secfi as of November 10th, 2023. It is not known whether they approve or disapprove of our services.
       </p>
      </div>
      
     
    </section>}
    </>
  )
}

export default Footer
