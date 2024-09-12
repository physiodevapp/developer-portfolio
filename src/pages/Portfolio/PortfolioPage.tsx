import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  HeadShotContainer,
  HeadShotImage,
  Layout,
  ListMarker,
  Main,
  SectionContentContainer,
  SectionListContainer,
} from "./PortfolioStyled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import headShotAsset from "../../assets/img/headshot.png";
import { AboutMe, SectionContainer, SectionContent, SectionTitle, SectionContentMainInfo, SectionContentStack, SectionContentMain, SectionContentAside, SectionContentMainTitle } from './PortfolioStyled';
import 'animate.css';
import tetrisShot from '../../assets/img/tetris shot.png';
import musicContactShot from '../../assets/img/music contact shot.png'
import oxygenShopShot from '../../assets/img/oxygen shop shot.png';
import oxygenPhotosShot from '../../assets/img/oxygen photos shot.png';
import mirandaDashboardShot from '../../assets/img/dashboard shot.png';
import mirandaWebShot from '../../assets/img/web shot.png';


// Register ScrollToPlugin and ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const PortfolioPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const headShotContainerRef = useRef<HTMLDivElement>(null);
  const headShotImageRef = useRef<HTMLImageElement>(null);

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  
  const aboutSectionTitleRef = useRef<HTMLDivElement>(null);
  const experienceSectionTitleRef = useRef<HTMLDivElement>(null);
  const educationSectionTitleRef = useRef<HTMLDivElement>(null);
  const contactSectionTitleRef = useRef<HTMLDivElement>(null);

  const listMarkerRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    { ref: aboutSectionRef },
    { ref: experienceSectionRef },
    { ref: educationSectionRef },
    { ref: contactSectionRef},
  ];

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: sectionRef.current, offsetY: 20 }, // Scroll with offset for headers
        ease: "power3.inOut",
        onStart: () => {
          const sectionIndex = sectionRefs.findIndex(
            (refObject) => refObject.ref.current === sectionRef.current
          );

          gsap.to(listMarkerRef.current, {
            y: sectionIndex * 35, // Adjust marker position
            duration: 0.4,
            ease: "power3.out",
          });
        }
      });
    }
  };

  useEffect(() => {
    sectionRefs.forEach((refObject, index) => {
      if (refObject.ref.current) {
        // Create a ScrollTrigger for each section
        ScrollTrigger.create({
          trigger: refObject.ref.current,
          start: "top center",  // Start when the section's top is in the center of the viewport
          end: "bottom center", // End when the section's bottom is in the center of the viewport
          onEnter: () => {
            const scrollAnimation = gsap.getTweensOf(window)?.[0];
  
            if (!scrollAnimation || !scrollAnimation.isActive()) {
              gsap.to(listMarkerRef.current, {
                y: index * 35, // Adjust marker position based on section index
                duration: 0.4,
                ease: "power3.out",
              });
            }
          },
          onEnterBack: () => {
            const scrollAnimation = gsap.getTweensOf(window)?.[0];
  
            if (!scrollAnimation || !scrollAnimation.isActive()) {
              gsap.to(listMarkerRef.current, {
                y: index * 35, // Adjust marker position based on section index
                duration: 0.4,
                ease: "power3.out",
              });
            }
          },
          markers: true
        });
      }
    });
  
    // Cleanup: Kill all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionRefs]);
  

  useEffect(() => {
    if (headShotContainerRef.current && mainRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "15% top",
          end: "top+=32% top",
          scrub: true,
          markers: false,
        },
      });

      timeline.to(headShotContainerRef.current, { x: "-50%" });
      timeline.to(headShotImageRef.current, { x: "20%" }, "<");

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <SectionListContainer>
            <ListMarker ref={listMarkerRef} className="animate__animated animate__flash animate__infinite animate__slower">{">"}</ListMarker>
            <ul>
              <li onClick={() => scrollToSection(aboutSectionRef)}>About</li>
              <li onClick={() => scrollToSection(experienceSectionRef)}>Projects</li>
              <li onClick={() => scrollToSection(educationSectionRef)}>Education</li>
              <li onClick={() => scrollToSection(contactSectionRef)}>Contact</li>
            </ul>
          </SectionListContainer>
          <HeadShotContainer ref={headShotContainerRef}>
            <HeadShotImage ref={headShotImageRef} src={headShotAsset} />
          </HeadShotContainer>
        </Header>
        <Main ref={mainRef}>
          <SectionContainer $minheight={100}>
            <SectionTitle>Test</SectionTitle>
            <SectionContent/>
          </SectionContainer>
          <SectionContainer ref={aboutSectionRef}>
            <SectionTitle>About</SectionTitle>
            <SectionContent>
              <AboutMe>
                Dedicated to <b>web development</b> that connects people. I thrive on blending <b>logic and creativity</b> through programming to build practical solutions that foster more meaningful <b>human connections</b>.
              </AboutMe>
            </SectionContent>
          </SectionContainer>
          <SectionContainer ref={experienceSectionRef}>
            <SectionTitle>Projects</SectionTitle>
            <SectionContentContainer>
              <SectionContent>
                <SectionContentAside>2024</SectionContentAside>
                <SectionContentMain>
                  <SectionContentMainTitle>Miranda Dashboard</SectionContentMainTitle>
                  <SectionContentMainInfo>
                  <img src={ mirandaDashboardShot }/>
                  </SectionContentMainInfo>
                <SectionContentStack>
                  <ul>
                    <li>React</li>
                    <li>Custom API</li>
                    <li>Redux</li>
                    <li>Typescript</li>
                  </ul>
                </SectionContentStack>
                </SectionContentMain>
              </SectionContent>
              <SectionContent>
                <SectionContentAside>2024</SectionContentAside>
                <SectionContentMain>
                  <SectionContentMainTitle>Miranda Web</SectionContentMainTitle>
                  <SectionContentMainInfo>
                  <img src={ mirandaWebShot }/>
                  </SectionContentMainInfo>
                <SectionContentStack>
                  <ul>
                    <li>Javascript</li>
                    <li>Sass</li>
                  </ul>
                </SectionContentStack>
                </SectionContentMain>
              </SectionContent>
              <SectionContent>
                <SectionContentAside>2024</SectionContentAside>
                <SectionContentMain>
                  <SectionContentMainTitle>Oxygen Photos</SectionContentMainTitle>
                  <SectionContentMainInfo>
                  <img src={ oxygenPhotosShot }/>
                  </SectionContentMainInfo>
                <SectionContentStack>
                  <ul>
                    <li>React</li>
                    <li>External API</li>
                    <li>Redux</li>
                  </ul>
                </SectionContentStack>
                </SectionContentMain>
              </SectionContent>
              <SectionContent>
                <SectionContentAside>2024</SectionContentAside>
                <SectionContentMain>
                  <SectionContentMainTitle>Oxygen Shop</SectionContentMainTitle>
                  <SectionContentMainInfo>
                  <img src={ oxygenShopShot }/>
                  </SectionContentMainInfo>
                <SectionContentStack>
                  <ul>
                    <li>Javascript</li>
                    <li>Cookies</li>
                    <li>BEM</li>
                  </ul>
                </SectionContentStack>
                </SectionContentMain>
              </SectionContent>
              <SectionContent>
                <SectionContentAside>2023</SectionContentAside>
                <SectionContentMain>
                  <SectionContentMainTitle>Music Contact</SectionContentMainTitle>
                  <SectionContentMainInfo>
                  <img src={ musicContactShot }/>
                  </SectionContentMainInfo>
                <SectionContentStack>
                  <ul>
                    <li>Express</li>
                    <li>Node</li>
                    <li>Bootstrap</li>
                  </ul>
                </SectionContentStack>
                </SectionContentMain>
              </SectionContent>
              <SectionContent>
                <SectionContentAside>2023</SectionContentAside>
                <SectionContentMain>
                  <SectionContentMainTitle>Tetris game</SectionContentMainTitle>
                  <SectionContentMainInfo>
                  <img src={ tetrisShot }/>
                  </SectionContentMainInfo>
                <SectionContentStack>
                  <ul>
                    <li>Javascript</li>
                    <li>OOP</li>
                  </ul>
                </SectionContentStack>
                </SectionContentMain>
              </SectionContent>
            </SectionContentContainer>              
          </SectionContainer>
          <SectionContainer ref={educationSectionRef}>
            <SectionTitle>Education</SectionTitle>
            <SectionContent>
            <SectionContentAside>2024 - Present</SectionContentAside>
              <SectionContentMain>
                <SectionContentMainTitle>Section title</SectionContentMainTitle>
                <SectionContentMainInfo>
                  Fugiat magna veniam esse veniam dolor dolore ullamco nulla
                  veniam. Sunt elit duis reprehenderit dolor occaecat qui
                  pariatur Lorem do excepteur Lorem laboris reprehenderit. Dolor
                  veniam do voluptate aliqua incididunt ullamco culpa. Esse sit
                  consequat sit sint minim ad fugiat reprehenderit eu est ut
                  pariatur non. Enim elit officia consectetur nostrud nisi. In
                  sunt nostrud exercitation pariatur exercitation aliqua ad anim
                  fugiat proident cillum officia reprehenderit sit. Do eu
                  excepteur duis officia consectetur.
                </SectionContentMainInfo>
              <SectionContentStack>
                <ul>
                  <li>Javascript</li>
                  <li>Node JS</li>
                  <li>PHP</li>
                </ul>
              </SectionContentStack>
              </SectionContentMain>
            </SectionContent>
          </SectionContainer>
          <SectionContainer ref={contactSectionRef} $minheight={100}>
            <SectionTitle>Contact</SectionTitle>
            <SectionContent/>
          </SectionContainer>
        </Main>
      </Layout>
    </>
  );
};
