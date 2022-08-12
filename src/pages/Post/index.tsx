import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import {
  GithubLogo,
  CalendarBlank,
  ChatCircle,
  CaretLeft,
  Link as LinkIcon,
} from "phosphor-react";

import * as P from "./styles";

export function PostPage() {
  return (
    <P.PostContainer>
      <Header />

      <P.StyledPostWrapper>
        <main>
          <P.StyledPostInfo>
            <div className="post-header">
              <Link to="/">
                <CaretLeft size={15} />
                voltar
              </Link>

              <a href="#" target="_blank">
                ver no github
                <LinkIcon size={15} />
              </a>
            </div>

            <strong>JavaScript data types and data structures</strong>

            <div className="post-footer">
              <span>
                <GithubLogo />
                ronaldprofile
              </span>
              <span>
                <CalendarBlank />
                Há 1 dia
              </span>
              <span>
                <ChatCircle /> 5 comentários
              </span>
            </div>
          </P.StyledPostInfo>

          <P.StyledPostContent>
            <p>
              <b>
                Programming languages all have built-in data structures, but
                these often differ from one language to another.
              </b>
              &nbsp;This article attempts to list the built-in data structures
              available in JavaScript and what properties they have. These can
              be used to build other data structures. Wherever possible,
              comparisons with other languages are drawn.
            </p>

            <a href="#" target="_blank">
              Dynamic typing
            </a>

            <p>
              JavaScript is a loosely typed and dynamic language. Variables in
              JavaScript are not directly associated with any particular value
              type, and any variable can be assigned (and re-assigned) values of
              all types:
            </p>
          </P.StyledPostContent>
        </main>
      </P.StyledPostWrapper>
    </P.PostContainer>
  );
}
