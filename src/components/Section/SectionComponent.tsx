import React, { useEffect, useRef, useState } from 'react'
import { SectionContainer, SectionTitle } from './SectionStyled';

interface SectionComponentProps {
  title: string,
  $minheight?: number
  shouldTrackScroll?: boolean
  onChangeSection: ({title, shouldTrackScroll}: {title: string, shouldTrackScroll: boolean}) => void
}

export const SectionComponent = ({title, $minheight, shouldTrackScroll = false, onChangeSection}: SectionComponentProps) => {

  const sectionTitleRef = useRef<HTMLHeadingElement>(null); 
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  const returnCurrentSection = (title: string) => {
    onChangeSection({title, shouldTrackScroll});
  }

  useEffect(() => {
    let previousY = 0;
    let newScrollDirection: 'up' | 'down' = 'down';

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        const currentY = entry.boundingClientRect.top;

        if (currentY < previousY)
          newScrollDirection = 'down';
        else if (currentY > previousY)
          newScrollDirection = 'up'
        
        if (entry.isIntersecting && newScrollDirection === 'down')
          returnCurrentSection(title);

        previousY = currentY;
      },
      {
        root: null, // default is the viewport
        threshold: 0, // triggers as soon as even 1 pixel of the element is in the viewport
        rootMargin: '0% 0% -50% 0%', // shift the top boundary of the viewport up by 100px
      }
    )

    if (sectionTitleRef.current)
      observer.observe(sectionTitleRef.current);

    return () => {
      if (sectionTitleRef.current)
        observer.unobserve(sectionTitleRef.current);
    }
  }, [])

  useEffect(() => {
    let previousY = 0;
    let newScrollDirection: 'up' | 'down' = 'down';

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        const currentY = entry.boundingClientRect.top;

        if (currentY < previousY) {
          newScrollDirection = 'down';
        } else if (currentY > previousY) {
          newScrollDirection = 'up'
        }        
        
        if (entry.isIntersecting && newScrollDirection === 'up')
          returnCurrentSection(title);

        previousY = currentY;
      },
      {
        root: null, // default is the viewport
        threshold: 0, // triggers as soon as even 1 pixel of the element is in the viewport
        rootMargin: '-50% 0% -5% 0%', // shift the top boundary of the viewport up by 100px
      }
    )

    if (sectionContainerRef.current)
      observer.observe(sectionContainerRef.current);

    return () => {
      if (sectionContainerRef.current)
        observer.unobserve(sectionContainerRef.current);
    }
  }, [])

  return (
    <SectionContainer ref={sectionContainerRef} $minheight={$minheight}>
      <SectionTitle ref={sectionTitleRef}>{title}</SectionTitle>
    </SectionContainer>
  )
}