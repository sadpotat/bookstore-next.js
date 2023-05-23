const sortByName = (books) => {
    let sorted = [...books].sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
        return fa < fb ? -1 : 1;
    });
    return sorted;
};
export default sortByName;
