import React from "react"
import styled from "styled-components"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

const SlideArrows = ({
  onClickLeft,
  onClickRight,
  disabledLeft,
  disabledRight,
}) => {
  return (
    <Wrapper className="d-flex control-box">
      <button
        className="btn-icon me-3"
        onClick={onClickLeft}
        disabled={disabledLeft}
      >
        <BsArrowLeft />
      </button>
      <button
        onClick={onClickRight}
        className="btn-icon"
        disabled={disabledRight}
      >
        <BsArrowRight />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default SlideArrows
