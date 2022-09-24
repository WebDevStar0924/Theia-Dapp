import { useRef } from 'react'
import { StyledWrapper } from './styles'
import { BsCamera } from 'react-icons/all'
import { useToast } from '../../hooks/useToast'

interface iProps {
  showLabel: boolean
  bannerImg: string | null
  iconImg: string | null
  updateBannerImg: (img: string | undefined) => void
  updateIconImg: (img: string | undefined) => void
  editable?: boolean
}

export default function AddImage(props: iProps) {
  const bannerRef = useRef<HTMLInputElement>(null)
  const iconRef = useRef<HTMLInputElement>(null)
  const { toastWarning } = useToast()

  const { bannerImg, iconImg, updateBannerImg, updateIconImg, editable } = props

  const descImgChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.size > 1024 * 1024) {
        toastWarning('Max image size is 1MB!', '')
      } else {
        const reader = new FileReader()

        reader.onload = function () {
          updateBannerImg(reader.result?.toString())
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const iconChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.size > 1024 * 1024) {
        toastWarning('Max image size is 1MB!', '')
      } else {
        const reader = new FileReader()
        reader.onload = function () {
          updateIconImg(reader.result?.toString())
        }
        reader.readAsDataURL(file)
      }
    }
  }
  return (
    <StyledWrapper>
      <input
        ref={bannerRef}
        className="form-control"
        type="file"
        accept="image/png, image/jpeg"
        required
        name="icon"
        onChange={descImgChange}
      />
      <input
        ref={iconRef}
        className="form-control"
        type="file"
        accept="image/png, image/jpeg"
        required
        name="icon"
        onChange={iconChange}
      />

      {bannerImg ? (
        <img
          src={bannerImg}
          alt="Banner"
          className={'bannerImg'}
          onClick={() => {
            editable && bannerRef.current && bannerRef.current.click()
          }}
        />
      ) : (
        <div
          className={'emptyBanner'}
          onClick={() => bannerRef.current && bannerRef.current.click()}
        >
          <BsCamera fill={'#FFF'} size={'27px'} className={'cameraIcon'} />
        </div>
      )}

      {iconImg ? (
        <img
          src={iconImg}
          alt="Icon"
          className={'iconImg'}
          onClick={() => editable && iconRef.current && iconRef.current.click()}
        />
      ) : (
        <div
          className={'emptyIcon'}
          onClick={() => iconRef.current && iconRef.current.click()}
        >
          <BsCamera fill={'#FFF'} size={'27px'} className={'cameraIcon'} />
        </div>
      )}
    </StyledWrapper>
  )
}
