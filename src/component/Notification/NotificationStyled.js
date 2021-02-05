import styled from "styled-components";
const NotificationStyled = styled.div`
  position: absolute;
  top: 45px;
  right: 45px;
  max-width: 300px;
  background-color: red;
  border-radius: 4px;
  padding: 10px 15px;
  .notification-title {
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.63;
    color: #ffffff;
  }
`;
export default NotificationStyled;