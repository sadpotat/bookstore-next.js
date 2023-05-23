const sortByTitle = (books) => {
    let sorted = [...books].sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
        return fa < fb ? -1 : 1;
    });
    return sorted;
};
export default sortByTitle;

export const sortByAuthor = (books) => {
    let sorted = [...books].sort((a, b) => {
        let fa = a.author.toLowerCase(),
            fb = b.author.toLowerCase();
        return fa < fb ? -1 : 1;
    });
    return sorted;
};

export const sortByPrice = (books) => {
    let sorted = [...books].sort((a, b) => {
        let fa = a.price,
            fb = b.price;
        return fa < fb ? -1 : 1;
    });
    return sorted;
};
