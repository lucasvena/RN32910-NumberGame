import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    containerScroll:{
        flex: 1,
    },
    container:{
        flex: 1,
        alignItems:'center',
        marginVertical: 15,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    label:{
        width: '65%',
        fontSize: 15,
        color: colors.text,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    input:{
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer:{
        width: '80%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,     
    },
    confirmedTitle:{
        fontSize: 15,
        color: colors.text,
    },
})