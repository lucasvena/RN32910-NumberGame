import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import colors from "../../utils/colors";

const GameOver = ({ rounds, selectedNumber, onRestart}) => {
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Image 
                    source={{uri: 'https://storage.googleapis.com/pod_public/1300/120564.jpg'}} 
                    style={styles.image}/>
                <Text style={styles.textContent}> Rondas: {rounds}</Text>
                <Text style={styles.textContent}> Número Seleccionado: {selectedNumber}</Text>
                <Button 
                    title="Volver a Jugar" 
                    onPress={onRestart}
                    color={colors.primary}
                    />
            </Card>
        </View>
    )
}

export default GameOver;
