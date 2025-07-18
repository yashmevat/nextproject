export const getImage = (id,images)=>{
    const myimg = images.find((img)=> img.id===id)
    return myimg?.guid
}


export async function fetchWpImageById(id) {
  try {
    const res = await fetch(`http://localhost/wordpress/wp-json/custom/v1/image/${id}`);
    if (!res.ok) {
      throw new Error(`Image not found (ID: ${id})`);
    }
    const data = await res.json();
    return data; // { id, url, alt, title }
  } catch (error) {
    console.error("Failed to fetch image:", error);
    return null;
  }
}


export const getValue = (type,texts,index)=>{
    return texts.filter((txt)=>txt.type===type)[index]?.value
}
