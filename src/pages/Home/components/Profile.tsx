import { GithubLogo, Users, Buildings, Link } from "phosphor-react";
import * as P from "./styles";

export function Profile() {
  return (
    <P.StyledSectionProfile>
      <P.StyledSectionWrapper>
        <img
          src="https://github.com/ronaldprofile.png"
          alt="foto de Ronald Tomaz"
        />

        <P.StyledSectionContent>
          <div className="section-header">
            <strong>Ronald Tomaz</strong>
            <a href="https://https://github.com/ronaldprofile" target="_blank">
              github
              <Link size={15}/>
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div className="section-footer">
            <span>
              <GithubLogo />
              ronaldprofile
            </span>
            <span>
              <Buildings />
              Avanz
            </span>
            <span>
              <Users />
              52 seguidores
            </span>
          </div>
        </P.StyledSectionContent>
      </P.StyledSectionWrapper>
    </P.StyledSectionProfile>
  );
}
