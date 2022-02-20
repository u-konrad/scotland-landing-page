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


  const startHandler = e => {
    console.log(e.target.value)
  }

  return (
    <Wrapper className="grid">
      <div className="left">
        <StaticImage
          className="img"
          alt=""
          quality={100}
          src="../assets/images/end.jpg"
        />
      </div>
      <div className="right">
        <h2>Book your tour</h2>
        <p className="mb-4">
          Fill out the form to check availability, and we will get back to you.
        </p>
        <form onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <div className="d-flex gap-2 w-100 mb-3">
          <div className="form-group ">
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
          <div className="form-group  mb-3">
            <label htmlFor="email">Your email</label>
            <input
              className="form-control"
              type="email"
              id="email"
           
            ></input>
          </div>
          <div className="form-group mb-3 ">
            <label htmlFor="note">Additional info</label>
            <textarea
              className="form-control"
              type="text"
              id="note"
           rows={4}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
          <button className="btn btn-sharp">Send</button></div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;

  .full-bleed,
  .full-width {
    grid-row: 1/1;
  }

  .right {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  p {
    max-width: 30ch;
    text-align: end;
    line-height: 1.5;
  }

  .full-width {
  }

  .img {
    position: relative;
    top: -10%;
  }
`

export default End
