import { Header } from "../../components/Header";
import { Profile } from "./components/Profile";
import { MagnifyingGlass } from "phosphor-react";

import * as H from "./styles";
import { Post } from "../../components/Post";

export function HomePage() {
  return (
    <H.HomeContainer>
      <Header />

      <H.StyledHomeWrapper>
        <main>
          <Profile />

          <H.StyledSectionPublications id="publications">
            <div>
              <span>Publicações</span>
              <span>6 publicações</span>
            </div>

            <H.StyledSearchPostForm>
              <input type="text" placeholder="Buscar conteúdo" id="query" />
              <button type="submit">
                <MagnifyingGlass />
                Buscar
              </button>
            </H.StyledSearchPostForm>
          </H.StyledSectionPublications>

          <H.StyledSectionPosts id="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </H.StyledSectionPosts>
        </main>
      </H.StyledHomeWrapper>
    </H.HomeContainer>
  );
}
