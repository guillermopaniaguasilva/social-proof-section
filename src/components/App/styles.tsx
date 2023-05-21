import styled from 'styled-components';
import { COLORS } from '../../styles/variables';

export const Heading = styled.h1`
  color: ${COLORS.VERY_DARK_MAGENTA};
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 32px;
  margin: 82px 24px 0 24px;
`;

export const Description = styled.p`
  color: ${COLORS.DARK_GRAYISH_MAGENTA};
  text-align: center;
  font-size: 19px;
  font-weight: 500;
  line-height: 25px;
  margin: 18px 24px 40px 24px;
`;
