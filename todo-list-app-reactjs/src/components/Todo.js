import React, { useState } from 'react'
import styled from 'styled-components';  

function Todo() {

    const [items,setItems] = useState([
        {content: 'Wakeup', id: 1},
        {content: 'Office', id: 2},
        {content: 'Back Home', id: 3},
        {content: 'Sleep', id: 4}
    ]);
    const [input,setInput] = useState("");
    const [completed,setCompleted] = useState([
        {content: 'Washing Cloths', id: 5},
        {content: 'Playing Football', id: 6},
        {content: 'Music', id: 7},
        {content: 'Cinema', id: 8}
    ]);
    const [itemCount,setItemCount] = useState(items.concat(completed));

    let addItems = () => {
        setItemCount([...itemCount,{content : input,id: itemCount.length+1}]);
        setItems([...items,{content : input,id: itemCount.length+1}]);
        setInput("");
    }

    let checked = (id) => {
        setCompleted([...completed,items.find((item) => item.id === id)]);
        setItems(items.filter((item) => item.id !== id));
    }

    let deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }

    let deleteCompletedItem = (id) => {
        setCompleted(completed.filter((item) => item.id !== id));
    }

    let revert = (id) => {
        setItems([...items,completed.find((item) => item.id === id)]);
        setCompleted(completed.filter((item) => item.id !== id));
    }

    return (
        <>
            <MainSection>
                <Heading>Todo Lists</Heading>
                <Container>
                    <MainContent>
                        <SubHeading>Things to be done</SubHeading>
                        <List>
                            {items.map(item =>(
                            <ListItem key={item.id}>
                                <Left>
                                    <CheckContainer onClick={() => checked(item.id)}></CheckContainer>
                                    <ItemContent>{item.id}.{item.content}</ItemContent>
                                </Left>
                                <Right>
                                    <DeleteButton onClick={() => deleteItem(item.id)}>
                                         <ButtonImg src={require('../components/assets/delete.svg').default} alt="Delete" />
                                    </DeleteButton>
                                </Right>
                            </ListItem>
                            ))}
                        </List>
                    </MainContent>
                    <MiddleContent>
                        <ToDoForm>
                            <PlusImg src={require('../components/assets/plus.svg').default} alt="Plus" />
                            <InputForm placeholder="Type new task..." value={input} onChange={(e)=> setInput(e.target.value)} />
                            <SubmitButton onClick={addItems}>Add</SubmitButton>
                        </ToDoForm>
                    </MiddleContent>
                    <MainContent>
                        <SubHeading>Completed</SubHeading>
                        <List>
                        {completed.map(item =>(
                            <ListItem key={item.id}>
                                <Left>
                                    <CheckComplete>
                                        <TickImg src={require('../components/assets/tick-green.svg').default} alt="Tick" />
                                    </CheckComplete>
                                    <ItemContentComplete>{item.id}.{item.content}</ItemContentComplete>
                                </Left>
                                <Right>
                                    <RestoreButton onClick={() =>revert(item.id)}>
                                        <RestoreImg src={require('../components/assets/revert.svg').default} alt="Restore" />
                                    </RestoreButton>
                                    <DeleteButton onClick={() => deleteCompletedItem(item.id)}>
                                        <ButtonImg src={require('../components/assets/delete.svg').default} alt="Delete" />
                                    </DeleteButton>
                                </Right>
                            </ListItem>
                        ))}
                        </List>
                    </MainContent>
                </Container>
            </MainSection>
        </>
    );
}

export default Todo;

const MainSection = styled.section`
    width: 60%;
    min-height: 100vh;
    border-left: 0.5px solid #000;
    border-right: 0.5px solid #000;
    margin: 0 auto;
    padding-top: 80px;
`;

const Heading = styled.h1`
    text-align: center;
    font-size: 46px;
`;

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const MainContent = styled.div`
    width: 100%;
`;

const MiddleContent = styled.div`
    width: 100%;
`;

const SubHeading = styled.h3`
    font-size: 30px;
    color: #0A0441;
    font-weight: 500;
`;

const List = styled.ul`
    list-style: none;
    margin: 0 auto;
    width: 90%;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const CheckContainer = styled.div`
    width: 35px;
    height: 35px;
    padding: 5px;
    border: 2px solid #000;
    border-radius: 50%;
`;

const ToDoForm = styled.div`
    border: 1px solid #000;
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    border-radius: 0 5px 5px 0;    
`;

const InputForm = styled.input`
    font-size: 24px;
    padding: 0 40px 0 20px;
    border: none;
    width: 100%;
    border-radius: 0;
    outline: none;
`;

const SubmitButton = styled.button`
    height: 100%;
    padding: 6px 24px;
    font-size: 24px;
    border-radius: 0 5px 5px 0;
    border: none;
    background: #0A0441;
    color: #fff;
`;

const CheckComplete = styled.div`
    width: 35px;
    height: 35px;
    padding: 5px;
    border: 2px solid #00C492;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-item: center;

`;

const TickImg = styled.img`
    width: 100%;
`;

const ItemContent = styled.p`
    margin-left: 10px;
    font-size: 20px;
`;

const ItemContentComplete = styled.p`
    margin-left: 10px;
    font-size: 20px;
    color: #00C492;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const DeleteButton = styled.div``;

const ButtonImg = styled.img``;

const RestoreButton = styled.div`
    margin-right: 30px;
`;

const RestoreImg = styled.img``;

const PlusImg = styled.img`
    margin-left: 10px;
`;