import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { NavLink, useParams } from "react-router-dom";

const Summery = () => {
  let params = useParams();
  const { services } = useGlobalContext();
  // console.log(params.id);

  return (
    <Wrapper className="section">
      {services.map((curElm) => {
        const {
          show: {
            name,
            id,
            summary,
            image: { medium },
            rating: { average },
            schedule: { time, days },
            status,
            type,
            premiered,
          },
        } = curElm;
        if (params.id == id) {
          return (
            <div className="container" key={id}>
              <div className="card__cnt">
                <div className="card__subcnt">
                  <img src={medium} alt="image" />
                  <div
                    className="card__summary"
                    dangerouslySetInnerHTML={{ __html: summary }}
                  ></div>
                </div>
                <NavLink to={{ pathname: `/form/${id}` }}>
                  <button className="ticket__book">BOOK TICKETS</button>
                </NavLink>
                <div className="card__info">
                  <h3 className="card__title">SHOW INFO</h3>
                  <p>Name:{name}</p>
                  <p className="card__txt">Premiered: {premiered}</p>
                  <p className="card__txt">
                    Schedule: {days} at {time}
                  </p>
                  <p className="card__txt">Status: {status}</p>
                  <p className="card__txt">Show Type:{type}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card__cnt {
    .card__subcnt {
      display: flex;
      .card__summary {
        font-size: 2rem;
        padding: 0 5rem;
        line-height: 2.6rem;
      }
    }
    .ticket__book {
      max-width: 21rem;
      width: 100%;
      font-weight: 600;
      padding: 1.2rem;
      font-size: 1.5rem;
      margin-top: 1.5rem;
    }
    .card__info {
      font-size: 2rem;
      margin: 2rem 0;
    }
    .card__txt {
      margin: 0.7rem 0;
    }
  }
`;

export default Summery;
