import { ButtonProps } from "@/types/type";
import { TouchableOpacity, Text } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";

    case "danger":
      return "bg-red-500";

    case "success":
      return "bg-green-500";

    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";

    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";

    case "secondary":
      return "text-gray-100";

    case "danger":
      return "text-red-500";

    case "success":
      return "text-green-500";

    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    {...props}
    onPress={onPress}
    className={`${className} w-full  w-11/12 p-3 m-auto rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)}`}
  >
    {IconLeft && <IconLeft></IconLeft>}
    <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
      {title}
    </Text>
    {IconRight && <IconRight></IconRight>}
  </TouchableOpacity>
);

export default CustomButton;
