import { FlashList } from "@shopify/flash-list"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { DATA } from "../data"
import { Item } from "./Item"
import { useCallback } from "react"
import { useSharedValue } from "react-native-reanimated"
import CellRenderer from "./CellRenderer"

export const List = () => {
  const insets = useSafeAreaInsets()
  const activeIndex = useSharedValue<number>(-1);

  const renderItem = useCallback(
    (props: any) => <Item {...props} activeIndex={activeIndex} />,
    [activeIndex]
  );

  const cellRenderer = useCallback(
    (props: any) => <CellRenderer {...props} activeIndex={activeIndex} />,
    [activeIndex]
  );

  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      overScrollMode={'never'}
      contentContainerStyle={{ paddingTop: insets.top }}
      data={DATA}
      renderItem={renderItem}
      estimatedItemSize={224}
      CellRendererComponent={cellRenderer}
      //It does not change anything
      //disableAutoLayout={true}
    />
  )
}