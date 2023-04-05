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
                    <h1>19기</h1>
                    <ProfileContainer
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="손승욱(동장)"
                        image="/profile_image/sonseunguk.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="박지민"
                        image="/profile_image/parkjimin.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김다애"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="한도명"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                    <ProfileContainer
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      <Profile
                        name="김시윤(개발팀장)"
                        image="/profile_image/kimsiyun.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김민준"
                        image="/profile_image/kimminjun.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김슬호"
                        image="/profile_image/No_Image.jpg"
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
                    <h1>20기</h1>
                    <ProfileContainer
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="김민서(동장)"
                        image="/profile_image/kimminseo.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김기범(디자인팀장)"
                        image="/profile_image/kimkibum.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김영민"
                        image="/profile_image/kimyeongmin.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="전해성(개발팀장)"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                    <ProfileContainer
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      <Profile
                        name="안준형(부동장)"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="오진우"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="신준현"
                        image="/profile_image/No_Image.jpg"
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
                    <h1>21기</h1>
                    <ProfileContainer
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="조용주"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="이건우"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="김지안"
                        image="/profile_image/kimjian.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="오지민"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                    <ProfileContainer
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="박나연"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="서지오"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="송지연"
                        image="/profile_image/No_Image.jpg"
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
                    <h1>22기</h1>
                    <ProfileContainer
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="박태건"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="이윤주"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="이재강"
                        image="/profile_image/No_image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="이혜림"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                    </ProfileContainer>
                    <ProfileContainer
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      <Profile
                        name="이채은"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="최우주"
                        image="/profile_image/No_Image.jpg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      />
                      <Profile
                        name="정준영"
                        image="/profile_image/No_Image.jpg"
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
