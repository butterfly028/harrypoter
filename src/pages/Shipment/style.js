import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 9rem;
`;

export const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  .selected {
    box-shadow: 0 0 10px 5px orange;
  }
`;
