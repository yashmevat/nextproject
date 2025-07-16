export const getImage = (id,images)=>{
    const myimg = images.find((img)=> img.id===id)
    return myimg?.guid
}