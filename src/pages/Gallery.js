import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FullHeading from '../components/FullHeading';
import Image from '../components/Image';
import Waypoint from '../components/Waypoint';
import axios from 'axios'

import image from "../images/education.jpg"
function Gallery({ element, onAblumSelectSendPhotos }) {

    const [albums, setAlbums] = useState()
    const [isLoading, Loading] = useState(true)
    const BASE_URL = 'https://ngo-server-1.herokuapp.com/'

    useEffect(() => {

        // axios.get(`${BASE_URL}/gallery`)
        //     .then(function (response) {
        //         setAlbums(response.data)
        //         console.log(albums)
        //         Loading(false)
        //     })
        //     .catch(err => console.log(err))
        setAlbums(albumss);
        Loading(false)
    }, [])

    const onAblumSelect = (photos) => {
        onAblumSelectSendPhotos(photos)
    }

    return (
        <div className="container mt-3">
            <Waypoint element={element} />
            <FullHeading title="Gallery" />
            <div className="mb-3">
                {info}
            </div>
            <div className="row">
                {!isLoading ? <>
                    {albums.map((album) =>
                        <div key={album.albumId} className="col-12 col-md-4 col-xxl-3 mb-3"
                            onClick={() => onAblumSelect(album.photos)}>
                            <Image image={`${BASE_URL}${album.thumbnail}`} text={album.overlayText} />
                            <Link to={`/Gallery/${album.albumId}`}>
                                <h6 className="text-center">{album.eventTitle}</h6>
                            </Link>
                        </div>)}

                </> : <h4 className="text-center">Loading...</h4>}
            </div>
        </div>
    );
}

export default Gallery;
// to={`/Gallery/${album.eventTitle}`}



const albumss = [
    {
        albumId: 1,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: "/images/albums/army.jpg",
        photos: [
            { url: "images/albums/army.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/women-with-child.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/report.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/self-defence.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" }]

    },
    {
        albumId: 2,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: "/images/albums/talent.jpg",
        photos: [
            { url: "images/albums/army.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/women-with-child.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/report.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/self-defence.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" }]
    },
    {
        albumId: 3,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: "/images/albums/education.jpg",
        photos: [
            { url: "images/albums/army.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/women-with-child.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/report.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/self-defence.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" }]
    },
    {
        albumId: 4,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: "/images/albums/miniature-art.jpg",
        photos: [
            { url: "images/albums/army.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/women-with-child.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/report.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/self-defence.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" }]
    },
    {
        albumId: 5,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: "/images/albums/self-defence.jpg",
        photos: [
            { url: "images/albums/army.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/women-with-child.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/report.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/self-defence.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" }]
    },
    {
        albumId: 6,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: "/images/albums/solar-power.jpg",
        photos: [
            { url: "images/albums/army.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/women-with-child.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/report.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/self-defence.jpg", type: "photo", altTag: "photo" },
            { url: "images/albums/talent.jpg", type: "photo", altTag: "photo" }]
    },

];

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"