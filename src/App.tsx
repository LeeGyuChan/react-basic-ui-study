import styled from '@emotion/styled';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from './components/Modal';
import Skeleton from './components/Skeleton';

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 12px;
  color: #fff;
  background-color: #3d6afe;
  margin: 0;
  border: none;
  font-size: 24px;
  &:active {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;




const Placeholder = () => ( // <Item /> 에 대응하는 Placeholder 제작
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} rounded />
      <div style={{ height: '8px' }} />
      <Skeleton width={200} height={19} rounded />
    </Info>
  </Container>
)


const Item = () => {

  return(
    <Container>
      <ImageWrapper>
      <Image src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
      </ImageWrapper>
      <Info>
        <Title></Title>
        <Description>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Description>
      </Info>
    </Container>
  )
}


function App() {


  // Skeleton 주석
  // const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   setTimeout(()=> setLoading(false), 2000);
  // }, []);
  // return (
  //   <Base >
  //   {
  //     loading ?   Array.from({length:25}).map((_,idx)=>(
  //         <Placeholder key={idx}/>
  //       )) :  Array.from({length:25}).map((_,idx)=>(
  //         <Item key={idx}/>
  //       ))
  //   }
  //   </Base>
  // );


  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Container2 className="app">
      <Button onClick={handleOpen}>OPEN</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <h2>Text in a modal</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        </ModalBody>
      </Modal>
    </Container2>
  );


}

export default App;
