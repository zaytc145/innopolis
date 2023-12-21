const getComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await response.json()
    return comments.filter(
        comment => comment.id % 2 === 0
    )
}

const getImages = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    const images = await response.json()
    return images.filter(
        image => image.title.toLowerCase().startsWith('a')
    )
}

const getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    const albums = await response.json()
    return albums.filter(
        album => album.id > 5
    )
}

const logResult = (result) => console.log(result)


getComments().then(logResult)
getImages().then(logResult)
getAlbums().then(logResult)
