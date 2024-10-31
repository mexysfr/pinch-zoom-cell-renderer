import { CellContainer } from "@shopify/flash-list";
import { memo, useRef } from "react";
import Animated, { useDerivedValue } from "react-native-reanimated";

const AnimatedCellContainer = Animated.createAnimatedComponent(CellContainer);
const CellRenderer = (props: any) => {
  const zIndex = useDerivedValue(() => {
    return props.index === props.activeIndex.value ? 100 : 0;
  }, [props.activeIndex]);

  return (
    <AnimatedCellContainer {...props} style={{ ...props.style, zIndex }}>
      {props.children}
    </AnimatedCellContainer>
  )
}
  
export default memo(CellRenderer);