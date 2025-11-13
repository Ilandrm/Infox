import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';

type ArticleProps = {
    title: string;
    image: string;
    description: string;
    content: string;
    sources:  any;
};

const { width, height } = Dimensions.get('window');

const ArticleComponent = ({ title, image, description, content,sources }: ArticleProps) => {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <>
            <TouchableOpacity onPress={() => setIsModalActive(true)}>
                <View style={styles.container}>
                    <Image
                        source={{ uri: image || 'https://via.placeholder.com/400x300?text=No+Image' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <Modal
                visible={isModalActive}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsModalActive(false)}
            >
                <BlurView intensity={80} tint="dark" style={styles.blurBackground}>
                    <View style={styles.modalCard}>
                        <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
                            <Image
                                source={{ uri: image || 'https://via.placeholder.com/400x300?text=No+Image' }}
                                style={styles.modalImage}
                                resizeMode="cover"
                            />
                            <View style={styles.sourceGroup}>
                                {sources ? (
                                    Array.isArray(sources) ? (
                                        sources.map((source: any, index: number) => (
                                            <View key={index} style={styles.sourceBadge}>
                                                <Image style={styles.sourceImage}></Image>
                                            </View>
                                        ))
                                    ) : (
                                        <View style={styles.sourceBadge}>
                                        </View>
                                    )
                                ) : null}
                            </View>

                            <Text style={styles.modalTitle}>{title}</Text>
                            <Text style={styles.modalText}>{content}</Text>

                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setIsModalActive(false)}
                            >
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </BlurView>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
    },
    image: { width: '100%', height: 180 },
    textContainer: { padding: 12 },
    title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
    description: { fontSize: 14, color: '#555' },

    blurBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalCard: {
        width: width * 0.85,
        maxHeight: height * 0.75,
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
    },
    modalImage: { width: '100%', height: 200, marginBottom: 16 },
    modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
    modalText: { fontSize: 16, color: '#333', lineHeight: 22, textAlign: 'center' },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#B67332',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    sourceGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 12,
        gap: 6,
    },
    sourceBadge: {
        backgroundColor: '#B67332',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    sourceImage: {
        width:40,
        borderRadius: 25,
    },

    closeButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ArticleComponent;
