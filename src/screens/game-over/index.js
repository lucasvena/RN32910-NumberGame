import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import colors from "../../utils/colors";

const GameOver = ({ rounds, selectedNumber, onRestart}) => {

    const [isPortrait, setIsPortrait] = useState(true);
    const onPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait);
    }
    
    useEffect(() => {
        const suscription = Dimensions.addEventListener('change', statePortrait);
        return () => {
            suscription.remove();
        }
    });
    
    return (
        <View style={styles.container}>
            <Card style={ isPortrait ? styles.content : styles.contentLandscape}>
                <Image 
                    source={{uri: 'https://storage.googleapis.com/pod_public/1300/120564.jpg'}} 
                    style={styles.image}/>
                <View style={styles.contentDetails}>
                    <Text style={styles.textContent}> Rondas: {rounds}</Text>
                    <Text style={styles.textContent}> Número Seleccionado: {selectedNumber}</Text>
                    <Button 
                        title="Volver a Jugar" 
                        onPress={onRestart}
                        color={colors.primary}
                        />
                </View>
            </Card>
        </View>
    )
}

export default GameOver;
