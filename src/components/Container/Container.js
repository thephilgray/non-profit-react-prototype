import styled from 'styled-components';

export default styled('div')`
  flex: 1 1 100%;
  margin: auto;
  padding: 16px;
  width: 100%;
  @media (min-width: 960px) {
    max-width: 900px;
  }
  @media only screen and (min-width: 1264px) {
    max-width: 1185px;
  }
  @media only screen and (min-width: 1904px) {
    max-width: 1785px;
  }
`;
