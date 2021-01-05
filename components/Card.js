import styled from "@emotion/styled";
import { LIGHTPINK, BLUEPURPLE } from "../utils/styling";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${LIGHTPINK};

  padding-top: 1rem;
  color: ${BLUEPURPLE};

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  > img {
    margin: 0 auto;
    width: 10rem;

    @media (min-width: 600px) {
      width: 15rem;

      margin: 0;
    }
  }

  > .content {
    > h2 {
      margin-bottom: 1rem;
      font-style: italic;
    }

    @media (min-width: 600px) {
      margin-top: 1.5rem;
    }
  }
`;

export default function Card({ name, description, picture, number }) {
  return (
    <Container>
      <img src={picture} />
      <div className="content">
        <h2>
          {number}. {name}
        </h2>
        <p>{description}</p>
      </div>
    </Container>
  );
}
