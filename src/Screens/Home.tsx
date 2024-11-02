// import Menunav from "../Components/Menunav";
import { Col, InputNumberProps, Row, Typography } from "antd";
import styled from "styled-components";
import { InputNumber } from "antd";
const Div = styled.div`
  flex: 1;
  border: solid 1px green;
`;

const Title = styled.div`
  border: solid 1px green;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: solid 1px green;
`;
export default function Home() {
  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
  };
  return (
    <Div>
      <Row>
        <Col span={24}>
          <Title>
            <Typography.Title level={1} style={{ margin: 0 }}>
              Caracteristique de la fondation
            </Typography.Title>
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Items>
            <Typography.Paragraph>test</Typography.Paragraph>
            <InputNumber
              // min={1}
              // max={10}
              keyboard
              step={"0.1"}
              stringMode={true}
              defaultValue={0}
              onChange={onChange}
            />
          </Items>
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </Div>
  );
}
