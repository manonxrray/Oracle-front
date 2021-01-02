import styled from "@emotion/styled";
import { DARKPURPLE } from "../../utils/styling";

const FooterStyle = styled.header`
  background: ${DARKPURPLE};
`;

export default function Footer() {
  return (
    <FooterStyle>
      <ul>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
      <p>créé par Manon Gerray - 2021</p>
    </FooterStyle>
  );
}
