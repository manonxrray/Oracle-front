import styled from "@emotion/styled";
import { WHITE, MAUVE, LIGHTGREY } from "../utils/styling";

const Container = styled.div`
  @keyframes floating {
    0% {
      padding-top: 1rem;
    }
    50% {
      padding-top: 0rem;
    }
    100% {
      padding-top: 1rem;
    }
  }

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: scroll;
  place-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  .card {
    height: 18rem;
    margin-top: 1rem;
    > img {
      width: 8rem;
      animation: 3s floating infinite;
    }
    @media (min-width: 800px) {
      margin: 0;

      > img {
        width: 12rem;
        @media (min-width: 1000px) {
          width: 15rem;
        }
      }
    }

    @media (min-width: 1000px) {
      margin-top: -5rem;

      > img {
        width: 15rem;
      }
    }
  }

  .content {
    display: grid;
    place-items: center;

    > h2 {
      font-size: 1rem;
      text-decoration: 3px solid ${MAUVE} underline;

      @media (min-width: 600px) {
        font-size: 1.5rem;
      }
    }

    > p {
      margin: 1rem;
      text-align: center;
      font-size: 0.8rem;

      @media (min-width: 600px) {
        text-align: right;
      }

      @media (min-width: 800px) {
        font-size: 1rem;
      }

      @media (min-width: 1000px) {
        padding-right: 4rem;
      }
    }
  }
`;

export default function Card({ name, description, picture, number }) {
  return (
    <Container>
      <div className="card">
        <img src={picture} />
      </div>
      <div className="content">
        <h2>
          {number}. {name}
        </h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
