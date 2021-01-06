import styled from "@emotion/styled";
import { DARKPURPLE } from "../utils/styling";

const HomeStyle = styled.div`
  background: ${DARKPURPLE};
  margin-top: 1rem;

  > div {
    > h1 {
      text-align: center;
      font-size: 1.5rem;
    }
    > img {
      display: block;
      width: 15rem;
      margin: auto;
    }
  }
`;

export default function HomePage() {
  return (
    <main>
      <HomeStyle>
        <div>
          <h1>Bienvenue, installez- vous !</h1>
          <img src="/backopen.PNG" />
        </div>
      </HomeStyle>
    </main>
  );
}
