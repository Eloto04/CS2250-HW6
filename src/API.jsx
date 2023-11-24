import React from "react";

export default function App() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 100) + 1}`)
        .then((response) => response.json())
        .then((json) => {
            setPosts(json);
        });
    }, []);

    console.log(posts);

    return (
        <>
            <h1>Rick and Morty Character Generator</h1>
                <img src={posts.image}/>
                <h2><b>Character Name: </b>{posts.name}</h2>
                <h2><b>Status: </b>{posts.status}</h2>
                <h2><b>Species: </b>{posts.species}</h2>
                <h2><b>Gender: </b>{posts.gender}</h2>
            <a href="javascript:history.go(-1)">Click here to return to the home page.</a>
            <br/>
            <a href="">Alternatively, click here or reload the page to generate a new character.</a>
        </>
            );


}