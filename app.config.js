import 'dotenv/config';

export default ({ config }) => {
    return {
        ...config,
        name: "Infox",
        slug: "Infox",
        version: "1.0.0",
        extra: {
            GNEWS_API_KEY: process.env.GNEWS_API_KEY,
            GNEWS_BASE_URL: process.env.GNEWS_BASE_URL,
            DEFAULT_LANG: process.env.DEFAULT_LANG,
            DEFAULT_TOPIC: process.env.DEFAULT_TOPIC
        }
    };
};
