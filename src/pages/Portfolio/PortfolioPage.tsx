import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  HeadShotContainer,
  HeadShotImage,
  Layout,
  ListMarker,
  Main,
  SectionListContainer,
} from "./PortfolioStyled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import headShotAsset from "../../assets/img/headshot.png";
import { AboutMe, SectionContainer, SectionContent, SectionTitle, SectionContentMainDescription, SectionContentStack, SectionContentMain, SectionContentAside, SectionContentMainTitle } from './PortfolioStyled';

// Register ScrollToPlugin and ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const PortfolioPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const headShotContainerRef = useRef<HTMLDivElement>(null);
  const headShotImageRef = useRef<HTMLImageElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const listMarkerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, index: number) => { // click
    if (sectionRef.current && !timelineRef.current?.isActive()) {
      const targetPosition = sectionRef.current.offsetTop; // Get the vertical position of the element
  
      const timeline = gsap.timeline({
        defaults: { duration: 0.8, ease: "power2.inOut" }, // Set duration and ease for both animations
      });
  
      timeline.to(window, {
        scrollTo: {
          y: targetPosition,
          offsetY: 0 // Scroll to the element's vertical position with offset
        },
      });
  
      timeline.to(listMarkerRef.current, {
        y: index * 35, // Adjust based on the list item height
      }, 0); // Delay between animations

      timelineRef.current = timeline;
    }
  };  

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

  useEffect(() => {
    if (listMarkerRef.current && mainRef.current) {
      const sections = [
        topSectionRef.current,
        aboutSectionRef.current,
        experienceSectionRef.current,
        educationSectionRef.current,
        contactSectionRef.current,
      ];

      const updateListMarkerPosition = (index: number) => { // mouse
        if (listMarkerRef.current && !timelineRef.current?.isActive()) {
          const timeline = gsap.timeline({
            defaults: { duration: 0.4, ease: "power2.inOut" }, // Set duration and ease for both animations
          });

          timeline.to(listMarkerRef.current, {
            y: index * 35, // Adjust based on the list item height
          }, 0); // Delay between animations

          timelineRef.current = timeline;
        }
      };

      const scrollTriggers = sections
        .map((section, index) => {
          if (section) {
            return ScrollTrigger.create({
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true,
              onEnter: () => updateListMarkerPosition(index),
              onLeave: () => updateListMarkerPosition(index),
              onEnterBack: () => updateListMarkerPosition(index),
              onLeaveBack: () => updateListMarkerPosition(index),
              markers: false,
            });
          }
          return null;
        })
        .filter((trigger) => trigger !== null);

      return () => {
        scrollTriggers.forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill(); // Kill the current timeline if needed
      }
    };
  }, []);
  

  return (
    <>
      <Layout>
        <Header>
          <SectionListContainer>
            <ListMarker ref={listMarkerRef}>{">"}</ListMarker>
            <ul>
              <li onClick={() => scrollToSection(aboutSectionRef, 0)}>About</li>
              <li onClick={() => scrollToSection(experienceSectionRef, 1)}>Projects</li>
              <li onClick={() => scrollToSection(educationSectionRef, 2)}>Education</li>
              <li onClick={() => scrollToSection(contactSectionRef, 3)}>Contact</li>
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
            <SectionTitle >Projects</SectionTitle>
            <SectionContent>
            <SectionContentAside>2024 - Present</SectionContentAside>
              <SectionContentMain>
                <SectionContentMainTitle>Section title</SectionContentMainTitle>
                <SectionContentMainDescription>
                  Fugiat magna veniam esse veniam dolor dolore ullamco nulla
                  veniam. Sunt elit duis reprehenderit dolor occaecat qui
                  pariatur Lorem do excepteur Lorem laboris reprehenderit. Dolor
                  veniam do voluptate aliqua incididunt ullamco culpa. Esse sit
                  consequat sit sint minim ad fugiat reprehenderit eu est ut
                  pariatur non. Enim elit officia consectetur nostrud nisi. In
                  sunt nostrud exercitation pariatur exercitation aliqua ad anim
                  fugiat proident cillum officia reprehenderit sit. Do eu
                  excepteur duis officia consectetur.
                </SectionContentMainDescription>
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
          <SectionContainer ref={educationSectionRef}>
            <SectionTitle >Education</SectionTitle>
            <SectionContent>
            <SectionContentAside>2024 - Present</SectionContentAside>
              <SectionContentMain>
                <SectionContentMainTitle>Section title</SectionContentMainTitle>
                <SectionContentMainDescription>
                  Fugiat magna veniam esse veniam dolor dolore ullamco nulla
                  veniam. Sunt elit duis reprehenderit dolor occaecat qui
                  pariatur Lorem do excepteur Lorem laboris reprehenderit. Dolor
                  veniam do voluptate aliqua incididunt ullamco culpa. Esse sit
                  consequat sit sint minim ad fugiat reprehenderit eu est ut
                  pariatur non. Enim elit officia consectetur nostrud nisi. In
                  sunt nostrud exercitation pariatur exercitation aliqua ad anim
                  fugiat proident cillum officia reprehenderit sit. Do eu
                  excepteur duis officia consectetur.
                </SectionContentMainDescription>
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
