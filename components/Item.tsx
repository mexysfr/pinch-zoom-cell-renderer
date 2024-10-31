import { Image } from "expo-image";
import { Dimensions, StyleSheet, View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { SnapbackZoom } from "react-native-zoom-toolkit";

interface ItempProps {
	item: { uri: string; aspectRatio: number }
	index: number
	activeIndex: SharedValue<number>
}

export const Item = ({ item, index, activeIndex }: ItempProps) => {
	const onPinchStart = () => {
    activeIndex.value = index;
	}
	const onGestureEnd = () => {
    activeIndex.value = -1;
  }

	return (
		<View style={styles.container}>
			<View style={styles.header} />
			<SnapbackZoom onPinchStart={onPinchStart} onGestureEnd={onGestureEnd}>
				<Image
					source={{ uri: item.uri }}
					style={{
						width: Dimensions.get('window').width - 32,
						height: (Dimensions.get('window').width - 32) / item.aspectRatio
					}}
				/>
			</SnapbackZoom>
			<View style={styles.footer} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 16
	},
	header: {
		height: 24,
		width: '100%',
		backgroundColor: 'rgba(255, 0, 0, 0.5)'
	},
	footer: {
		height: 24,
		width: '100%',
		backgroundColor: 'rgba(0, 0, 255, 0.5)',
		zIndex: -1
	}
})