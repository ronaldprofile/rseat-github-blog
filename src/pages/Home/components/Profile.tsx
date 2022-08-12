import { GithubLogo, Users, Buildings, Link } from "phosphor-react";
import { useGithubProfile } from "../../../hooks/api/useGithubProfile";
import * as P from "./styles";

export function Profile() {
  const { data: user } = useGithubProfile();

  return (
    <P.StyledSectionProfile>
      <P.StyledSectionWrapper>
        <img src={user?.avatar_url} alt={`foto de ${user?.name}`} />

        <P.StyledSectionContent>
          <div className="section-header">
            <strong>{user?.name}</strong>
            <a href={user?.html_url} target="_blank">
              github
              <Link size={15} />
            </a>
          </div>

          <p>{user?.bio}</p>

          <div className="section-footer">
            <span>
              <GithubLogo />
              {user?.login}
            </span>
            <span>
              <Buildings />
              {user?.company}
            </span>
            <span>
              <Users />
              {user?.followers} seguidores
            </span>
          </div>
        </P.StyledSectionContent>
      </P.StyledSectionWrapper>
    </P.StyledSectionProfile>
  );
}
