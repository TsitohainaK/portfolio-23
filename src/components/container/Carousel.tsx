import { ReactNode, useEffect } from 'react'
import "./Carousel.css"

type Props = {
  children: ReactNode
}

const Carousel = ({ children }: Props) => {
  // still need to refactor this
  // it came from a vanilla carousel that i've made a while back
  const naiv = () => {
    const carousel = document.querySelector('.carousel')!;
    const firstImg = carousel.querySelectorAll('img')[0];

    let isDragStart = false, isDragging = false, prevPageX: any, prevScrollLeft: any, positionDiff: any;
    let scrollWidh = carousel.scrollWidth - carousel.clientWidth;




    const autoSlide = () => {
      if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
      positionDiff = Math.abs(positionDiff);
      let firstImgWidth = firstImg.clientWidth + 14;
      let valDifference = firstImgWidth - positionDiff;
      if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
      }
      carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e: any) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e: any) => {
      if (!isDragStart) return
      e.preventDefault();
      isDragging = true;
      carousel.classList.add('dragging');
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = (e: any) => {
      isDragStart = false;
      carousel.classList.remove('dragging');
      if (!isDragging) return;
      isDragging = true;
      autoSlide()
    }

    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('touchmove', dragging);

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart);

    carousel.addEventListener('mouseup', dragStop);
    carousel.addEventListener('mouseleave', dragStop);
    carousel.addEventListener('touchend', dragStop);
  }

  useEffect(()=>{
    naiv()
  },[])
  return (
    <div className="warpper">
      <div className="carousel flex gap-1">
        {children}
      </div>
    </div>
  )
}

export default Carousel