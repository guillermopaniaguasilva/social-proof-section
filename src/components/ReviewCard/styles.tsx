import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';

export const Container = styled.div`
  width: 327px;
  height: 248px;
  background-color: ${COLORS.VERY_DARK_MAGENTA};
  margin: 0 24px 16px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;

  &:first-of-type {
    margin-top: 50px;

    @media only screen and (min-width: 600px) {
      margin-top: 0;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 350px;
    height: 234px;
    margin-right: 0;

    &:nth-of-type(2) {
      margin-top: 36px;
    }

    &:nth-of-type(3) {
      margin-top: 72px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 24px;
`;

export const Name = styled.p`
  margin-bottom: 4px;
  color: ${COLORS.WHITE};
  font-size: 17px;
  font-weight: 700;
  line-height: 16px;
`;

export const Title = styled.p`
  color: ${COLORS.SOFT_PINK};
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
`;

export const Text = styled.p`
  color: ${COLORS.WHITE};
  font-size: 17px;
  font-weight: 500;
  line-height: 22px;
`;
