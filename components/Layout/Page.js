import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import { MAUVE, DARKPURPLE, WHITE, CORMORANT } from "../../utils/styling";

const PageStyle = styled.div`
  background: ${DARKPURPLE};
  color: ${WHITE};
  font-family: ${CORMORANT};
  min-height: 100vh;
`;

export default function Paging({ children }) {
  return (
    <main>
      <Header />
      <PageStyle>{children}</PageStyle>
      <Footer />
    </main>
  );
}
