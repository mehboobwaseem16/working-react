import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: `https://5000-da0ed52e-2525-4905-b79e-9aed4da137ed.ws-eu01.gitpod.io/${item}`,
                    thumbnail: `https://5000-da0ed52e-2525-4905-b79e-9aed4da137ed.ws-eu01.gitpod.io/${item}`
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
