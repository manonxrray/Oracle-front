import styled from "@emotion/styled";
import { DARKPURPLE } from "../utils/styling";

const HomeStyle = styled.div`
  background: ${DARKPURPLE};
`;

export default function HomePage() {
  return (
    <main>
      <HomeStyle>
        <div>
          <h1>Bienvenue !</h1>
          <h2>Comment ça marche ?</h2>
        </div>
      </HomeStyle>
    </main>
  );
}
