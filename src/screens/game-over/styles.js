import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        width: '80%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentLandscape: {
        flex: 1,
        width: '80%',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },

    contentDetails:{}, 
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
        height: 300,
    },
});

