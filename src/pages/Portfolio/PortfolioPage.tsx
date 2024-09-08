import React, { useEffect, useRef, useState } from "react";
import { Header, HeadShot, Layout, Main } from "./PortfolioStyled";
import { SectionComponent } from "../../components/Section/SectionComponent";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const PortfolioPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const headShotRef = useRef<HTMLDivElement>(null);
  const childElementRef = useRef<HTMLDivElement>(null);

  interface SectionInterface {
    title: string;
    shouldTrackScroll: boolean;
  }
  const [section, setSection] = useState<SectionInterface>({
    title: "",
    shouldTrackScroll: false,
  });

  useEffect(() => {
    console.log(section);
    gsap.registerPlugin(ScrollTrigger);

    if (headShotRef.current && mainRef.current) {

      const timeline = gsap.timeline(
        {
          scrollTrigger: {
            trigger: mainRef.current,
            start: "17% top",
            end: "top+=40% top",
            scrub: true,
            markers: false,              
            onUpdate: (self) => console.log('Scroll progress:', self.progress),
          }
        }
      );

      timeline.to(headShotRef.current, {
        x: "-50%",
      });

      timeline.to(
        childElementRef.current,
        {
          x: "20%",  // Move it to the right
        },
        "<" // Start at the same time as the previous animation
      );
    }


    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); 
    };

  }, [section.shouldTrackScroll]);

  return (
    <>
    <Layout>
      <Header>
        <div>
          <a href="http://">{section.title}</a>
        </div>
        <HeadShot ref={headShotRef}>
          <div ref={childElementRef}>
            {/* Your content for child element here */}
            Child Element
          </div>
        </HeadShot>        
      </Header>
      <Main ref={mainRef}>
        <SectionComponent
          title="test"
          $minheight={100}
          shouldTrackScroll={true}
          onChangeSection={({ title, shouldTrackScroll }) => {
            setSection({ title, shouldTrackScroll });
          }}
        />
        <SectionComponent
          title="about"
          onChangeSection={({ title, shouldTrackScroll }) => {
            setSection({ title, shouldTrackScroll });
          }}
        />
        <SectionComponent
          title="experience"
          onChangeSection={({ title, shouldTrackScroll }) => {
            setSection({ title, shouldTrackScroll });
          }}
        />
        <SectionComponent
          title="education"
          onChangeSection={({ title, shouldTrackScroll }) => {
            setSection({ title, shouldTrackScroll });
          }}
        />
        <SectionComponent
          title="contact"
          $minheight={100}
          onChangeSection={({ title, shouldTrackScroll }) => {
            setSection({ title, shouldTrackScroll });
          }}
        />
      </Main>
    </Layout>
    </>
  );
};
