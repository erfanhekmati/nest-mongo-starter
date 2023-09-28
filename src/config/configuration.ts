export default () => ({
    app : {
        port: parseInt(process.env.PORT, 10) || 3000,
        version: '1.0.0'
    }
});