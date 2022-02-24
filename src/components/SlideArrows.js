import React from "react"
import styled from "styled-components"
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from "react-icons/md"

const SlideArrows = ({
  onClickLeft,
  onClickRight,
  disabledLeft,
  disabledRight,
}) => {
  return (
    <Wrapper className="control-box">
      <button
        className="btn-icon me-3"
        onClick={onClickLeft}
        disabled={disabledLeft}
        aria-label='slide left'
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        onClick={onClickRight}
        className="btn-icon"
        disabled={disabledRight}
        aria-label='slide right'
      >
        <MdOutlineArrowForwardIos />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default SlideArrows
