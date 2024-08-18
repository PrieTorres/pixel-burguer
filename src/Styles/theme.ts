import { Colors } from "./COLORS";

export const theme = {
  colors: {
    ...Colors,
  },
  font: {
    family: {
      default: "'VT323', monospace, 'Open sans', sans-serif",
      secondary: "'VT323','Montserrat', sans-serif",
    },
    size: {
      small_device_xxsmall: "0.4rem",
      small_device_xsmall: "0.6rem",
      small_device_small: "0.8rem",
      small_device_medium: "1.2rem",
      small_device_large: "1.6rem",
      small_device_xlarge: "2rem",
      small_device_xxlarge: "2.4rem",
      small_device_huge: "2.8rem",
      small_device_xhuge: "3.2rem",

      medium_device_xxsmall: "0.4rem",
      medium_device_xsmall: "0.8rem",
      medium_device_small: "1rem",
      medium_device_medium: "1.4rem",
      medium_device_large: "2.2rem",
      medium_device_xlarge: "2.8rem",
      medium_device_xxlarge: "3.4rem",
      medium_device_huge: "3.8rem",
      medium_device_xhuge: "4.4rem",

      large_device_xxsmall: "0.4rem",
      large_device_xsmall: "0.8rem",
      large_device_small: "1.6rem",
      large_device_medium: "2.4rem",
      large_device_large: "3.2rem",
      large_device_xlarge: "4rem",
      large_device_xxlarge: "4.8rem",
      large_device_huge: "5.6rem",
      large_device_xhuge: "6.4rem",
    },
  },
  media: {
    lteMedium: "(max-width: 768px)",
    lteSmall: "(max-width: 428px)"
  },
  height: {
    headerheight: "100px",
    sectionHeight: "90vh",
    footerHeight: "100px",
    dropDownDefaultHeight: "50px"
  },
  dotSize: {
    small: "10px",
    medium: "16px",
    large: "20px",
  },
  spacings: {
    xxsmall: "0.4rem",
    xsmall: "0.8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
  shadow: {
    lightInsetShadow: "rgba(255, 255, 255) 0px 1px 8px 0px inset",
    greyInsetShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    pinkColorfullShadow: "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
    pinkColorfullShadowTop: "rgba(240, 46, 170, 0.4) 0px -5px, rgba(240, 46, 170, 0.3) 0px -10px, rgba(240, 46, 170, 0.2) 0px -15px, rgba(240, 46, 170, 0.1) 0px -20px, rgba(240, 46, 170, 0.05) 0px -25px",
    rainbowShadowEffect: `blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, 
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, 
    rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px`
  },
  gradient: {
    darkGreyGradient: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(70,70,70,1) 50%, rgba(0,0,0,1) 100%)"
  },
  radius: {
    default: "8px",
    small: "5px",
    big: "12px"
  },
  transitions: {
    default: "all .5s ease"
  }
} as const;