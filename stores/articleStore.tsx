import { create } from 'zustand';
import Constants from 'expo-constants';

type Article = {
    title: string;
    src: any; // image source
    shortDescription: string;
    completeDescription: string;
};

type ArticleStore = {
    articles: Article[];
    selected: string;
    setSelected: (category: string) => void;
    setArticles: (articles: Article[]) => void;
    fetchArticles: () => Promise<void>;
};

const { GNEWS_API_KEY, GNEWS_BASE_URL, DEFAULT_LANG, DEFAULT_TOPIC } = Constants.expoConfig.extra;

export const useArticleStore = create<ArticleStore>((set) => ({
    articles: [],
    selected: 'politique',
    setSelected: (category) => set({ selected: category }),
    setArticles: (articles) => set({ articles }),
    fetchArticles: async () => {
        try {
            const res = await fetch(
                `${GNEWS_BASE_URL}/top-headlines?token=${GNEWS_API_KEY}&lang=${DEFAULT_LANG}&topic=${DEFAULT_TOPIC}`
            );
            const data = await res.json();

            if (data?.articles) {
                set({ articles: data.articles });
            } else {
                console.warn('Aucun article reçu', data);
            }
        } catch (error) {
            console.error('Erreur lors du fetch des articles :', error);
        }
    },
}));
