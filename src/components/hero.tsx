/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG, { validIcons } from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const randomIcon = () => validIcons[ Math.floor( Math.random() * validIcons.length )]

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="bassClef" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon="bassClef" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="bassClef" width={12} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="pizza" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="coffee" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="network" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="trebleClef" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="coffee" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="christianCross" hiddenMobile width={48} stroke color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="python" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="nodejs" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="nodejs" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="church" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="python" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="musicNotes" hiddenMobile width={32} color="icon_purple" left="5%" top="90%" />
      <SVG icon="code" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="code" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

const RandomHero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon={ randomIcon() } hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon={ randomIcon() } width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon={ randomIcon() } width={12} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon={ randomIcon() } hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon={ randomIcon() } width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon={ randomIcon() } width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon={ randomIcon() } width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon={ randomIcon() } width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon={ randomIcon() } width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon={ randomIcon() } hiddenMobile width={48} stroke color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon={ randomIcon() } hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon={ randomIcon() } width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon={ randomIcon() } width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon={ randomIcon() } width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon={ randomIcon() } hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon={ randomIcon() } width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon={ randomIcon() } width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon={ randomIcon() } hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon={ randomIcon() } width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon={ randomIcon() } width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon={ randomIcon() } width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon={ randomIcon() } width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
