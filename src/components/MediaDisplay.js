/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react';
import Waypoint from './Waypoint';
import Button from './Button'
import Lightbox from "react-image-lightbox";
import ReactImageVideoLightbox from "react-image-video-lightbox"
import { useRouteMatch } from "react-router-dom";
import GradientImage from './GradientImage';
import { cta } from '../data/Styles'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import _ from 'lodash'
function MediaDisplay({ element }) {
    const match = useRouteMatch("/Media/:category");
    const {
        params: { category }
    } = match;

    const [mediaData, setMediaData] = useState({});
    const [albumTitle, setAlbumTitle] = useState("");
    const [onlyPhotos, setOnlyPhotos] = useState([]);
    const [isloading, loading] = useState(true);
    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false,
        url: ""
    })
    const BASE_URL = 'https://ngo-server-1.herokuapp.com'
    useEffect(() => {
        axios.get(`${BASE_URL}/media/${_.camelCase(category)}`)
            .then(function (response) {
                setMediaData(response.data);
                setAlbumTitle(response.data.title)
                setOnlyPhotos(response.data.onlyPhotos)
                loading(false)
            })
            .catch(err => console.log(err))
    }, [category])

    const onSelect = (photoIndex, url) => {
        setPhoto({ photoIndex: photoIndex, isOpen: true, url: url })
    }

    return (
        <div>
            <GradientImage
                title={albumTitle}
                image={""} />
            {/* <h3 className="text-center">{albumTitle}</h3> */}
            <div className="container odd">
                <Waypoint element={element} />
                <div className="row">
                    {!isloading ? <>
                        {mediaData.photos.map(item => <div
                            key={uuidv4()}
                            className="col-md-4 col-xl-3 mb-4"
                            style={{ width: "18rem" }}
                        >
                            <img src={`${BASE_URL}/${item.image}`}
                                alt={item.title}
                                className="fluid-image shadow-lg "
                                width="100%"
                                height="200px"
                                style={{ border: "5px solid grey" }}
                                onClick={() => onSelect(item.id, item.image)}
                            />
                            {/* {category == 'VideoInterviews' ? <>
                                <div>
                                    <iframe
                                        title={item.id}
                                        src={item.image}
                                        width="100%"
                                        height="200px"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                    />
                                </div>
                            </> : <>
                                    <img src={`${BASE_URL}/${item.image}`}
                                        alt={item.title}
                                        className="fluid-image shadow-lg "
                                        width="100%"
                                        height="200px"
                                        style={{ border: "5px solid grey" }}
                                        onClick={() => onSelect(item.id, item.image)}
                                    />
                                </>} */}

                            <div>
                                <h4 className="mb-0">{item.title}</h4>
                                <p ><em>Published on :</em>{" "}{item.date}</p>
                            </div>
                        </div>)}
                        {((photo.isOpen) && (category == 'PrintMedia')) ?
                            <Lightbox
                                mainSrc={`${BASE_URL}/${photo.url}`}
                                onCloseRequest={() => setPhoto({ ...photo, isOpen: false, url: "" })}
                            /> : ((photo.isOpen) && (category == 'VideoInteviews')) ?
                                <ReactImageVideoLightbox

                                    data={onlyPhotos}
                                    startIndex={photo.photoIndex}
                                    showResourceCount={true}
                                    onCloseCallback={setPhoto({ ...photo, isOpen: false, url: "" })}
                                /> : null
                        }
                        <Button name="Back" style={cta} url="/Media" />
                    </> : <div className="ui active centered inline loader"></div>}
                </div>
            </div>
        </div>
    );
}


export default MediaDisplay;


const data = {
    printMedia: {
        title: 'Print Media',
        photos: [
            {
                id: 0,
                title: "sample title",
                date: '2-2-2020',
                image: 'images/media/printMedia/news-1.png'
            },
            {
                id: 1,
                title: "sample title",
                date: '6-2-2020',
                image: 'images/media/printMedia/news-2.jpg'
            },
            {
                id: 2,
                title: "sample title",
                date: '9-2-2020',
                image: 'images/media/printMedia/news-3.jpg'
            },
            {
                id: 3,
                title: "sample title",
                date: '12-2-2020',
                image: 'images/media/printMedia/news-1.png'
            },
            {
                id: 4,
                title: "sample title",
                date: '12-2-2020',
                image: 'images/media/printMedia/news-2.jpg'
            },
            {
                id: 5,
                title: "sample title",
                date: '22-2-2020',
                image: 'images/media/printMedia/news-1.png'
            },
            {
                id: 6,
                title: "sample title",
                date: '20-2-2020',
                image: 'images/media/printMedia/news-3.jpg'
            },
            {
                id: 7,
                title: "sample title",
                date: '20-2-2020',
                image: 'images/media/printMedia/news-1.png'
            },
            {
                id: 8,
                title: "sample title",
                date: '22-2-2020',
                image: 'images/media/printMedia/news-2.jpg'
            },
        ]
    },
    SocialMedia: {
        title: 'Social Media',
        photos: [
            {
                id: 0,
                title: "sample title",
                date: '2-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 1,
                title: "sample title",
                date: '6-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 2,
                title: "sample title",
                date: '9-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 3,
                title: "sample title",
                date: '12-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 4,
                title: "sample title",
                date: '12-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 5,
                title: "sample title",
                date: '22-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 6,
                title: "sample title",
                date: '20-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 7,
                title: "sample title",
                date: '20-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
            {
                id: 8,
                title: "sample title",
                date: '22-2-2020',
                image: '',
                link: 'https://www.facebook.com/india.savethechildren'
            },
        ]
    },

    electronicMedia: {
        title: 'Electronic Media',
        photos: [
            {
                id: 0,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 1,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 2,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 3,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 4,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 5,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 6,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 7,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
            {
                id: 8,
                date: '2-2-2020',
                image: '',
                title: "sample title",
                link: "https://timesofindia.indiatimes.com/india/centre-asks-5-states-to-expedite-covid-vaccination-of-healthcare-workers/articleshow/81177402.cms"
            },
        ]
    },
    videoInterviews: {
        title: 'Electronic Media',
        photos: [
            {
                id: 0,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
            {
                id: 1,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/k6GVn0r-hLA'
            },
            {
                id: 2,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/aVkIkORA0tQ'
            },
            {
                id: 3,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
            {
                id: 4,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
            {
                id: 5,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
            {
                id: 6,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
            {
                id: 7,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
            {
                id: 8,
                title: "sample title",
                date: '2-2-2020',
                image: 'https://youtu.be/Fi7VkSwCXnI'
            },
        ]
    },
}