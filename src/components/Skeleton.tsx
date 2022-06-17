import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactElement, useMemo } from 'react'
import { ReactNode } from 'react';


interface Props {
    width?: number;
    height?: number;
    circle?: boolean; // 원형 스켈레톤
    rounded?: boolean; // 모서리 둥근형태
    count?: number;
    unit?: string;
    animation?: boolean;
    color?:string;
    style?: React.CSSProperties;
    children? : React.ReactNode;
}   

const pulseKeyframe = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
    
`;

const pulseAnimation = css`
    animation: ${pulseKeyframe} 1.5s ease-in-out infinite ;
`;

const Base = styled.div<Props>`
    ${({color}) => color && `background-color:${color}` };
    ${({rounded}) => rounded && `border-radius:8px` };
    ${({circle}) => circle && `border-radius:50%` };
    ${({width, height}) => (width || height) && `display:block` };
    ${({animation}) => animation && pulseAnimation };

    width: ${({width, unit}) => width && unit && `${width}${unit}`};
    height: ${({height, unit}) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
    opacity: 0;
`;


export default function Skeleton({animation = true,
    children,
    width,
    height,
    circle,
    rounded,
    count,
    unit = 'px',
    color = '#F4F4F4',
    style} : Props) {

    const content = useMemo(()=> {
        [...Array({length: count})].map(()=>'-').join('')
    } , [count])

  return (
    <Base
    style={style}
    rounded={rounded}
    circle={circle}
    width={width}
    height={height}
    animation={animation}
    unit={unit}
    color={color}

  >
    <Content>{children}</Content>
  </Base>
  )
}
