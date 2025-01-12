import { useContext } from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "../ui/radio-card";
import { RiCashFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri";
import { ShopContext } from "../../context/ShopContext";

const Choices = () => {
  const { choice, HandleChoices } = useContext(ShopContext);

  return (
    <RadioCardRoot
      orientation="horizontal"
      align="center"
      justify="center"
      maxW="lg"
      defaultValue="paypal"
    >
     
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCardItem
            className="cursor-pointer border border-gray-200"
            onClick={() => HandleChoices(item.value)}
            label={item.title}
            icon={
              <Icon fontSize="2xl" color="fg.subtle">
                {item.icon}
              </Icon>
            }
            indicator={false}
            key={item.value}
            value={item.value}
          />
        ))}
      </HStack>
    </RadioCardRoot>
  );
};

const items = [
  { value: "paypal", title: "Paypal", icon: <RiPaypalFill /> },
  { value: "apple-pay", title: "Cash ON Delivery", icon: <RiCashFill /> },
  { value: "card", title: "Card", icon: <RiBankCardFill /> },
];

export default Choices;
