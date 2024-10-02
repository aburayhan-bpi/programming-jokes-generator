const getJoke = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    const data = await res.json()
    // console.log(data.joke);

    const showJoke = document.getElementById('jokeContainer');
    showJoke.classList.remove('hidden')
    showJoke.innerText = data.joke
}