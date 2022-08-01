import { Dropdown, Button, Icon } from "rbx";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/Io";

export default function Select() {
  const [value, setValue] = useState("Selecione a matéria");

  return (
    <div>
      <div style={{ height: "250px" }}>
        <Dropdown>
          <Dropdown.Trigger>
            <Button>
              <span>{value}</span>
              <Icon>
                <IoMdArrowDropdown size={20} />
              </Icon>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item>
                <span onClick={() => setValue("item 1")}>item 1</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span onClick={() => setValue("item 2")}>item 2</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span onClick={() => setValue("item 3")}>item 3</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <span onClick={() => setValue("item 4")}>item 4</span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <span onClick={() => setValue("item especial")}>
                  item especial
                </span>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
