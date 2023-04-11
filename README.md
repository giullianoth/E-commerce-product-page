# E-commerce product page - Web Design Project

[![HTML 5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS 3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)

---
**Disponível em | _Avaliable in_: Português - BR | _English_**

Este projeto é um desafio da plataforma [Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6), que consiste na simulação de uma página de apresentação de produtos de um e-commerce. A página é responsiva: se adapta a diferenres tamanhos de tela conforme o dispositivo em que é visualizado.

Nesta página consta informações do produto, como imagens navegáveis, descrição do produto, informações de preço e ação para compra.

Além disso, a página apresenta elementos de cabeçalho, como área do logo, menu e links que direcionam para área de perfil e de compras.

*This project is a challenge for the [Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) platform, which consists of simulating an e-commerce product presentation page. The page is responsive: it adapts to different screen sizes depending on the device on which it is viewed.*

*This page contains product information, such as navigable images, product description, price information and purchase action.*

*In addition, the page features header elements such as the logo area, menu and links that lead to the profile and shopping area.*

## Status do projeto | Project status

Projeto finalizado, sendo aberto a propostas de melhorias ou correções.

*Finalized project, being open to proposals for improvements or corrections.*

## Layout

Construído a partir do método *mobile-first*, o projeto é responsivo, ou seja, é adaptável aos mais variados tamanhos e resoluções de telas, conforme demonstrado a seguir.

*Built from the mobile-first method, the project is responsive, that is, it is adaptable to the most varied sizes and screen resolutions, as shown below.*

![Captura de tela em 375px | Screenshot in 375px](assets/images/screenshots/Screenshot-375px.png)

Captura de tela em 375px | Screenshot in 375px

---

![Captura de tela em 768px | Screenshot in 768px](assets/images/screenshots/Screenshot-768px.png)

Captura de tela em 768px | Screenshot in 768px

---

![Captura de tela em 1440px | Screenshot in 1440px](assets/images/screenshots/Screenshot-1440px.png)

Captura de tela em 1440px | Screenshot in 1440px

---

Você também pode conferir a página acessando este link: [https://e-commerce-product-page-lake.vercel.app/](https://e-commerce-product-page-lake.vercel.app/).

**Observação:** Por se tratar de um projeto para fins acadêmicos, os links contidos na página não funcionarão, exceto os dois últimos localizados no rodapé e os botões para determinada ação.

*You can also check the page by accessing this link: [https://e-commerce-product-page-lake.vercel.app/](https://e-commerce-product-page-lake.vercel.app/).*

*__Note:__ As it is a project for academic purposes, the links contained on the page will not work, except for the last two located in the footer and the buttons for a certain action.*

## Ferramentas e tecnologias utilizadas

## Tecnologias utilizadas | Technologies used

Foram utilizadas as seguintes tecnologias para a construção desta página:

*The following technologies were used to build this page:*

- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS 3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Sass](https://sass-lang.com/)

Vale lembrar que foram aplicados o uso de tags semânticas ao HTML, para tornar a página com acessibilidade facilitada e seguir as boas práticas do desenvolvimento web.

O uso do preprocessador CSS (nesse caso o Sass) torna mais produtiva a aplicação das folhas de estilo, o que possibilita a manutenibilidade posteriormente.

*It is worth remembering that the use of semantic tags was applied to the HTML, to make the page easier to access and follow the good practices of web development.*

*Using the CSS preprocessor (in this case Sass) makes the application of stylesheets more productive, which enables later maintainability.*

## Como instalar | How to install

Para baixar e instalar o projeto no seu computador, siga os seguintes passos:

- Instale o editor [VS Code](https://code.visualstudio.com/) (recomendo fortemente, mas se há outro editor do seu gosto, não tem problema) e abra o projeto nele.
- Se você está usando VS Code, instale a extensão "[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)", ela que vai converter seu Sass em CSS. Após instalado:
    - Clique no ícone de engrenagem, depois em "Configurações de extensão" e depois em "settins.json";
    - Em ```settings.json``` acrescente os seguintes parâmetros:
    ```json
    "liveSassCompile.settings.formats":[ 
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "assets/styles/css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "assets/styles/css"
        },
    ]
    ```
    - Depois, na parte inferior do editor, clique em "Watch Sass".
- Se você não está usando VS Code, você precisa instalar o NodeJS para usar o Sass.
    - Depois de instalar o NodeJS, abra o prompt de comando e navegue até o diretório do projeto.
    ```
    cd [caminho do projeto]
    ```
    - Instale o Sass com o ```npm```.
    ```
    npm install -g sass
    ```
    - Ative o compilador com o seguinte comando: (Para criar a versão minificada do CSS utilize a flag ```--style=compressed```)
    ```
    sass assets/styles/scss/style.scss:assets/styles/css/style.css --watch
    ```
- Recomendo também instalar a extensão "[Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)". Caso não queira, abra o arquivo ```index.html``` no navegador.
- Divirta-se!

*To download and install the project on your computer, follow these steps:*

- *Install the [VS Code](https://code.visualstudio.com/) editor (I highly recommend it, but if there's another editor you like, no problem) and open the project in it.*
- *If you are using VS Code, install the "[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)" extension, which will convert your Sass into CSS. After installed:*
    - *Click on the gear icon, then on "Extension settings" and then on "settins.json";*
    - *In ```settings.json``` add the following parameters:*
    ```json
    "liveSassCompile.settings.formats":[ 
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "assets/styles/css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "assets/styles/css"
        },
    ]
    ```
    - *Then, at the bottom of the editor, click on "Watch Sass".*
- *If you are not using VS Code, you need to install NodeJS to use Sass.*
    - *After installing NodeJS, open the command prompt and navigate to your project directory.*
    ```
    cd [project path]
    ```
    - *Install Sass with ```npm```.*
    ```
    npm install -g sass
    ```
    - *Activate the compiler with the following command: (To create the minified version of the CSS use the flag ```--style=compressed```)*
    ```
    sass assets/styles/scss/style.scss:assets/styles/css/style.css --watch
    ```

- *I also recommend installing the "[Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)" extension. If not, open the ```index.html``` file in your browser.*
- *Enjoy it!*

## Autor | Author

Feito com :heart: por este cara sonhador:

*Made with :heart: by this dreamy guy:*

| <img src="https://avatars.githubusercontent.com/u/106249494?v=4" width="100px" style="border-radius: 50%"> **Giulliano Guimarães** |
| ---------------------------------------------------------------------------------------------------------------------------------- |
|[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/giullianoth) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/giullianoth/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giullianoth/) [![GMail](https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:llthguimaraes@gmail.com) |
---