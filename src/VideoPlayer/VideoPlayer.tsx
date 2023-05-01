
import React, { useCallback, useEffect,useRef, useState,  } from 'react';
import { animated, useSpring } from '@react-spring/web';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import useMeasure from 'react-use-measure';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';
import useMatchMedia from 'utils/matchMedia';

interface VideoPlayerProps {
  videosrc: string,
  hasControls?: boolean
}

const ControlsLayer = styled(animated.div)`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  display: none;
  white-space: nowrap;

  ${media('small')`
    display: block;
  `}
`

const MobileControlsLayer = styled.div`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media('small')`
    display: none;
  `}
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--theme-container-radius);
  overflow: hidden;
  mask-image: -webkit-radial-gradient(white, black);
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  ${media('small')`
    border-radius: calc(var(--theme-container-radius) / 2);
  `}
`

const VideoTag = styled.video.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) || ['webkit-playsinline'].includes(prop) || ['x5-playsinline'].includes(prop) || ['x5-video-player-type'].includes(prop) || ['x5-video-orientation'].includes(prop),
})` 
  position: relative;
  width: 100%;
  display: block;
`;

export const VideoPlayer = ({
  videosrc,
  hasControls = false,
  ...props
}: VideoPlayerProps) => {
  const isDesktop = useMatchMedia('(min-width:768px)');
  const [ref, bounds] = useMeasure({ scroll: true });
  const [ propsSpring, api ] = useSpring(() => ({ to: {left: 0, top: 0}, immediate: true }))
  const videoRef = useRef() as any;
  const [ IsHovered, setIsHovered ] = useState<boolean>(false);
  const [ IsPlaying, setIsPlaying ] = useState<boolean>(false);
  const onClick = useCallback(() => {
    if(IsPlaying) {
      onPause();
    } else {
      onPlay();
    }
  }, [IsPlaying, isDesktop])

  const onPlay = useCallback(() => {
    if(videoRef.current) {
      if(!isDesktop) {
        videoRef.current.controls = true;
      }
      const playpromise = videoRef.current.play();
      playpromise.then(() => {
        setIsPlaying(true)
        
      }).catch((error:any) => {
        console.log(error)
      })
    }
  }, [isDesktop])

  const onPause = useCallback(() => {
    if(videoRef.current) {
      videoRef.current.pause();
    }
  }, [])

  const setPause = useCallback(() => {
    videoRef.current.controls = false;
    setIsPlaying(false);
  }, [isDesktop])

  

  const setCursorPosition = useCallback((e: React.MouseEvent) => {
   
    if(bounds) {
      const containerBounding = bounds;
      let x = e.clientX - containerBounding.x;
      let y = e.clientY - containerBounding.y;

      if(x > containerBounding.width) {
        x = containerBounding.width;
      } else if (x < 0) {
        x = 0;
      };

      if(y > containerBounding.height) {
        y = containerBounding.height;
      } else if (y < 0) {
        y = 0;
      };

      api.start({
        left: x,
        top: y,
        immediate: true
      })
    }
  }, [bounds]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPosition(e);
  }, [setCursorPosition])

  useEffect(() => {
    const reference = videoRef.current;
    reference.addEventListener("pause", setPause)

    return () => {
      reference.removeEventListener("pause", setPause);
    }
  }, [setPause])
  return (
    <Wrapper
      ref={ref}
      onMouseMove={onMouseMove} 
      onClick={isDesktop ? onClick : () => {}}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
    > 
      {IsHovered && <ControlsLayer style={propsSpring}>
        { IsPlaying ? <PauseButton/> : <PlayButton/>}
      </ControlsLayer>}

      <MobileControlsLayer>
        { !IsPlaying && <PlayButton onClick={onClick}/> }
      </MobileControlsLayer>
      <VideoTag ref={videoRef} {...props} webkit-playsinline="true" x5-video-player-type="h5" disablePictureInPicture playsInline loop controlsList="nodownload noplaybackrate">
        <source src={`${videosrc}#t=0.1`} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoTag>
    </Wrapper>
  );
};


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  cursor: none;
  user-select: none;
  background: rgba(221, 221, 221, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 100px;
  padding: 8px 14px;
  color: #222;
  ${fontstack.default};
  ${type('caption01')}
  

  ${media('small')`
    transform: translate(-50%, -50%);
  `}

  &:hover {
    background: rgba(var(--theme-white), 1);

  }
`

const PauseWrapper = styled(ButtonWrapper)`
  display: none;
  ${media('small')`
    display: flex;
  `}
`



interface PlayButtonProps extends React.HTMLAttributes<HTMLElement> {
}

const PlayButton = ({
  ...props
}:PlayButtonProps) => {


  return (
    <ButtonWrapper {...props}>
      ▶ Play
    </ButtonWrapper>
  )
};

interface PauseButtonProps extends React.HTMLAttributes<HTMLElement> {
}

const PauseButton = ({
  ...props
}:PauseButtonProps) => {


  return (
    <PauseWrapper {...props}>
      ⏏ Stop
    </PauseWrapper>
  )
};