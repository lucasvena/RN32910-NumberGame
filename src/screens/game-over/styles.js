import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        width: width * 0.8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent:{
        fontSize: 16,
        fontWeight:'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        fontFamily: 'Lato-Regular'
    },
    image:{
        width: 300,
        height: 400,
    },
});

