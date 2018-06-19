import React from 'react';

import styled from 'styled-components';

const SocialIconsWrapper = styled('div')`
  i {
    font-size: 36px;
    margin-right: 16px;
  }
`;

export default props => (
  <SocialIconsWrapper className="socialIcons">
    <i className="fa fa-twitter" />
    <i className="fa fa-youtube-play" />
    <i className="fa fa-instagram" />
  </SocialIconsWrapper>
);
