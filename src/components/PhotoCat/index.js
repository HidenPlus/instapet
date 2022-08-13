import React, { Fragment, useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { Button, Img, ImgWrapper, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCat = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const articleRef = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(articleRef.current)
    return () => observer.disconnect()
  }, [articleRef])

  return (
    <Article ref={articleRef}>
      {
        show
          ? <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button><MdFavoriteBorder size='32px' />{likes} likes!</Button>
            </>
          : null
      }

    </Article>
  )
}
