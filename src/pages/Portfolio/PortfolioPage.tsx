import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  HeadShotContainer,
  HeadShotImage,
  Layout,
  ListMarker,
  Main,
  SectionListContainer,
  AboutMe, SectionContainer, SectionContent, SectionTitle, SectionContentMainInfo, SectionContentStack, SectionContentMain, SectionContentAside, SectionContentMainTitle, SectionContentContainer, SectionContentFormContainer,
  Footer,
  StickyContainer,
  HeadShotSpeech
} from "./PortfolioStyled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import 'animate.css';
import headShotAsset from "../../assets/img/headshot.png";
import tetrisShot from '../../assets/img/tetris shot.png';
import musicContactShot from '../../assets/img/music contact shot.png'
import oxygenShopShot from '../../assets/img/oxygen shop shot.png';
import oxygenPhotosShot from '../../assets/img/oxygen photos shot.png';
import mirandaDashboardShot from '../../assets/img/dashboard shot.png';
import mirandaWebShot from '../../assets/img/web shot.png';
import linkedIn from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';
import { ContactFormComponent } from "../../components/ContactForm/ContactFormComponent";


// Register ScrollToPlugin and ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const PortfolioPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const headShotContainerRef = useRef<HTMLDivElement>(null);
  const headShotImageRef = useRef<HTMLImageElement>(null);
  const headShotSpeechRef = useRef<HTMLImageElement>(null);

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  
  const listMarkerRef = useRef<HTMLDivElement>(null);

  const [visibleSectionInformation, setVisibleSectionInformation] = useState<string>("");
  const [showVisibleSectionInformation, setShowVisibleSectionInformation] = useState<boolean>(false);
  const [visibleSectionIndex, setVisibleSectionIndex] = useState<number>(-1);

  const sectionRefs = [
    { ref: aboutSectionRef, title: "About Me"  },
    { ref: experienceSectionRef, title: "Projects"  },
    { ref: contactSectionRef, title: "Get in touch" },
  ];

  const experienceRefs = useRef<HTMLElement[]>([]);
  const experienceDateRefs = useRef<HTMLElement[]>([]);

  const experienceData = [
    {
      year: '2024',
      title: 'Miranda Dashboard',
      imgSrc: mirandaDashboardShot,
      stack: ['React', 'Custom API', 'Redux', 'Typescript'],
      description: 'A powerful dashboard for managing tasks, monitoring analytics, and integrating custom APIs using Redux for state management.',
    },
    {
      year: '2024',
      title: 'Miranda Web',
      imgSrc: mirandaWebShot,
      stack: ['Javascript', 'Sass'],
      description: 'A responsive web application built with modern JavaScript and styled with Sass for a clean and dynamic user interface.',
    },
    {
      year: '2024',
      title: 'Oxygen Photos',
      imgSrc: oxygenPhotosShot,
      stack: ['React', 'External API', 'Redux'],
      description: 'A photo gallery application that fetches images from an external API, using Redux for state management and React for dynamic rendering.',
    },
    {
      year: '2024',
      title: 'Oxygen Shop',
      imgSrc: oxygenShopShot,
      stack: ['Javascript', 'Cookies', 'BEM'],
      description: 'An e-commerce platform featuring a product catalog, cart functionality, and persistent sessions using cookies, built with a BEM CSS methodology.',
    },
    {
      year: '2023',
      title: 'Music Contact',
      imgSrc: musicContactShot,
      stack: ['Express', 'Node', 'Bootstrap'],
      description: 'A music-related contact form built with Express and Node.js for backend functionality, styled with Bootstrap for responsive design.',
    },
    {
      year: '2023',
      title: 'Tetris game',
      imgSrc: tetrisShot,
      stack: ['Javascript', 'OOP'],
      description: 'A classic Tetris game implemented in JavaScript, featuring object-oriented programming principles for game logic.',
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
          offsetY: sectionIndex === 2 ? 20 : 130, 
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

  // Portfolio Index
  useEffect(() => {
    sectionRefs.forEach((refObject, index) => {
      if (refObject.ref.current) {
        // Create a ScrollTrigger for each section
        ScrollTrigger.create({
          trigger: refObject.ref.current,
          start: "top center-=0%",  // Start when the section's top is in the center of the viewport
          end: "bottom center-=0%", // End when the section's bottom is in the center of the viewport
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

  // HeadShot
  useEffect(() => {
    if (mainRef.current && headShotContainerRef.current && headShotImageRef.current) {
      const timeline_1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "top+=10% top",
          scrub: true,
          markers: false,
        },
      });

      timeline_1.to(headShotContainerRef.current, { 
        x: "-650px",
        width: "835px", 
        height: "52.5vh",
      });
      timeline_1.to(headShotImageRef.current, {
        x: "0px",
        y: "0px",
        height: "260px",
      }, "<");

      const timeline_2 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "bottom-=18% bottom-=20%",
          end: "bottom-=4% bottom",
          scrub: true,
          markers: false,
        },
      });

      timeline_2.to(headShotContainerRef.current, { 
        x: "-650px",
        width: "520px",
      });

    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Experience Section Title
  useEffect(() => {
    if (experienceSectionRef.current) {
      gsap.fromTo(
        experienceSectionRef.current.firstElementChild,
        { 
          opacity: 1,
        },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: experienceSectionRef.current.firstElementChild,
            start: "top center+=150",
            end: "bottom center",
            scrub: true,
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);  
  
  // Section description
  useEffect(() => {
    experienceRefs.current.forEach((experience, index) => {
      const text = experienceData[index].description;

      if (experience) {
        gsap.fromTo(
          experience,
          { 
            opacity: 1, 
            y: 0 
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: experience,
              start: "top center+=150",
              end: "bottom center",
              scrub: true,
              toggleActions: "play none none reverse",
              onUpdate: (self) => {
                const progress = self.progress;
                const viewableText = (progress > 0.2 && progress < 1 && index !== experienceRefs.current.length - 1) || 
                (progress > 0.2 && progress < 0.7)                

                if (viewableText) { 
                  setShowVisibleSectionInformation(true);
                  setVisibleSectionInformation(text);
                  setVisibleSectionIndex(index);
                  console.log('visibleSectionIndex ',index);
                  console.log(!!experienceDateRefs.current[index]);
                } else {
                  setShowVisibleSectionInformation(false);
                  setVisibleSectionIndex(-1);
                  console.log('visibleSectionIndex ',index);
                  console.log(!!experienceDateRefs.current[index]);
                }
              },
              markers: false,
            },
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  /*
  useEffect(() => {
    experienceDateRefs.current.forEach((experienceDate) => {
      if (experienceDate) {
        gsap.fromTo(
          experienceDate,
          {  
           //color: "#dde4ee",
           //backgroundColor: "#0f172a",
          },
          {
            color: "#0f172a",
            backgroundColor: "#dde4ee",
            duration: 0.2,
            scrollTrigger: {
              trigger: experienceDate,
              start: "top center+=150",
              end: "bottom center+=150",
              scrub: true,
              toggleActions: "play none none reverse",
              onUpdate: (self) => { 
 
               console.log(self.progress);
              },
             //  onLeave: () => {
             //    gsap.to(experienceDate, { 
             //     color: "#dde4ee",
             //     backgroundColor: "#0f172a00",
             //     duration:0.4,
             //    });
             //  },
             //  onEnterBack: () => {
             //   gsap.to(experienceDate, {
             //     color: "#0f172a",
             //     backgroundColor: "#dde4ee",
             //     duration: 0.4,
             //   });
             //  },
             //  onUpdate: (self) => {
             //    if (self.direction === -1) {
             //      // Animate back to x: 0 when scrolling reverses
             //      gsap.to(experienceDate, {
             //       color: "#0f172a",
             //       backgroundColor: "#dde4ee",
             //       duration: 0.4,
             //      });
             //    }
             //  },
              markers: true,
            },
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  */


  
  return (
    <>
      <Layout>
        <StickyContainer>
          <Header>
            <SectionListContainer>
              <ListMarker ref={listMarkerRef} className="animate__animated animate__flash animate__infinite animate__slower">{">"}</ListMarker>
              <nav>
                <ul>
                  { 
                    sectionRefs.map((sectionRefObj, index) => (
                      <li key={index} onClick={() => scrollToSection(sectionRefObj.ref)}>{sectionRefObj.title}</li>
                    )) 
                  }
                </ul>
              </nav>
            </SectionListContainer>
            <HeadShotContainer ref={headShotContainerRef}>
              <HeadShotImage ref={headShotImageRef} src={headShotAsset} />
              <HeadShotSpeech ref={headShotSpeechRef}
                className={`animate__animated ${showVisibleSectionInformation ? 'animate__fadeIn' : 'animate__fadeOut animate__faster'}`}
                >
                {visibleSectionInformation}
              </HeadShotSpeech>
            </HeadShotContainer>
          </Header>
          <Footer>
            <ul>
              <li>
                  <a href="https://www.linkedin.com/in/edu-gamboa/">
                    <img src={linkedIn} alt="linkedIn"/>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/physiodevapp">
                    <img src={github} alt="github" />
                  </a>
              </li>
            </ul>
          </Footer>
        </StickyContainer>
        <Main ref={mainRef}>
          <SectionContainer ref={aboutSectionRef} $minheight={100} $justify={"center"}>
            <SectionTitle>Eduardo Gamboa</SectionTitle>
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
            <SectionTitle className="fixed-title">Projects</SectionTitle>
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
                  <SectionContentAside
                    ref={(element) => {
                      if (element) {
                        experienceDateRefs.current[index] = element;
                      }
                    }}
                    key={`date_${index}`}
                    $highlight={experienceData[visibleSectionIndex] ? true : false}
                    >{experience.year}
                  </SectionContentAside>
                  <SectionContentMain>
                    <SectionContentMainTitle>{experience.title}</SectionContentMainTitle>
                    <SectionContentMainInfo>
                    <img src={ experience.imgSrc }/>
                    </SectionContentMainInfo>
                  <SectionContentStack>
                    <ul>
                      {
                        experience.stack.map((technology, index) => (
                          <li key={index}>{technology}</li>
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
          <SectionContainer ref={contactSectionRef} $minheight={100} $justify={"center"}>
            <SectionTitle>Contact</SectionTitle>
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
