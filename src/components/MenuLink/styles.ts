"use client";

import styled, { DefaultTheme, css } from 'styled-components';
import button_2_image from "@/assets/images/pixel_assets/buttons/button_2.png";

import button_4_image from "@/assets/images/pixel_assets/buttons/button_4_normal.png";
import button_4_hover from "@/assets/images/pixel_assets/buttons/button_4_hover.png";
import button_4_active from "@/assets/images/pixel_assets/buttons/button_4_active.png";

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme; }) => css`
    font-size: 25px;
    color: white;
    height: auto;
    margin: 10px;
    
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-transform: uppercase;
    
    cursor: pointer;
    
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    line-height: 0;
  
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */

    & > * {
      display: inline-block;
      vertical-align: top;
      position: relative;
      width: auto;
      text-align: center;
      margin: -20px -20px;
      line-height: 20px;
      padding: 10px 20px;
      
      background: #000000;
      background:
        linear-gradient(135deg, transparent 10px, #000000 0) top left,
        linear-gradient(225deg, transparent 10px, #000000 0) top right,
        linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
        linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      background-image:
        radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
        radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
        radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
        radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);
    }

    &.button_2 {
      margin: 15px;
      border: none;
    }

    &.button_2 > * {
      height: 60px;
      line-height: 20px;
      padding: 10px 20px;
      width: 120px;
      
      background: ${`url('${button_2_image.src}')`} no-repeat;
      background-size: 120px 70px; /* width, height */
      background-position: 0px -10px;
    }


    &.button_4 {
      margin: 10px;
      width: 120px;
    }

    &.button_4 > * {
      width: 120px;
      height: 50px;
      background: ${`url('${button_4_image.src}')`} no-repeat;
      background-size: 120px 50px;
      background-position: 0px -3px;
      will-change: background;
      transition: background ease .2s;
    }

    //&.button_4:hover > * {
    //  background: ${`url('${button_4_hover.src}')`} no-repeat;
    //  background-size: 120px 50px;
    //  background-position: 0px -3px;
    //}

    &.button_4 > *.active,
    &.button_4:active > * {
      background: ${`url('${button_4_active.src}')`} no-repeat;
      background-size: 120px 50px;
      background-position: 0px -3px;
    }

  `}
`;