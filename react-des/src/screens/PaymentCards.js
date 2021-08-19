import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function PaymentCards() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Container>
        <CardContainer>
          <List>
            <ListItem>
              <ImageContainer>
                <Image
                  src={require("../images/Facebook-logo.png").default}
                ></Image>
              </ImageContainer>
              <Text>50% Offer</Text>
            </ListItem>
            <ListItem>
              <ImageContainer>
                <Image src={require("../images/instagram.jpg").default}></Image>
              </ImageContainer>
              <Text>50% Offer</Text>
            </ListItem>
            <ListItem>
              <ImageContainer>
                <Image
                  src={require("../images/whatsapp-logo.jpg").default}
                ></Image>
              </ImageContainer>
              <Text>50% Offer</Text>
            </ListItem>
            <Button onClick={onOpenModal}>Buy Now</Button>
            <CustomModal className="customModal"
              open={open}
              onClose={onCloseModal}
              center
              animationDuration={400}
            >
              <ModalTitle>Sorry, App is out of stock hehe</ModalTitle>
            </CustomModal>
          </List>
        </CardContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-image: linear-gradient(
    90deg,
    #020024 20%,
    #090979 95%,
    #00d4ff 200%
  );
  height: 981px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;
const ListItem = styled.li`
  background: #2e3137;
  width: 33%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const ImageContainer = styled.div`
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 145px;
  display: inline-block;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Text = styled.h1`
  color: #c0a568;
  font-size: 24px;
  text-align: center;
`;
const Button = styled.a`
  display: inline-block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 16px 24px;
  background: black;
  color: #c0a568;
  width: 10%;
  text-align: center;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const CustomModal = styled(Modal)`
    background: #b2dbbf;
    max-width: 500px;
    width: 100%;
`
const ModalTitle = styled.h3`
  color: red;
  font-size: 15px;
`;
