import nunjucks from 'vite-plugin-nunjucks'

export default {
    plugins: [
        nunjucks()
    ],
    server: {
        port: 3008
    }
}