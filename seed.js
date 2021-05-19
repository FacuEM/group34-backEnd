const db = require("./api/db");
const { Post, Category } = require("./api/models");

db.sync({ force: false })
  .then(() => {
    console.log("Connection ready...");
  })
  .then(async () => {
    let art1 = await Post.create({
      title: "Articulo N°1",
      body: "bla bla bla bla bla bla",
      image:
        "https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    });
    let art2 = await Post.create({
      title: "Articulo N°2",
      body: "bla bla bla bla bla bla",
      image:
        "https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    });
    let art3 = await Post.create({
      title: "Articulo N°3",
      body: "bla bla bla bla bla bla",
      image:
        "https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    });
    let cat1 = await Category.create({
      title: "Noticias",
    });
    let cat2 = await Category.create({
      title: "Tecnologia",
    });
    let cat3 = await Category.create({
      title: "Deportes",
    });
    let cat4 = await Category.create({
      title: "Historias",
    });

    cat1.addPosts([art1, art2]);
    cat2.addPosts([art2, art3]);
    cat3.addPosts([art3, art1]);
    cat4.addPosts([art1, art2]);
  });
