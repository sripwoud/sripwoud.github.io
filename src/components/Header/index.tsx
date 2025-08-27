import { FaGithub } from 'react-icons/fa'

const Header = () => (
  <>
    <div className='quote'>
      <span className='bg-highlight'>{`'We are not what we know but what we are ready to learn.'`}</span>
      <span className='bg-highlight'>(Mary Catherine Bateson)</span>
    </div>
    <div className='nickname'>SRIPWOUD</div>
    {/*<Logo />*/}
    <div className='roles'>
      <span className='bg-highlight'>Web3 Engineer</span>
    </div>
    <div className='social'>
      <a href='https://github.com/sripwoud' rel='noreferrer' target='_blank'>
        <FaGithub />
      </a>
      <a
        className='blog'
        href='https://listed.to/@sripwoud'
        rel='noreferrer'
        target='_blank'
      >
        Blog
      </a>
    </div>
    <div className='help'>
      <span className='bg-highlight'>?: see commands</span>
    </div>
  </>
)

export { Header }
