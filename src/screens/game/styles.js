import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    label:{
        width: '80%',
        fontSize: 15,
        color: colors.text,
        paddingVertical: 5,
        marginBottom: 15,
        textAlign: 'center',
    },
    content: {
        width: '80%',
        height: height * 0.23,
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 16,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})