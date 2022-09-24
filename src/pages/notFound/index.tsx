import Container from '../../components/container/Container'
import { Title, Subtitle } from '../../components'
import './notFound.css'
import { ImArrowLeft2 } from 'react-icons/im'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <div className="height-not-found">
        <div
          className="not-found-container"
          data-aos="fade-zoom-in"
          data-aos-duration="600"
        >
          <Title>404</Title>
          <Subtitle>PAGE NOT FOUND</Subtitle>
          <div className="notFound-button-container">
            <Link to="/">
              <motion.button
                className="notFound-button"
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                whileHover={{
                  y: -1,
                  x: 1,
                  textShadow: '0px 0px 8px rgb(255, 255, 255)',
                  boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                }}
              >
                <ImArrowLeft2
                  style={{ fontSize: '24px', marginRight: '12px' }}
                />
                Back To Home
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NotFound
