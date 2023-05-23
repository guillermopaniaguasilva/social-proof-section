import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';

export const Container = styled.div`
  background-color: ${COLORS.LIGHT_GRAYISH_MAGENTA};
  width: 327px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media only screen and (min-width: 600px) {
    width: 445px;
    height: 56px;
    flex-direction: row;
    justify-content: space-around;

    &:nth-of-type(2) {
      margin-left: 48px;
    }

    &:nth-of-type(3) {
      margin-left: 96px;
    }
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Star = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Text = styled.p`
  color: ${COLORS.VERY_DARK_MAGENTA};
  font-size: 17px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 16px;

  @media only screen and (min-width: 600px) {
    margin-top: 0;
  }
`;
