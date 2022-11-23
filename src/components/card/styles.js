import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles= StyleSheet.create({
    
    container:{
        
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        borderRadius: 5,
    }
})