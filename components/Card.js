import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > img {
    width: 15rem;
  }
`;

export default function Card({ name, description, picture, number }) {
  return (
    <Container>
      {/* <img src={picture} /> */}
      <h2>
        {number}. {name}
      </h2>
      <p>{description}</p>
    </Container>
  );
}
