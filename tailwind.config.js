module.exports = {
    content: [
        "./*.{html,js}",
        "./scripts/*.js",
        "./index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'vazir': ['Vazir-Regular', 'Calibri', 'Arial Narrow', ],
                'vazir-black': ['Vazir-Black', 'Calibri', 'Arial Narrow', ],
                'vazir-bold': ['Vazir-Bold', 'Calibri', 'Arial Narrow', ],
                'vazir-medium': ['Vazir-Medium', 'Calibri', 'Arial Narrow', ],
                'vazir-light': ['Vazir-Light', 'Calibri', 'Arial Narrow', ],
                'vazir-thin': ['Vazir-Thin', 'Calibri', 'Arial Narrow', ],
            },
            backgroundImage: {
                'chat': "url('../src/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')",
            },
            colors: {
                ChatSheet: "#0B141A",
                MessagePrime: "#005C4B",
                MessageSecond: "#202C33",
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
    darkMode: 'class',
}