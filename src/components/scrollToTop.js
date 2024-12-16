// Scroll Top
import React, { useState } from 'react'
import { FaArrowCircleUp } from '@react-icons/all-files/fa/FaArrowCircleUp'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    })
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible)
  }

  return (
    <div className="pagetopButton">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </div>
  )
}

export default ScrollButton
