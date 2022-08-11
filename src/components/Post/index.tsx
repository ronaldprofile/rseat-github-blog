import * as P from "./styles";

export function Post() {
  return (
    <P.StyledPostContainer to={''}>
      <P.StyledPostWrapper>
        <div>
          <strong>JavaScript data types and data structures</strong>
          <time>há 1 dia</time>
        </div>
        
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have.
        </p>
      </P.StyledPostWrapper>
    </P.StyledPostContainer>
  );
}
