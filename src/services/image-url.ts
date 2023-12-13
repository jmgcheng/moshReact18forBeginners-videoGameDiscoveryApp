const getCroppedImageUrl = (url: string) => {
    const targert = 'media/'
    const index = url.indexOf(targert) + targert.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    // we'll get all the characters from the beginning of the URL, all the way to the media parameter, including the media parameter itself
    // developer console > Network > Img > check the sizes
}

export default getCroppedImageUrl;