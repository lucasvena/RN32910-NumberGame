import React, {useState} from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card, Input, NumberContainer } from "../../components";
import colors from "../../utils/colors";

const StartGame = ({onStartGame}) => {

    const [number, setNumber] = useState('');
    const [ selectedNumber, setSelectedNumber] = useState(null);
    const [ confirmed, setConfirmed] = useState(false);

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    const onHandleReset = () => {
        setNumber('');
        setConfirmed(false);
    }

    
    const onhandleConfirm = () => {
        const chosenNumber = parseInt( number, 10 );
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Número Inválido', 'El número tiene que estar entre 1 y 99', [{text:'Entendido', style:'destructive', onPress: onHandleReset}]);
        }else{
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber('');
            
        }
    }
    
    const ConfirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>El número seleccionado es:</Text>
            <NumberContainer number={selectedNumber}/>
            <Button
                title="Comenzar Juego!"
                onPress={ () => onStartGame(selectedNumber)}
                color={colors.primary}

            />
        </Card>
    ) : null;

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>Vamos a comenzar!</Text>
                    <Card style={styles.inputContainer}>
                        <Text style={styles.label}>Selecciona un número entre 1 y 2 dígitos:</Text>
                        <Input 
                            style={styles.input} 
                            placeholder="0"
                            maxLength={2}
                            keyboardType="number-pad"
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={onHandleChange}
                            value={number}
                            />
                        <View style={styles.buttonContainer}>
                            <Button 
                                title='Resetear'
                                onPress={onHandleReset}
                                color={colors.secondary}
                            />
                            <Button 
                                title='Confirmar'
                                onPress={onhandleConfirm}
                                color={colors.primary}
                            />
                        </View>
                    </Card>
                    {ConfirmedOutput()}
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;
