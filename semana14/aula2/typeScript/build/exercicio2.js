const post1 = {
    autor: "Patricia",
    texto: "Dia feliz"
};
const post2 = {
    autor: "Patricia",
    texto: "Dia normal"
};
const post3 = {
    autor: "Patricia",
    texto: "Dia lindo"
};
const post4 = {
    autor: "Paty",
    texto: "Lindo"
};
const post5 = {
    autor: "Paty",
    texto: "Feio"
};
const arrayPosts = [post1, post2, post3, post4, post5];
const filtrarAutor = (arrayPosts, autor) => {
    const filtroPosts = arrayPosts.filter((post) => {
        return post.autor === autor;
    });
    return filtroPosts;
};
const filtroPost = filtrarAutor(arrayPosts, "Patricia");
//# sourceMappingURL=exercicio2.js.map