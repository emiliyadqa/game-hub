import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const OrderSelector = () => {
  const orderSelector = [
    "Relevance",
    "Date Added",
    "Name",
    "Release Date",
    "Popularity",
    "Avarage Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relavance
      </MenuButton>
      <MenuList>
        {orderSelector.map((order) => (
          <MenuItem>{order}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
