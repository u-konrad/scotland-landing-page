import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"

const End = () => {
  const d1 = new Date()
  const y1 = d1.getFullYear()
  let m1 = d1.getMonth() + 1
  if (m1 < 10) m1 = "0" + m1
  let dt1 = d1.getDate()
  if (dt1 < 10) dt1 = "0" + dt1
  const d2 = y1 + "-" + m1 + "-" + dt1

  const [startDate, setStartDate] = useState(d2)
  const [endDate, setEndDate] = useState(d2)


  return (
    <Wrapper className="grid end" id="book">
      <div className="left full-bleed-sm">
        <StaticImage
          className="img"
          alt=""
          quality={100}
          layout="constrained"
          src="../assets/images/end.jpg"
        />
      </div>
      <div className="right">
        <h2>Book your tour</h2>
        <p className="mb-4">
          Fill out the form to check availability, and we will get back to you.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <div className="">
            <div className="form-group  ">
              <label htmlFor="start">Start date</label>
              <input
                className="form-control"
                type="date"
                id="start"
                min={d2}
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              ></input>
            </div>
            <div className="form-group  ">
              <label htmlFor="end">End date</label>
              <input
                className="form-control"
                type="date"
                id="end"
                min={startDate}
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              ></input>
            </div>
            <div className="form-group  ">
              <label htmlFor="num">Persons</label>
              <input
                className="form-control"
                type="number"
                id="num"
                min={1}
                max={10}
                defaultValue={1}
              ></input>
            </div>
          </div>
          <div className="form-group  ">
            <label htmlFor="email">Your email</label>
            <input className="form-control" type="email" id="email"></input>
          </div>
          <div className="form-group  ">
            <label htmlFor="note">Additional info</label>
            <textarea
              className="form-control"
              type="text"
              id="note"
              rows={4}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end ">
            <button className="btn btn-sharp mb-5">Send</button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;

  button {
    width: 100%;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  form {
    width: 100%;
  }

  form > div:first-child {
    display: grid;
    column-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h2 {
    margin-top: 3rem;
  }

  p {
    max-width: 30ch;
    line-height: 1.5;
  }

  .img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    .right {
      margin-left: 3rem;
    }

    .left {
      display: block;
    }

    .img {
      position: relative;
      top: -10%;
    }
    h2 {
      font-size: 56px;
    }
  }

  @media screen and (min-width: 992px) {
    .right {
      margin-left: 3rem;
    }
  }
`

export default End
