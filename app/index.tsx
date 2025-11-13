import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

const Index = () => {
    const [isDailyLaunched, setIsDailyLaunched] = useState(false);

    return (
        <View
            style={styles.container}
        >
            {isDailyLaunched ? (
                <View style={styles.numberContainer}>
                    <Text style={styles.title}>Choisis ton nombre du jour ✨</Text>
                    <Text style={styles.subtitle}>
                        Sélectionne un nombre pour découvrir ta dose d'infos personnalisées.
                    </Text>

                    <View style={styles.numberGrid}>
                        {[3, 5, 7].map((num) => (
                            <TouchableOpacity key={num} style={styles.btnNumber}>
                                <Text style={styles.btnNumberText}>{num}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => setIsDailyLaunched(false)}
                    >
                        <FontAwesome6 name="arrow-left" size={18} color="white" />
                        <Text style={styles.backButtonText}>Retour</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.welcomeContainer}>
                    <Image
                        source={require('../assets/mascotte.png')}
                        style={styles.imgMascotte}
                        resizeMode="contain"
                    />
                    <Text style={styles.text}>
                        Oh ! On dirait que tu n’as pas encore regardé tes infos du jour 👀
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => setIsDailyLaunched(true)}>
                        <FontAwesome6 name="newspaper" size={20} color="white" style={styles.icon} />
                        <Text style={styles.btnText}>Actualités</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },
    welcomeContainer: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
    },
    imgMascotte: {
        width: '100%',
        height: 300,
    },
    text: {
        fontWeight: 'bold',
        width: '85%',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 25,
        color: '#333',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B67332',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    numberContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop:100,
        width: '100%',

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#B67332',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#444',
        marginBottom: 30,
        textAlign: 'center',
        width: '80%',
    },
    numberGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 40,
    },
    btnNumber: {
        backgroundColor: '#B67332',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 50,
        elevation: 4,
        shadowColor: '#5a3d1a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    btnNumberText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7A5E3A',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    backButtonText: {
        color: 'white',
        marginLeft: 8,
        fontWeight: '600',
    },
});

export default Index;
