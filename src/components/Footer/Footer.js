import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+233555723733">+233555723733</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:amoparkerprince78@gmail.com">
            amoparkerprince78@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Delivery your software as better as you want it !</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/mrparkersson" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/amopp/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/mrparkersson" target="_blank">
            <AiOutlineTwitter size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
