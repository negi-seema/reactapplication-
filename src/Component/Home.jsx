import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import Summery from "./Summery";

const Home = () => {
  const { services } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="cnt__rows">
          {services.map((curElm) => {
            const {
              show: {
                name,
                id,
                image: { medium },
                rating: { average },
              },
            } = curElm;
            return (
              <div className="cnt__cols" key={id}>
                <div className="cnt__cards">
                  <img src={medium} alt="poster" className="poster" />
                  <div className="card__body">
                    <h3 className="move__name">{name}</h3>
                    <h3 className="rating">{average !== null ? average : 0}</h3>
                  </div>
                  <NavLink to={{ pathname: `/summery/${id}` }}>
                    <button className="btn">Click </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cnt__rows {
    display: flex;
    flex-wrap: wrap;
  }
  .cnt__cols {
    padding: 0px 1rem;
    margin-top: 2rem;
  }

  .cnt__cards {
    .poster {
      width: 100%;
      height: 30rem;
    }
    .card__body {
      font-size: 1.8rem;
      padding: 0.5rem 0.3rem;
      display: flex;
      justify-content: space-between;
    }
    .btn {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0.5rem;
      font-size: 1.5rem;
      margin-top: 0.5rem;
      font-weight: 600;
      background:#deeaee;
      border:0.1rem solid;
    }
  }
`;

export default Home;
