
export const cleanImage = (imgUrl) => {
    if (imgUrl.lastIndexOf("?") !== -1) {
        return imgUrl.substring(0, imgUrl.lastIndexOf("?")) 
    } else {
        return imgUrl
    }
    
}