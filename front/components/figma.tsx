import styled from "styled-components";

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  background-color: #ffffff;
`;
const Rectangle1 = styled.div`
  height: 221px;
  width: 155px;
  background-color: #c4c4c4;
`;
const text1 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: Roboto;
  line-height: auto;
  color: #000000;
`;
const text2 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: Roboto;
  line-height: auto;
  color: #000000;
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;
const Button2 = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  background-color: #444444;
`;
const Text = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: Roboto;
  line-height: auto;
  color: #ffffff;
`;
const Button1 = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  background-color: #444444;
`;
const Text4 = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 30px;
  font-family: Roboto;
  line-height: auto;
  color: #ffffff;
`;

const Figma: React.VFC = () => {
  return (
    <Frame1>
      <Rectangle1 />
      <Text>Title</Text>
      <Text>Description</Text>
      <ButtonRow>
        <Button2>
          <Text>6:30 PM</Text>
        </Button2>
        <Button1>
          <Text>5:30 PM</Text>
        </Button1>
      </ButtonRow>
    </Frame1>
  );
};

export default Figma;
