import React, { useState } from "react";
import { NavLink, useParams ,useNavigate} from "react-router-dom";
import styled from "styled-components";

const Form = () => {
    const navigate = useNavigate();
  let params = useParams();
  let list = localStorage.getItem("user");
  let item = JSON.parse(list);

  let [elm, setState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/success');
  };

  item.map((curElm) => {
    const {
      show: {
        name,
        id,
        rating: { average },
        schedule: { time },
        premiered,
      },
    } = curElm;
    if (params.id == id) {
      elm = { name, premiered, time };
      return elm;
    }
  });

  return (
    <Wrapper>
      <h2>BOOK TICKETS</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Movie Name:</label>
        <input
          className="forminp"
          type="text"
          name="name"
          id="name"
          value={elm.name}
        />
        <label htmlFor="premiered">Premiered:</label>
        <input
          className="forminp"
          type="text"
          name="premiered"
          id="premiered"
          value={elm.premiered}
        />
        <label htmlFor="schedule">Schedule:</label>
        <input
          className="forminp"
          type="text"
          name="schedule"
          id="schedule"
          value={elm.time}
        />

        <button type="submit" className="btn">
          Submit form
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 50rem;
  margin: auto;
  text-align: center;
  font-size: 2rem;
  form {
    display: flex;
    flex-direction: column;
    label {
      margin: 0.7rem 0;
      display: flex;
      input {
        width: 100%;
      }
    }
    .forminp{
        font-size:1.6rem;
        padding:0.4rem;
    }
    .btn{
        padding: 0.8rem;
    font-size: 1.7rem;
    margin-top: 2.8rem;
    }
  }
`;
export default Form;
