import { LogoGithubBlog } from "../LogoGithubBlog";
import bgEffectOne from "../../assets/bg-effect-one.png";
import bgEffectTwo from "../../assets/bg-effect-two.png";
import * as H from "./styles";

export function Header() {
  return (
    <H.StyledHeaderContainer>
      <LogoGithubBlog />

      <img src={bgEffectOne} alt="" className="first" />
      <img src={bgEffectTwo} alt="" className="second" /> 
    </H.StyledHeaderContainer>
  );
}
