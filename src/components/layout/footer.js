import React from 'react';
import styled from '@emotion/styled';
import HorList from '../../partials/horizontal-list';
import Logo from '../../images/logo.png';

const FooterWrapper = styled.footer`
  padding-top: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2.5rem;
  background-color: rgb(19, 21, 32);
  margin-top: 5rem;
  width: 100%;
  color: white;

  @media (min-width: 768px) {
    padding-top: 6rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 5rem 2.5rem;
  }
`;

const FooterBody = styled.div`

  @media (max-width: 400px) {

    > div {
      flex-wrap: wrap;

      > * + * {
        margin-top: 1rem;
        margin-left: 0;
        flex: 0 0 100%;
      }
    }
  }
`;

const FooterSub = styled.div`
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const FooterLogo = styled.div`
  flex-grow: 2;
  text-align: left;

  img {
    max-width: 160px;
  }
`;

const FooterInfo = styled.div`
  h4, p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a, h4 {
    color: white;
  }
`;

const SocialWrapper = styled.a`
  text-decoration: none;
  display: block;

  + a {
    margin-top: 1rem;
  }
`;

const Footer = () => {
  const contactInfo = [
    {
      id: 1,
      image: '',
      text: 'Facebook',
      link: '',
    },
    {
      id: 2,
      image: '',
      text: 'Twitter',
      link: '',
    },
    {
      id: 3,
      image: '',
      text: 'Linkedin',
      link: '',
    },
    {
      id: 4,
      image: '',
      text: 'Youtube',
      link: '',
    },
  ];

  return (
    <FooterWrapper>
      <FooterBody>
        <HorList top>
          <FooterLogo>
            <img src={Logo} alt="Company logo" />
          </FooterLogo>
          <FooterInfo>
            <HorList spacing={50} top>
              <div>
                <h4>
                  Contact
                </h4>
                <p>
                  Our number
                </p>
              </div>
              <div>
                <h4>
                  Social
                </h4>
                <div>
                  {
                    contactInfo.map((social) => (
                      <SocialWrapper key={social.id} href={social.link} rel="noopener noreferrer" target="_blank">
                        {social.text}
                      </SocialWrapper>
                    ))
                  }
                </div>
              </div>
            </HorList>
          </FooterInfo>
        </HorList>
      </FooterBody>
      <FooterSub>
        &copy;
        {' '}
        { new Date().getFullYear() }
        {' Safe Travels'}
      </FooterSub>
    </FooterWrapper>
  );
};

export default Footer;
