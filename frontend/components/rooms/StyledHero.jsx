/**
 * @name Hotel Room Booking System
 * @author Lalithkishore
 * @description Hotel Room Booking and Management System Software ~ :)

 */

import styled from 'styled-components';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : '/images/jpeg/room-1.jpeg')})
  center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
