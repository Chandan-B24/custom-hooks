import { useMediaQuery } from "../hooks/useMediaQuery"


const MediaComponent = () => {

    const {matches,mediaQuery} = useMediaQuery('(max-width:768px)')

  return (
    <div>
        <span>Media Query  : {mediaQuery}</span><br/>
        <span>Matches : {matches ? 'yes' : 'no'}</span>
    </div>
  )
}

export default MediaComponent