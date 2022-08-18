import React from 'react'
import { FavButton } from '../FavButton'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'
import { useMutationTogleLike } from '../hooks/useMutationTogleLike'
import { Img, ImgWrapper, Article } from './styles'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, articleRef] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMutationTogleLike()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key);

  const handleFavLike = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={articleRef}>
      {
        show
          ? <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavLike} />
          </>
          : null
      }
    </Article>
  )
}
