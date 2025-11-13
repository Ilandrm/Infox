import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome6, Feather, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Navbar = () => {
    const [selected, setSelected] = useState<string>('Actualité');

    const pages = [
        { name: 'Actualité', icon: <FontAwesome6 name="calendar-days" size={20} color="white" />, label: 'Actualité', href: '/' },
        { name: 'Article', icon: <MaterialIcons name="article" size={24} color="white" />, label: 'Article', href: '/article' },
        { name: 'Compte', icon: <Feather name="user" size={24} color="white" />, label: 'Compte', href: '/user' },
        { name: 'Parametre', icon: <Feather name="settings" size={24} color="white" />, label: 'Parametre', href: '/setting' },
    ];

    return (
        <View style={styles.container}>
            {pages.map((page) => {
                const isSelected = selected === page.name;
                return (
                    <Link
                        key={page.name}
                        href={page.href}
                        onPress={() => setSelected(page.name)}
                    >
                        <View style={[styles.item, isSelected && styles.itemSelected]}>
                            {page.icon}
                            <Text style={[styles.label, isSelected && { color: 'white' }]}>{page.label}</Text>
                        </View>
                    </Link>
                );
            })}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'SFCompact-Regular',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#B67332',
        paddingVertical: 10,
        borderRadius: 15,
        width: '90%',
        shadowColor: '#5a3d1a',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 5,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    itemSelected: {
        backgroundColor: '#A35C28',
        borderWidth: 1,
        borderColor: '#d18f52',
        shadowColor: '#5a3d1a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        color: 'white',
        fontSize: 12,
        marginTop: 2,
    },
});

export default Navbar;
