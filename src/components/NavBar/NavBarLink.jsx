// eslint-disable-next-line no-unused-vars
import React from 'react'

const NavBarLink = ({ props }) => {
  const {docUrl, linkText, linkType, icon } = props

  if (linkType == 'button') {
    let btn = (<li> 
      <a href={docUrl} className={'bg-blue-600 px-3 py-2 rounded-xl text-white hover:bg-blue-500 focus:outline-none'} ><span className='inline-block'>{icon}</span>{linkText}</a>
    </li>) 

    return (btn)
  } else {
    return (
      <li>
        <a href={docUrl} className={'font-display max-w-sm font-bold leading-tight'} ><span className={'link link-underline  text-[#3c88ae]'}>{linkText}</span></a>
      </li>
    )
  }
}

export default NavBarLink