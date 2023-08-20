"use client"
import React, { useEffect, useState } from 'react'

import styles from './add-product.module.css'
import { useRouter } from 'next/navigation'

function page() {
  // Images are sent through the form Data only.

  // Type.
  type productType = {
    title : string,
    description : string,
    price : number,
    discountPercentage : number,
    rating : number,
    stock : number,
    brand : string,
    category : string,
    thumbnail : string,
    images : [string]
  }
  const [product,setProduct] = useState<productType[]>([])
  const [thumbnail,setThumbnail] = useState<File | null>(null)
  const [images,setImages] = useState<FileList | null>(null);
  const [imageUrls,setImageUrls] = useState<string[]>([]);
  const router = useRouter();

  useEffect(()=>{
    let urls = [];
    for (let index = 0; index < (images ? images.length : 0); index++) {
        images && urls.push(URL.createObjectURL(images[index]))
    }
    setImageUrls(urls);
  },[images]);
  
  const uploadThumbnail = () => {
    document.getElementById('thumbnailInput')?.click();
  }
  const uploadImages = () => {
    document.getElementById('uploadImages')?.click();
  }
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
            <div className={styles.divisionContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemHead}> Thumbnail </div>
                        <div className={styles.thumbnailContainer} onClick={(e) => {uploadThumbnail()}}>
                            {thumbnail ?
                            <img className={styles.imageContainer} src={`${ thumbnail && URL.createObjectURL(thumbnail)}`} alt="" />
                            : <div className={styles.imageContainer}> Upload </div>
                            }
                        </div>
                        <input className={styles.inputContainer} type="file" style={{display:"none"}} id='thumbnailInput' onChange={(e) => {e.target.files && setThumbnail(e.target.files[0])}} />
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemHead}> Price </div>
                        <input className={styles.inputContainer} type="text" placeholder='Enter the price' />
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemHead}> Title </div>
                        <input className={styles.inputContainer} type="text" placeholder='Title of your product' />
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemHead}> Brand </div>
                        <input className={styles.inputContainer} type="text" placeholder='Enter your Brand' />
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemHead}> stock </div>
                        <input className={styles.inputContainer} type="text" placeholder='Enter your stock' />
                    </div>
                </div>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.itemHead}> Description </div>
                <textarea className={styles.descriptionBox} placeholder='Enter your description'  />
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.itemHead}> Category </div>
                <input className={styles.inputContainer} type="text" placeholder='Use / to seperate'  />
            </div>
            <div className={styles.itemContainer} onClick={() => {uploadImages()}}>
                <div className={styles.itemHead}> Images </div>
                <div className={styles.imagesImageContainer}>
                    {
                        imageUrls.map((imgUrl,index) => {
                            return(
                                <img src={`${ imgUrl}`} className={styles.imagesImageItem} alt="" key={index} />
                                )
                        })
                    }
                    {imageUrls.length !== 0 ? ""
                    : <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",fontSize:"30px",cursor:"pointer"}}> Upload </div>
                    }
                </div>
                <input className={styles.inputContainer} type="file" multiple id='uploadImages' style={{display:"none"}} onChange={(e) => {setImages(e.target.files)}} />
            </div>
            <div className={styles.containerBtns}>
                <div className={styles.submitBtn} onClick={() => {router.push("/cms/login")}}> Submit </div>
                <div className={styles.submitBtn} style={{backgroundColor:"red",color:"white"}} onClick={()=>{router.push("/")}}> Cancel </div>
            </div>
        </div>
    </div>
  )
}

export default page