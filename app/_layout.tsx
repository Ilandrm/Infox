// app/_layout.tsx
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Stack } from 'expo-router';
import Navbar from '@/components/navbar';

export default function Layout() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/INFOX-ecriture.png')}
                       style={styles.imgINFOX}
                       resizeMode="contain"
                />
            </View>
            <Stack screenOptions={{ headerShown: false }} />

            <View style={styles.navbar}>
                <Navbar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',

    },
    navbar: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        alignItems: 'center',
    },
    header: {
        paddingTop: 50,
        alignItems: 'center',
    },
    imgINFOX : {
        width: '25%',
        height: 75,
    },
});
