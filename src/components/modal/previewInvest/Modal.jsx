import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../modal.css'
import { FiChevronDown } from 'react-icons/fi'

const data = [
  {
    name: 'USDT',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/825.png',
  },
  {
    name: 'USDC',
    image:
      'https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png',
  },
  {
    name: 'DAI',
    image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png',
  },
]

const coins = data.map((item, index) => (
  <div key={index} className="selectItem">
    <img src={item.image} alt="" />
    <p>{item.name}</p>
  </div>
))

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
}

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  const [selectItem, setSelectItem] = React.useState(coins[0])
  const [dropdown, setDropdown] = React.useState(false)

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={modalRef}
          onClick={closeModal}
        >
          <motion.div variants={modal} className="modal">
            <div className="modal-title-container">
              <div className="modal-title">I want to invest</div>
              <div className="modal-subtitle">Avalable: 1,000,000 USDT </div>
            </div>
            <div className="modal-input-container">
              <input className="modal-input" />

              <div className="modal-input-right">
                <p className="modal-input-p">Max</p>
                <div
                  className="modal-select-custom"
                  onClick={() => {
                    setDropdown(!dropdown)
                  }}
                >
                  {selectItem}
                  <p>
                    <FiChevronDown className="modal-icon-down" />
                  </p>
                </div>
              </div>
              {dropdown && (
                <div className="selectItemsList">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="selectItem"
                      onClick={() => {
                        setSelectItem(coins[index])
                        setDropdown(!dropdown)
                      }}
                    >
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="modal-title-container"
              style={{ marginTop: '.5rem' }}
            >
              <div className="modal-title">You will get</div>
            </div>
            <div className="modal-input-container">
              <input className="modal-input" />
              <div className="modal-input-right">
                <div className="modal-tea-txt">TEA</div>
              </div>
            </div>

            <motion.button
              whileHover={{
                textShadow: '0px 0px 8px rgb(255, 255, 255)',
                boxShadow: '0px 0px 8px rgb(255, 255, 255)',
              }}
              className="modal-button"
              style={{ marginTop: '1.8rem' }}
            >
              Preview Investment
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
