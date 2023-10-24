import htmlPurge from 'vite-plugin-purgecss'

export default {
    base: "/beyond-barber/",
    plugins: [
        htmlPurge(),
    ]
}