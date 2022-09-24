import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
              <div className="modal-title">I want to claim my TEA</div>
            </div>
            <div className="modal-input-container">
              <input className="modal-input" />
              <div className="modal-input-right">
                <div className="modal-tea-txt">TEA</div>
              </div>
            </div>

            <div className="modal-calculate-container">
              <div className="modal-calculate-items">
                <div className="modal-calculate-items-left">TEA Price</div>
                <div className="modal-calculate-items-right">$5,47</div>
              </div>
              <div className="modal-border" />
              <div className="modal-calculate-items">
                <div className="modal-calculate-items-left">Network Fee</div>
                <div className="modal-calculate-items-right">$1,4</div>
              </div>
              <div className="modal-border" />
              <div className="modal-calculate-items">
                <div
                  className="modal-calculate-items-left"
                  style={{ opacity: 1 }}
                >
                  Total
                </div>
                <div className="modal-calculate-items-right">
                  3,828,998,6 TEA
                </div>
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
              Sign Sell Agreement
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
