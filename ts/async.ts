interface Comment {
    postId: number,
    id: number,
    email: string,
    name: string,
    body: string
}

const getComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await response.json() as Comment[]
    return comments.filter(
        comment => comment.id % 2 === 0
    )
}

interface Image {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const getImages = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    const images = await response.json() as Image[]
    return images.filter(
        image => image.title.toLowerCase().startsWith('a')
    )
}

interface Albums {
    userId: number,
    id: number,
    title: string
}

const getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    const albums = await response.json() as Albums[ ]
    return albums.filter(
        album => album.id > 5
    )
}

const logResult = (result: any) => console.log(result)


getComments().then(logResult)
getImages().then(logResult)
getAlbums().then(logResult)
