import Image from '../public/assets/icon.png'
import './App.scss'

export const App: React.FC = () => {
  console.log(process.env.REACT_APP_S)
  return (
    <div className='scss'>
      <img src={Image} alt='image' />
    </div>
  )
}
