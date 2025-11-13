import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Navbar from '../components/navbar';
import ArticleComponent from '../components/articleComponent';
import {FontAwesome6, Fontisto, Octicons} from "@expo/vector-icons";
import { useArticleStore } from '../stores/articleStore';




const Article = () => {
    const { selected, setSelected,articles,fetchArticles } = useArticleStore();
    useEffect(() => {
        fetchArticles();
    }, []);
    const categories = [
        { name: 'politique', icon: FontAwesome6, iconName: 'building-columns', label: 'Politique' },
        { name: 'justice', icon: Octicons, iconName: 'law', label: 'Justice' },
        { name: 'quotidien', icon: FontAwesome6, iconName: 'sun', label: 'Quotidien' },
        { name: 'international', icon: Fontisto, iconName: 'world-o', label: 'International' },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.categorie}>
                {categories.map((cat) => {
                    const IconComponent = cat.icon;
                    const isSelected = selected === cat.name;
                    return (
                        <TouchableOpacity
                            key={cat.name}
                            style={[styles.item, isSelected && styles.itemSelected]}
                            onPress={() => setSelected(cat.name)}
                            activeOpacity={0.8}
                        >
                            <IconComponent
                                name={cat.iconName}
                                size={20}
                                color={isSelected ? '#B67332' : 'black'}
                            />
                            <Text style={[styles.label, isSelected && { color: '#B67332' }]}>{cat.label}</Text>
                        </TouchableOpacity>
                    );
                })}

            </View>
            </View>
            <ScrollView style={styles.content}>
                {
                    articles.map((article : any, index : any) => (
                        <ArticleComponent
                            key={article.title}
                            title={article.title}
                            image={article.image}
                            description={article.description}
                            content={article.content}
                            sources={article.source}
                            >
                        </ArticleComponent>
                    ))
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        fontFamily:'SFCompact-Regular'
    },
    content: {

        marginTop:10,
        width:'100%',
        height:40,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    imgINFOX : {
        width: '25%',
        height: 75,
    },

    head: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header:{
        flexDirection: 'column',
        width: '100%',
    },
    categorie:{
        flexDirection: 'row',
        alignSelf: 'center',
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    itemSelected: {
        borderBottomWidth:1,
        borderBottomColor: '#B67332',
        elevation: 3,
        color:'white',
    },
    label: {
        color: 'black',
        fontSize: 12,
        marginTop: 2,
    },
});

export default Article;
