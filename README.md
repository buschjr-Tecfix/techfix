# Site Techfix Tecnologia e Segurança

Site institucional estático, responsivo e pronto para hospedagem gratuita no GitHub Pages.

## Antes de publicar

1. Abra `index.html`, `robots.txt` e `sitemap.xml`.
2. Substitua `SEU-USUARIO` pelo nome de usuário real do GitHub.
3. Quando o novo número com DDD 48 estiver ativo:
   - altere o número visível em `index.html`;
   - altere todos os links `wa.me`;
   - altere `WHATSAPP_NUMBER` em `script.js`;
   - altere o telefone dentro do JSON-LD no topo de `index.html`.
4. Confira e-mail, Instagram e Facebook.
5. Quando comprar o domínio, atualize:
   - `canonical`;
   - `url` do JSON-LD;
   - `robots.txt`;
   - `sitemap.xml`.

## Publicação no GitHub Pages

1. Crie um repositório chamado `techfix`.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde a publicação.

O endereço ficará semelhante a:

`https://SEU-USUARIO.github.io/techfix/`

## Estrutura

- `index.html`: conteúdo e SEO
- `styles.css`: identidade visual e responsividade
- `script.js`: menu e formulário que abre o WhatsApp
- `assets/`: imagens otimizadas
- `robots.txt` e `sitemap.xml`: indexação
