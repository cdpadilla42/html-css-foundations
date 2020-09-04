import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: white;
  color: #1071e2;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;

  & > * {
    margin: 1rem 0.5rem;
  }

  a {
    color: #1071e2;
    text-decoration: none;
    transition: color 0.4s ease;

    &:hover {
      color: #093669;
    }
  }

  .hamburger {
    color: grey;
    font-size: 1.3rem;
  }

  .center {
    flex: 1;
  }

  .logo {
    font-size: 1.5rem;
    color: #ea4c95;

    span {
      margin: 0 0.25rem;
    }
  }

  .links {
    flex: 1;
    list-style: none;
    font-size: 1.1em;
    margin: 0;
    padding: 0;
  }
`;

export default StyledNav;
