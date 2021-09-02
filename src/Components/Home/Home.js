import React from 'react'
import { Carousel} from 'react-bootstrap'
import FirstImg from '../../Images/Carousel/caroucel1.jpg'
import { Content } from './Content/Content'
import { Midbar } from './Midbar/Midbar'
import './styles.css';

export const Home = () => {
    const IMG =[
        {
            id: 1, 
            img: FirstImg, 
            caption: "Mental health affects us all. We're here for you.", 
            para: 'Get expert advice from trusted clinicians online, in-person or over the phone.'
        }
        // {id: 2, img: SeconedImg, caption: 'Seconed img', para: 'Nulla vitae elit libero'},
        // {id: 3, img: ThirdImg, caption: 'Third img', para: 'Nulla vitae elit libero'}
    ]
    return (
        <>
            <Midbar />
            <Carousel className="p-3">
                {
                    IMG.map((img) => (
                        <Carousel.Item key={img.id}>
                            <img
                            className="d-block img-fluid"
                            src={img.img}
                            alt="First slide"
                            />
                            <Carousel.Caption className="bg-secondary bg-gradient rounded">
                                <h3 className="fs-1">
                                    {img.caption}
                                </h3>
                                <p className="fs-4">
                                    {img.para}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <Content />
        </>
    )
}
