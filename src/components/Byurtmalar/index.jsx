import React, { useState } from "react";
import {
  Container,
  Heder,
  Wrepper,
  Add,
  Tab,
  Toggle,
  MenuH,
  MenuV,
  IconWrapper,
} from "./style";

export const Byurtmalar = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [on, setOn] = useState(true);
  return (
    <Container>
      <Heder>
        {/* 1 */}
        <Wrepper>
          <Add>
            <Add.Plus />
            <Add.Title>Yangi byurtma qo'shish</Add.Title>
          </Add>
        </Wrepper>
        {/* 2 */}
        <Wrepper center>
          <Tab>
            <Tab.Item
              active={"Yangi" === isActive}
              onClick={() => setIsActive("Yangi")}
            >
              Yangi
            </Tab.Item>
            <Tab.Item
              active={"Qabul" === isActive}
              onClick={() => setIsActive("Qabul")}
            >
              Qabul qilingan
            </Tab.Item>
            <Tab.Item
              active={"jonatilgan" === isActive}
              onClick={() => setIsActive("jonatilgan")}
            >
              Jo'natilgan
            </Tab.Item>
            <Tab.Item
              active={"Yopilgan" === isActive}
              onClick={() => setIsActive("Yopilgan")}
            >
              Yopilgan
            </Tab.Item>
          </Tab>
        </Wrepper>
        {/* 3 */}
        <Wrepper>
          <Toggle>
            <IconWrapper active={on} onClick={() => setOn(true)}>
              <MenuH />
            </IconWrapper>
            <IconWrapper active={!on} onClick={() => setOn(false)}>
              <MenuV />
            </IconWrapper>
          </Toggle>
        </Wrepper>
      </Heder>
    </Container>
  );
};

export default Byurtmalar;
