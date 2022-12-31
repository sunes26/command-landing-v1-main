import AOS from 'aos';
import React, { useEffect } from 'react';
import { isBrowser } from 'react-device-detect';
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';

import FlipCard from '../components/FlipCard';
import Landing from '../components/Landing';
import Service from '../components/Service';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intro = styled.div`
  font-size: 3.375rem;
  font-weight: 800;
  color: #ffffff;
`;

const IntroSub = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #393d52;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #393d52;
`;

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #393d52;
`;

const BlurBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Matrix = styled.img`
  margin: auto;
`;

const BlurBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  height: 60%;
  background-color: #ffffff90;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
  margin: auto;
`;

const SubWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const EB = styled.span`
  font-weight: 800;
`;

const PropelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-image: url('/images/background5.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const LandingOuter = styled.div`
  display: flex;
  max-width: 1120px;
  width: 100%;
  justify-content: space-between;
`;

const LandingInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Foot = styled.div`
  width: 100%;
  height: 5.624rem;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #646464;
  font-weight: 700;
  font-size: 1.25rem;
`;

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isBrowser ? (
        <>
          <ParallaxBanner
            style={{ height: '80vh' }}
            layers={[
              {
                image: '/images/background1.png',
                amount: 0.4,
                children: (
                  <Wrapper>
                    <Intro>
                      <div
                        style={{ lineHeight: '2.725rem' }}
                        data-aos="fade-right"
                        data-aos-delay="500"
                      >
                        여러분의 꿈은
                      </div>
                      <div data-aos="fade-left" data-aos-delay="1000">
                        커맨드와 함께
                      </div>
                    </Intro>
                    <IntroSub data-aos="zoom-in" data-aos-delay="2000">
                      커맨드는 생활 속 IT 혁신을 꿈꾸는 프로젝트를 만들어갑니다
                    </IntroSub>
                  </Wrapper>
                ),
              },
            ]}
          />
          <Container>
            <ParallaxBanner
              style={{ height: '80vh' }}
              layers={[
                {
                  image: '/images/background2.png',
                  amount: 0.1,
                  children: (
                    <RowWrapper style={{ height: '100%' }}>
                      <TitleWrapper style={{ margin: 'auto' }}>
                        <SubTitle
                          style={{ lineHeight: '4rem' }}
                          data-aos="fade-right"
                          data-aos-delay="100"
                        >
                          B E L I E F
                        </SubTitle>
                        <Title>
                          <div
                            style={{ lineHeight: '2.25rem' }}
                            data-aos="fade-right"
                            data-aos-delay="200"
                          >
                            사소한 관심이
                          </div>
                          <div data-aos="fade-right" data-aos-delay="300">
                            생활의 혁신으로
                          </div>
                        </Title>
                      </TitleWrapper>
                      <Content style={{ margin: 'auto' }}>
                        <div data-aos="fade-left" data-aos-delay="500">
                          <EB>&apos;불편&apos;은 늘 &apos;발명&apos;의 원동력</EB>
                          이 됩니다.
                        </div>
                        <div data-aos="fade-left" data-aos-delay="500">
                          커맨드는 주변의 불편을 프로젝트를 통해 편의로 바꾸려합니다.
                        </div>
                        <div data-aos="fade-left" data-aos-delay="500">
                          우리의 프로젝트가 아닌
                          {' '}
                          <EB>모두를 위한 프로젝트</EB>
                          를 진행함으로써
                        </div>
                        <div data-aos="fade-left" data-aos-delay="500">
                          <EB>기술 혁신과 사회 공헌</EB>
                          이라는 두가지 목표를 추구합니다.
                        </div>
                      </Content>
                    </RowWrapper>
                  ),
                },
              ]}
            />
            <ParallaxBanner
              style={{ height: '100vh' }}
              layers={[
                {
                  image: '/images/background3.png',
                  amount: 0.1,
                  children: (
                    <BlurBoxWrapper>
                      <BlurBox>
                        <TitleWrapper>
                          <SubTitle data-aos="zoom-in" data-aos-delay="100">
                            O P P O R T U N I T Y
                          </SubTitle>
                          <Title style={{ marginTop: '1.375rem' }}>
                            <div
                              style={{ lineHeight: '2.25rem' }}
                              data-aos="zoom-in"
                              data-aos-delay="200"
                            >
                              새로운 기술로
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="400">
                              당신의 일상을 더 새롭게
                            </div>
                          </Title>
                        </TitleWrapper>
                        <Content style={{ marginTop: '3.313rem' }}>
                          <div data-aos="fade-up" data-aos-delay="500">
                            커맨드는 동아리원 각자가 디자인과 개발부터 기획, 마케팅까지
                          </div>
                          <div data-aos="fade-up" data-aos-delay="500">
                            여러 IT분야에서
                            {' '}
                            <EB>각자의 소질을 찾고 역량을 넓혀나가는 진취적인 기회</EB>
                            를
                            마련합니다.
                          </div>
                          <br />
                        </Content>
                        <Content style={{ marginTop: '1.688rem' }}>
                          <div data-aos="fade-up" data-aos-delay="800">
                            더불어 동아리원 개인의 능력을 프로젝트라는 매개체를 통해 이를 융합시켜
                          </div>
                          <div data-aos="fade-up" data-aos-delay="800">
                            단순히 개인의 발전에 국한되지 않고
                            {' '}
                            <EB>다양한 IT 분야로 뻗어나갈 수 있는 기회</EB>
                            를 제공합니다.
                          </div>
                        </Content>
                      </BlurBox>
                    </BlurBoxWrapper>
                  ),
                },
              ]}
            />
            <ParallaxBanner
              style={{ height: '100vh' }}
              layers={[
                {
                  image: '/images/background4.png',
                  amount: 0.1,
                  children: (
                    <SubWrapper>
                      <TitleWrapper style={{ margin: 'auto' }}>
                        <SubTitle
                          style={{ color: '#ffffff' }}
                          data-aos="fade-right"
                          data-aos-delay="100"
                        >
                          D E P A R T M E N T
                        </SubTitle>
                        <Title
                          data-aos="fade-right"
                          data-aos-delay="300"
                          style={{ color: '#ffffff' }}
                        >
                          부서 및 분야 소개
                        </Title>
                        <Content style={{ marginTop: '3rem', color: '#ffffff' }}>
                          <div data-aos="fade-right" data-aos-delay="500">
                            커맨드는
                            {' '}
                            <EB>기능별 매트릭스 조직</EB>
                            {' '}
                            형태로
                          </div>
                          <div data-aos="fade-right" data-aos-delay="500">
                            프로젝트가 추진되면 이에 필요한 인원을
                          </div>
                          <div data-aos="fade-right" data-aos-delay="500">
                            배정하는 방식을 통해
                            {' '}
                            <EB>효율적인 인적자원 운용</EB>
                            과 동시에
                          </div>
                          <div data-aos="fade-right" data-aos-delay="500">
                            <EB>역량을 폭넓게 계발</EB>
                            할 수 있는 기회를 마련합니다.
                          </div>
                          <br />
                          <br />
                          <div data-aos="fade-right" data-aos-delay="500">
                            자신에게 맞는 부서를 선택해
                            {' '}
                            <EB>다양한 기술을 배우고</EB>
                          </div>
                          <div data-aos="fade-right" data-aos-delay="500">
                            커맨드 프로젝트에 함께 동참하세요.
                          </div>
                        </Content>
                      </TitleWrapper>
                      <Matrix
                        data-aos="fade"
                        data-aos-delay="800"
                        src="/images/matrix.png"
                        alt="matrix"
                      />
                    </SubWrapper>
                  ),
                },
              ]}
            />
            <PropelContainer>
              <SubTitle style={{ marginTop: '11.5rem' }} data-aos="fade" data-aos-delay="100">
                P R O P E L
              </SubTitle>
              <Title>
                <div
                  style={{ lineHeight: '2.25rem', marginTop: '1.563rem' }}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  오늘의 프로젝트가
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                  내일의 우리를.
                </div>
              </Title>
              <SubTitle
                style={{ color: '#c4c4c4', marginTop: '5.063rem' }}
                data-aos="fade"
                data-aos-delay="100"
              >
                L A N D I N G
              </SubTitle>
              <LandingOuter>
                <LandingInner>
                  <Landing
                    src="/images/dimigoin.png"
                    description="한국디지털미디어고등학교 교내 인트라넷"
                    title="디미고인"
                  />
                  <Landing
                    src="/images/eroom.png"
                    description="허위매물 없는 쉬운 부동산 매물 찾기 서비스"
                    title="이룸"
                  />
                  <Landing
                    src="/images/dimigoin mobile.png"
                    description="한국디지털미디어고등학교 교내 인트라넷"
                    title="디미고인 모바일"
                  />

                  <Landing
                    src="/images/dimitest.png"
                    description="디미고인 맞춤 직군 추천 테스트"
                    title="디미고인 IT성향 테스트"
                  />
                </LandingInner>
                <LandingInner>
                  <Landing
                    src="/images/dimi petition.png"
                    description="한국디지털미디어고등학교 온라인 건의 서비스"
                    title="디미청원"
                  />
                  <Landing
                    src="/images/openleague.png"
                    description="온라인 게임 에디터리얼 참여 플랫폼"
                    title="오픈리그"
                  />
                  <Landing
                    src="/images/rounge.png"
                    description="온라인 가상 오픈 전시회 서비스"
                    title="라운지"
                  />
                  <Landing
                    src="/images/superstar dimigo.png"
                    description="디미고 축제 ‘한기’ 구성 프로그램 투표 서비스"
                    title="슈퍼스타 디미고"
                  />
                </LandingInner>
              </LandingOuter>
              <SubTitle
                style={{ color: '#c4c4c4', marginTop: '5.063rem', lineHeight: '9rem' }}
                data-aos="fade"
                data-aos-delay="100"
              >
                S E R V I C E
              </SubTitle>
              <ServiceContainer>
                <Service
                  src="/images/lucid dream.png"
                  title="Lucid Dream"
                  description="노트북에 최적화된 화면 잠금 + 키보드 잠금 유틸리티 프로그램"
                />
                <Service
                  src="/images/dark chapter.png"
                  title="Dark Chapter"
                  description="흑역사를 저장하고 공유할 수 있는 플랫폼"
                />
                <Service
                  src="/images/quizlet helper.png"
                  title="Quizlet Helper"
                  description="퀴즐렛 문제 언어를 인식하여 한영키를 자동으로 눌러주는 유틸리티 프로그램"
                />
                <Service
                  src="/images/portfolio.png"
                  title="Portfolio"
                  description="라이브러리를 사용안하고 순수 HTML, CSS, JS만 사용해 다양한 효과를 구현한 포트폴리오 사이트"
                />
                <Service
                  src="/images/instalock.png"
                  title="Instalock"
                  description="League of Legends에서 클라이언트를 인식하여 수락을 자동으로 눌러주고 라인과 챔피언까지 선택해주는 매크로 프로그램"
                />
                <Service
                  src="/images/translator.png"
                  title="TrAnSlAtOr"
                  description="한국어를 입력하면 한국인만 알아볼 수 있는 문장으로 바꿔주는 사이트"
                />
                <Service
                  src="/images/dimigo zoom attendance check.png"
                  title="Dimigo Zoom Attendance Check"
                  description="온라인 수업에 접속하면 자동으로 스프레드시트에 기록하고 지각자를 구분할 수 있는 서버"
                />
                <Service
                  src="/images/see in.png"
                  title="See In"
                  description="시를 작성하고 공유할 수 있는 플랫폼"
                />
              </ServiceContainer>
            </PropelContainer>
            <ParallaxBanner
              style={{ height: '100vh' }}
              layers={[
                {
                  image: '/images/background6.png',
                  amount: 0,
                  children: (
                    <FooterContainer>
                      <FlipCard
                        textFront={(
                          <span>
                            혁신에 동참할
                            <br />
                            여러분을 찾습니다
                          </span>
                        )}
                        textBack="지금 바로 지원하기 ➝"
                        link="https://dimigo.in/circle"
                        color="#ccd2ff"
                      />
                      <FlipCard
                        textFront={(
                          <span>
                            더 궁금한 점이
                            <br />
                            있으신가요?
                          </span>
                        )}
                        textBack="인스타그램 ➝"
                        link="https://www.instagram.com/command_2022/"
                        color="#e1306c"
                      />
                    </FooterContainer>
                  ),
                },
              ]}
            />
          </Container>
          <Foot>Copyright Command 2022. All rights reserved.</Foot>
        </>
      ) : (
        <img style={{ width: '100%' }} src="/images/mobile.png" alt="mobile" />
      )}
    </>
  );
};

export default Home;
