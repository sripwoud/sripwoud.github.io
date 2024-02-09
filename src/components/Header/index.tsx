import { FaGithub } from 'react-icons/fa'

import './Header.css'

const Header = () => (
  <>
    <div className='quote'>
      <span>{`'We are not what we know but what we are ready to learn.'`}</span>
      <span>(Mary Catherine Bateson)</span>
    </div>
    <div className='nickname'>SRIPWOUD</div>
    {/*<Logo />*/}
    <div className='roles'>
      <span>Web3 Engineer</span>
    </div>
    <div className='social'>
      <a href='https://github.com/sripwoud' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a
        href='https://listed.to/@sripwoud'
        className='blog'
        target='_blank'
        rel='noreferrer'
      >
        Blog
      </a>
    </div>
    <div className='help'>
      <span>?: see commands</span>
    </div>
  </>
)

export { Header }
