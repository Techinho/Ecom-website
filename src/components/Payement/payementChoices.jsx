import { HStack, Icon } from "@chakra-ui/react"
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../ui/radio-card"
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri"

const Choices = () => {
  return (
    <RadioCardRoot
      orientation="horizontal"
      align="center"
      justify="center"
      maxW="lg"
      defaultValue="paypal"
    >
      <RadioCardLabel>Payment method</RadioCardLabel>
      <HStack  align="stretch">
        {items.map((item) => (
          <RadioCardItem className="cursor-pointer border border-gray-200"
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
  )
}

const items = [
  { value: "paypal", title: "Paypal", icon: <RiPaypalFill /> },
  { value: "apple-pay", title: "Apple Pay", icon: <RiAppleFill /> },
  { value: "card", title: "Card", icon: <RiBankCardFill /> },
]

export default Choices