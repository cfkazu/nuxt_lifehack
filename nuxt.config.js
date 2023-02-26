
export default {
    ssr: false,
    target: 'static',
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
    ],
    router: {
        middleware: ['auth'],
    },
    auth: {
        redirect: {
            login: '/login',
            logout: '/login',
            callback: '/callback',
            home: '/',
        },
        strategies: {
            cognito: {
                scheme: '@a1ter/nuxt-auth-aws-cognito-scheme/scheme/scheme',
                credentials: {
                    userPoolId: process.env.COGNITO_USER_POOL_ID,
                    userPoolWebClientId: process.env.COGNITO_CLIENT_ID,
                    region: process.env.COGNITO_REGION
                },
                endpoints: {
                    user: false,
                },
            },
        },
    },
    build: {
        babel: {
            presets({ isServer }, [preset, options]) {
                options.loose = true;
            }
        }
    }
}