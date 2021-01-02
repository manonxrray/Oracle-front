import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import { MAUVE, WHITE, CORMORANT } from "../../utils/styling";

const PageStyle = styled.div`
  background: ${MAUVE};
  color: ${WHITE};
  font-family: ${CORMORANT};
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
