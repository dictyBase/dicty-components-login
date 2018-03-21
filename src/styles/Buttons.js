import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;

  &.block {
    display: block;
    width: 100%;
  }

  &.large {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  }

  &.xs {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    width: 20%;
  }
`

export const LinkButton = Button.withComponent("a")

export const SocialButton = LinkButton.extend`
  position: relative;
  padding-left: 21px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  color: #fff;
  border-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;

  &:hover {
    text-decoration: none;
  }
`

export const FontAwesomeIconContainer = styled.i`
  border-right: 1px solid black;
  line-height: 45px;
  width: 45px;
  font-size: 1.8em;
`

export const GoogleButtonContainer = SocialButton.extend`
  background-color: #dd4b39;

  &:focus,
  &:hover,
  &:active {
    color: #fff;
    background-color: #c23321;
    border-color: rgba(0, 0, 0, 0.2);
  }
`

export const FacebookButtonContainer = SocialButton.extend`
  background-color: #3b5998;

  &:focus,
  &:hover,
  &:active {
    color: #fff;
    background-color: #2d4373;
    border-color: rgba(0, 0, 0, 0.2);
  }
`

export const LinkedInButtonContainer = SocialButton.extend`
  background-color: #007bb6;

  &:focus,
  &:hover,
  &:active {
    color: #fff;
    background-color: #005983;
    border-color: rgba(0, 0, 0, 0.2);
  }
`

export const OrcidButtonContainer = SocialButton.extend`
  background-color: #a6ce39;

  &:focus,
  &:hover,
  &:active {
    color: #fff;
    background-color: #88aa2a;
    border-color: rgba(0, 0, 0, 0.2);
  }
`
