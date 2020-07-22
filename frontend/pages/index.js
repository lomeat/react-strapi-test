import styled from "styled-components";

export default function IndexPage() {
  const click = () => {
    console.log("hello there");
  };

  return (
    <>
      <Button onClick={click}>Click me</Button>
    </>
  );
}

const Button = styled.button`
  background: white;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 40px;
  cursor: pointer;
  padding: 20px;
  outline: none;
  transition: 0.1s ease;
  &:hover {
    background: #eee;
  }
  &:active {
    background: #ccc;
  }
`;
