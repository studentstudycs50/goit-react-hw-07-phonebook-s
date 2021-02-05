import styled from 'styled-components';

const Wraper = styled.div`
display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 50px;
  width: 432px;
  background-color: white;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);
.phonebook-appear{
    opacity: 0;
    transform: translateX(-100%);
}
.phonebook-appear-active{
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms linear;
}
.phbook-title{
    font-weight: 700;
    font-size: 25px;
    line-height: 1.63;
    color: blue;
    overflow: hidden;
    margin-bottom: 20px;
}
.contacts-title{
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.63;
    color: blue;
    margin-bottom: 20px;
}
 .notification-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .notification-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms;
  }
  .notification-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .notification-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 250ms;
  }
  .filter-enter {
    opacity: 0;
    transform: translateX(-100%) translateY(-100%);
  }
  .filter-enter-active {
    opacity: 1;
    transform: translateX(0) translateY(0);
    transition: all 250ms linear;
  }
  .my-filter-exit {
    opacity: 1;
  }
  .filter-exit-active {
    opacity: 0;
    transform: translateX(100%) translateY(-100%);
    transition: all 250ms linear;
  }
  `;
export default Wraper;