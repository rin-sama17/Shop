'use client'

import { useRef } from 'react'
import { Box } from '@mui/material'
import './horizontalSlider.css'
import Product from '@/components/Product'
function ProductSlider({ products }) {
  let isDown = false
  let startX
  let scrollLeft

  const slider = useRef(null)
  const whenmousedown = (e) => {
    isDown = true
    e.target.classList.add('active')
    startX = e.pageX - slider.current.offsetLeft
    scrollLeft = slider.current.scrollLeft
  }
  const whenmouseleave = () => {
    isDown = false
    slider.current.classList.remove('active')
  }
  const whenmouseup = () => {
    isDown = false
    slider.current.classList.remove('active')
  }
  const whenmousemove = (e) => {
    if (!isDown) return
    e.preventDefault()

    const x = e.pageX - slider.current.offsetLeft
    const walk = (x - startX) * 3 //scroll-fast
    slider.current.scrollLeft = scrollLeft - walk
    // e.target.classList.add(`transform: translate3d(${scrollLeft}, 0px, 0px)`)
  }
  return (
    <dev className="horizontal-scroll ">
      <div
        className="media-scroller snaps-inline 'drag-animation"
        ref={slider}
        onMouseDown={whenmousedown}
        onMouseLeave={whenmouseleave}
        onMouseUp={whenmouseup}
        onMouseMove={whenmousemove}
      >
        {products &&
          products.map((product, index) => (
            <Box component="dev" key={index}>
              <Product productId={product.id} />
            </Box>
          ))}
      </div>
    </dev>
  )
}

export default ProductSlider
