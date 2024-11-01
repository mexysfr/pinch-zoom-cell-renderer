import { CellContainer } from "@shopify/flash-list";
import { memo } from "react";
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

// This is fixing the issue:
// https://github.com/Glazzes/react-native-zoom-toolkit/issues/74#issuecomment-2452197738

/* const CellRenderer = (props: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      zIndex: props.index === props.activeIndex.value ? 100 : 0,
    }
  }, [props.index, props.activeIndex]);

  return (
    <AnimatedCellContainer {...props} style={[{ ...props.style }, animatedStyle]}>
      {props.children}
    </AnimatedCellContainer>
  )
} */
  
export default memo(CellRenderer);