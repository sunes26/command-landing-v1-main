import AOS from 'aos';
import React, { useEffect } from 'react';
import { isBrowser } from 'react-device-detect';
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';

import Profile from '../components/Profile';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 110%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Member: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isBrowser ? (
        <>
          <ParallaxBanner
            style={{ height: '100vh' }}
            layers={[
              {
                image: '/images/background3.png',
                amount: 0,
                children: (
                  <Container>
                    <h1>1기</h1>
                    <ProfileContainer
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="손승욱"
                        image="/profile_image/profile1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="박지민"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김다애"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="한도명"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                    <ProfileContainer
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      <Profile
                        name="김시윤"
                        image="/profile_image/profile1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김민준"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김슬호"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                  </Container>

                ),
              },
            ]}
          />
          <ParallaxBanner
            style={{ height: '100vh' }}
            layers={[
              {
                image: '/images/background3.png',
                amount: 0,
                children: (
                  <Container>
                    <h1>2기</h1>
                    <ProfileContainer
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="김민서"
                        image="/profile_image/profile1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김기범"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김영민"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="전해성"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="안준형"
                        image="/profile_image/profile1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="오진우"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                    <ProfileContainer
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      <Profile
                        name="신준현"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="조용주"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="이건우"
                        image="/profile_image/profile1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김지안"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="오지민"
                        image="/images/background1.png"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                  </Container>

                ),
              },
            ]}
          />
        </>
      ) : (
        <img style={{ width: '100%' }} src="/images/mobile.png" alt="mobile" />
      )}
    </>
  );
};

export default Member;
