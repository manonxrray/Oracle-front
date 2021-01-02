import styled from "@emotion/styled";
import { MAUVE } from "../utils/styling";

const HomeStyle = styled.div`
  background: ${MAUVE};
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
