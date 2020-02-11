type post = {
    autor: string,
    texto: string
}
const post1: post = {
    autor: "Patricia",
    texto: "Dia feliz"
}
const post2: post = {
    autor: "Patricia",
    texto: "Dia normal"
}
const post3: post = {
    autor: "Patricia",
    texto: "Dia lindo"
}
const post4: post = {
    autor: "Paty",
    texto: "Lindo"
}
const post5: post = {
    autor: "Paty",
    texto: "Feio"
}

const arrayPosts: post[] = [post1, post2, post3, post4, post5]

const filtrarAutor = (arrayPosts: post[], autor: string) =>{
    const filtroPosts: post[] = arrayPosts.filter((post) => {
        return post.autor === autor
    })
    return filtroPosts
}

const filtroPost: post[] = filtrarAutor(arrayPosts, "Patricia")
console.log(filtroPost) 