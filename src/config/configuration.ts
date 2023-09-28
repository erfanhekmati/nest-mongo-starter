export default () => ({
    app : {
        port: parseInt(process.env.PORT, 10) || 3000,
        version: '1.0.0'
    },
    swagger: {
        title: 'Your app swagger title goes here.',
        description: 'Your app swagger description goes here.',
        path: 'api-docs'
    },
    mongo: {
        connection: { url: process.env.MONGO_CONN_URL }
    }
});