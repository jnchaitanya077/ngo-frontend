import React, { useState, useEffect } from 'react';
import Waypoint from './Waypoint';
import Button from './Button'
import ReactImageVideoLightbox from "react-image-video-lightbox";
import { useRouteMatch } from "react-router-dom";
import GradientImage from './GradientImage';
import { cta } from '../data/Styles'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
function GalleryDisplay({ element, albumPhotos }) {
    const match = useRouteMatch("/Gallery/:albumId");
    const {
        params: { albumId }
    } = match;

    // set the fetched album to the state.
    const [album, setAlbum] = useState([])
    const [albumName, setAlbumName] = useState("")
    // for light box to navigate
    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false
    })

    useEffect(() => {
        //fetch album data and set the state based on title
        console.log("inside")
        if (albumPhotos.length > 0) {
            setAlbum(albumPhotos)

        } else {
            const BASE_URL = 'https://ngo-server-1.herokuapp.com'
            axios.get(`${BASE_URL}/gallery/${albumId}`)
                .then(function (response) {
                    console.log(response.data)
                    setAlbum(response.data.photos)
                    setAlbumName(response.data.eventTitle)
                })
                .catch(err => console.log(err))
        }
    }, [albumPhotos, albumId])


    const onSelect = (photoIndex) => {
        setPhoto({ photoIndex: photoIndex, isOpen: true })
    }

    return (
        <div>
            <GradientImage
                title={albumName !== "" ? albumName : albumId}
                image={album.length > 0 ? album[0].url : null} />
            <div className="container odd">
                <Waypoint element={element} />
                <div className="row">
                    {album.map((item) => <div
                        key={uuidv4()}
                        className="col-md-4 col-xl-3 mb-4"
                    >
                        <img src={item.url}
                            alt={item.altTag}
                            className="fluid-image shadow-lg "
                            width="100%"
                            height="auto"
                            style={{ border: "5px solid grey" }}
                            onClick={() => onSelect(album.findIndex(x => x.url === item.url))}
                        />
                    </div>)}

                    {photo.isOpen && <ReactImageVideoLightbox
                        data={album}
                        startIndex={photo.photoIndex}
                        showResourceCount={true}
                        onCloseCallback={() => setPhoto({ ...photo, isOpen: false })}
                    />}
                </div>
                <Button name="Back" style={cta} url="/Gallery" />
            </div>
        </div>
    );
}


export default GalleryDisplay;
