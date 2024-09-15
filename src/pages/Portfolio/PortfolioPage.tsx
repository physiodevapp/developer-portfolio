import React, { useEffect, useRef } from "react";
import {
  Header,
  Layout,
  IndexMarker,
  Main,
  Index,
  AboutMe, SectionContainer, SectionContent, SectionTitle, SectionContentMainInfo, SectionContentStack, SectionContentMain, SectionContentAside, SectionContentMainTitle, SectionContentContainer, SectionContentFormContainer,
  Profile,
  Name,
  Position,
  Maxim,
  MaximQuotes,
  SocialMedia
} from "./PortfolioStyled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import 'animate.css';
import headShotAsset from "../../assets/img/headshot.png";
import tetrisShot from '../../assets/img/tetris shot.png';
import musicContactShot from '../../assets/img/music contact shot.png'
import oxygenShopShot from '../../assets/img/oxygen shop shot.png';
import oxygenPhotosShot from '../../assets/img/oxygen photos shot.png';
import mirandaDashboardShot from '../../assets/img/dashboard shot.png';
import mirandaWebShot from '../../assets/img/web shot.png';
import { ContactFormComponent } from "../../components/ContactForm/ContactFormComponent";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { ReactTyped } from "react-typed";

// Register ScrollToPlugin and ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const PortfolioPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const socialMediaContainerRef = useRef<HTMLDivElement>(null);
  const socialMediaRef = useRef<HTMLUListElement>(null);

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  
  const listMarkerRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    { ref: aboutSectionRef, title: "About Me"  },
    { ref: experienceSectionRef, title: "Projects"  },
    { ref: contactSectionRef, title: "Get in touch" },
  ];

  const experienceRefs = useRef<HTMLElement[]>([]);

  const experienceData = [
    {
      year: '2024',
      title: 'Miranda Dashboard',
      imgSrc: mirandaDashboardShot,
      stack: ['React', 'Custom API', 'Redux', 'Typescript'],
      description: 'A dashboard for managing tasks, monitoring analytics, and integrating custom APIs using Redux for state management.',
      repoSrc: 'https://github.com/physiodevapp/dashboard-miranda',
      demoSrc: 'http://physiodev-miranda-dashboard.s3-website.eu-north-1.amazonaws.com/login',
    },
    {
      year: '2024',
      title: 'Miranda Web',
      imgSrc: mirandaWebShot,
      stack: ['Javascript', 'Sass'],
      description: 'A responsive web application built with modern JavaScript and styled with Sass for a clean and dynamic user interface.',
      repoSrc: 'https://github.com/physiodevapp/web-miranda',
      demoSrc: 'https://physiodevapp.github.io/web-miranda/',
    },
    {
      year: '2024',
      title: 'Oxygen Photos',
      imgSrc: oxygenPhotosShot,
      stack: ['React', 'External API', 'Redux'],
      description: 'A photo gallery application that fetches images from an external API, using Redux for state management and React for dynamic rendering.',
      repoSrc: 'https://github.com/physiodevapp/oxygen-photos',
      demoSrc: 'http://physiodev-photography.s3-website.eu-north-1.amazonaws.com/',
    },
    {
      year: '2024',
      title: 'Oxygen Shop',
      imgSrc: oxygenShopShot,
      stack: ['Javascript', 'Cookies', 'BEM'],
      description: 'An e-commerce platform featuring a product catalog, cart functionality, and persistent sessions using cookies, built with a BEM CSS methodology.',
      repoSrc: 'https://github.com/physiodevapp/oxygen-shop',
      demoSrc: 'https://physiodevapp.github.io/oxygen-shop/',
    },
    {
      year: '2023',
      title: 'Music Contact',
      imgSrc: musicContactShot,
      stack: ['Express', 'Node', 'Bootstrap'],
      description: 'A music-related contact form built with Express and Node.js for backend functionality, styled with Bootstrap for responsive design.',
      repoSrc: 'https://github.com/music-contact/music-contact',
      demoSrc: 'https://music-contact.fly.dev/',
    },
    {
      year: '2023',
      title: 'Tetris game',
      imgSrc: tetrisShot,
      stack: ['Javascript', 'OOP'],
      description: 'A classic Tetris game implemented in JavaScript, featuring object-oriented programming principles for game logic.',
      repoSrc: 'https://github.com/physiodevapp/tetris',
      demoSrc: 'https://physiodevapp.github.io/tetris/',
    },
  ];

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const sectionIndex = sectionRefs.findIndex(
        (refObject) => refObject.ref.current === sectionRef.current
      );

      gsap.to(window, {
        duration: 1.4,
        scrollTo: { 
          y: sectionRef.current, 
          offsetY: 0, 
        }, // Scroll with offset for headers
        ease: "power3.inOut",
        onStart: () => {
          gsap.to(listMarkerRef.current, {
            y: sectionIndex * 35, // Adjust marker position
            duration: 0.4,
            ease: "power3.out",
          });
        }
      });
    }
  };

  const animateSocialMedia = () => {
    if (mainRef.current && socialMediaContainerRef.current && contactSectionRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "bottom-=450 center+=50",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });

      const xValue = `${socialMediaContainerRef.current.clientWidth + 50}px`
      timeline.to(socialMediaContainerRef.current, { 
        x: xValue,
        duration: 1,
      });

      timeline.to(socialMediaContainerRef.current.querySelectorAll('span'), { 
        opacity: 0.6,
        duration: 1.4,
      }, "<");

      timeline.to(socialMediaContainerRef.current.querySelectorAll('li'), { 
        opacity: 1,
        duration: 1.4,
      }, "<");

      timeline.to(socialMediaRef.current, { 
        x: "10px",
        duration: 1,
      }, "<");
    }
  }

  // Portfolio Index
  useEffect(() => {
    sectionRefs.forEach((refObject, index) => {
      if (refObject.ref.current) {
        // Create a ScrollTrigger for each section
        ScrollTrigger.create({
          trigger: refObject.ref.current,
          start: "top center",
          end: "bottom center",
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
          markers: false,
        });
      }
    });
  
    // Cleanup: Kill all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);  

  // Social Media
  useEffect(() => {
    // Initial animation on mount
    animateSocialMedia();

    // Add resize listener to recalculate animation on window resize
    const handleResize = () => {
      animateSocialMedia();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  return (
    <>
      <Layout>
        <Header>
          <Profile>
            <Name>Eduardo Gamboa</Name>
            <Position>Full Stack Developer</Position>
            <Maxim>
              <MaximQuotes/>
              <ReactTyped 
                strings={[
                  '<span style="color: #00eaff; font-weight: 600;">&lt;</span>Better code<span style="color: #00eaff; font-weight: 600;">&gt;</span>',
                  '<span style="color: #00eaff; font-weight: 600;">&lt;</span>Better lives<span style="color: #00eaff; font-weight: 600;"><span style="font-size: 1.2rem; line-height: 1.2rem; vertical-align: middle; display: inline-flex; padding: 0rem 0rem 0.3rem 0.3rem;">/</span>&gt;</span>',
                ]}
                typeSpeed={40} 
                backSpeed={60}
                backDelay={4000}
                startDelay={0}
                loop={true}
                smartBackspace={true}
                />
              <MaximQuotes/>
            </Maxim>
          </Profile>
          <Index>
            <IndexMarker ref={listMarkerRef}>{">"}</IndexMarker>
            <nav>
              <ul>
                { 
                  sectionRefs.map((sectionRefObj, index) => (
                    <li key={index} onClick={() => scrollToSection(sectionRefObj.ref)}>{sectionRefObj.title}</li>
                  )) 
                }
              </ul>
            </nav>
          </Index>
          <SocialMedia ref={socialMediaContainerRef}>
            <span>Contact me through:</span>
            <ul ref={socialMediaRef}>
              <li><FaGithub size={30} onClick={() => window.open("https://github.com/physiodevapp")}/></li>
              <li><FaLinkedin size={30} onClick={() => window.open("https://www.linkedin.com/in/edu-gamboa/")}/></li>
            </ul>
            <span>, or via</span> 
          </SocialMedia>
        </Header>
        <Main ref={mainRef}>
          <SectionContainer ref={aboutSectionRef} $minheight={100} className="mobile">
            <SectionTitle className="mobile">About</SectionTitle>
            <SectionContent>
              <AboutMe>
                <p>
                  Dedicated to <b>web development</b> that connects people. I thrive on blending <b>logic and creativity</b> through programming to build practical solutions that foster more meaningful <b>human connections</b>.
                </p>
                <p>
                  When I'm not coding, I love to go trekking, play chess, snorkel, or explore new places!
                </p>
              </AboutMe>
            </SectionContent>
          </SectionContainer>
          <SectionContainer ref={experienceSectionRef}>
            <SectionTitle>Projects</SectionTitle>
            <SectionContentContainer>
            {
              experienceData.map((experience, index) => (
                <SectionContent
                  ref={(element) => {
                    if(element) {
                      experienceRefs.current[index] = element;
                    }
                  }}
                  key={index}
                  >
                  <SectionContentAside key={`date_${index}`} $imgSrc={ experience.imgSrc }>
                    <figure>
                      <img src={ experience.imgSrc }/>
                    </figure>
                  </SectionContentAside>
                  <SectionContentMain>
                    <SectionContentMainTitle>
                      {experience.title}
                      <FaGithub size={24} onClick={() => window.open(experience.repoSrc)}/>
                      <GrDeploy size={24} onClick={() => window.open(experience.demoSrc)}/>
                    </SectionContentMainTitle>
                    <SectionContentMainInfo>
                    { experience.description }
                    </SectionContentMainInfo>
                  <SectionContentStack>
                    <ul>
                      {
                        experience.stack.map((technology, index) => (
                          <li key={index}>{ technology }</li>
                        ))
                      }
                    </ul>
                  </SectionContentStack>
                  </SectionContentMain>
                </SectionContent>
              ))
            }
            </SectionContentContainer>
          </SectionContainer>
          <SectionContainer ref={contactSectionRef} $minheight={100} className="mobile">
            <SectionTitle className="mobile">Get in touch</SectionTitle>
            <SectionContent>
              <SectionContentContainer>
                <SectionContentFormContainer>
                  <ContactFormComponent/>
                </SectionContentFormContainer>
              </SectionContentContainer>
            </SectionContent>
          </SectionContainer>
        </Main>
      </Layout>
    </>
  );
};
