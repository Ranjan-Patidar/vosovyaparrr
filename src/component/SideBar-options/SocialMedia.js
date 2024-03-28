import React, { Fragment, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp, FaAmazon } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { SiZomato, SiSwiggy } from "react-icons/si";
import { toast } from 'react-toastify';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody,Form } from 'reactstrap';
const SocialMedia = () => {

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors, isSubmitSuccessful },
    } = useForm();


    const handleData = (data) => {

        console.log(data);
        toast.success("form submitted successfull")

    }
    return (
        <Fragment>
            <Breadcrumb parent="Starter kit" title="Sample Page" />
            <Container fluid={true}>
                <Row>
                    <Col sm="6" style={{width:"100%"}}>
                        <Card>
                            <CardHeader>
                                <h5>SOCIAL MEDIA</h5>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit(handleData)} className='p-8 flex flex-col bg-blue-100 rounded-md gap-5'>
                                    <div className='flex justify-center items-center gap-8 '>
                                        <div className='flex flex-col gap-10 mb-4' style={{marginLeft:"10%"}}>
                                            {/* Facebook */}
                                            <div className='flex gap-2 mb-4'>
                                                <label htmlFor='facebook' className='text-blue-500'>
                                                    <FaFacebook size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='facebook'
                                                    id='facebook'
                                                    placeholder='Enter your Facebook url'
                                                    className='border-2 border-sm rounded-md p-2 border-black'
                                                    {...register('facebook', { required: true })}
                                                />
                                                {
                                                    errors.facebook ? <span style={{color:"red"}}>please fill the details</span> : <div></div>
                                                }
                                            </div>
                                            {/* amazon */}
                                            <div className='flex gap-2 mt-1.5'>
                                                <label htmlFor='amazon' className='text-black'>
                                                    <FaAmazon size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='amazon'
                                                    id='amazon'
                                                    placeholder='Enter your amazon url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('amazon', { required: true })}
                                                />
                                            </div>
                                            {
                                                errors.amazon ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                            }

                                            {/* instagram  */}
                                            <div className='flex gap-2 mt-1'>
                                                <label htmlFor='instagram' className='text-pink-500'>
                                                    <FaInstagram size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='instagram'
                                                    id='instagram'
                                                    placeholder='Enter your instagram url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('instagram', { required: true })}

                                                />
                                            </div>
                                            {
                                                errors.instagram ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                            }

                                            {/* linkedin  */}
                                            <div className='flex gap-2 mb-2'>
                                                <label htmlFor='linkedin' className='text-blue-500'>
                                                    <FaLinkedin size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='linkedin'
                                                    id='linkedin'
                                                    placeholder='Enter your linkedin url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('linkedin', { required: true })}

                                                />
                                                {
                                                    errors.linkedin ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                                }
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-10' style={{marginRight:"10%"}}>

                                            {/* youtube  */}
                                            <div className='flex gap-2'>
                                                <label htmlFor='youtube' className='text-red-500'>
                                                    <FaYoutube size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='youtube'
                                                    id='youtube'
                                                    placeholder='Enter your Facebook url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('youtube', { required: true })}

                                                />
                                            </div>
                                            {
                                                errors.youtube ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                            }

                                            {/* twitter  */}
                                            <div className='flex gap-2'>
                                                <label htmlFor='twitter' className='text-blue-500'>
                                                    <FaTwitter size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='twitter'
                                                    id='twitter'
                                                    placeholder='Enter your twitter url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('twitter', { required: true })}

                                                />
                                            </div>
                                            {
                                                errors.twitter ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                            }

                                            {/* swiggy  */}
                                            <div className='flex gap-2'>
                                                <label htmlFor='swiggy' className='text-orange-500'>
                                                    <SiSwiggy size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='swiggy'
                                                    id='swiggy'
                                                    placeholder='Enter your swiggy url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('twitter', { required: true })}

                                                />
                                            </div>
                                            {
                                                errors.swiggy ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                            }

                                            {/* zomato  */}
                                            <div className='flex gap-2'>
                                                <label htmlFor='zomato' className='text-red-500'>
                                                    <SiZomato size={50} />
                                                </label>
                                                <input
                                                    type='text'
                                                    name='zomato'
                                                    id='zomato'
                                                    placeholder='Enter your zomato url'
                                                    className=' border-2 border-sm rounded-md p-2  border-black'
                                                    {...register('zomato', { required: true })}
                                                />
                                            </div>
                                            {
                                                errors.zomato ? <span  style={{color:"red"}}>please fill the details</span> : <div></div>
                                            }



                                        </div>
                                    </div>
                                    <button type='submit' className='p-2 rounded-md bg-blue-600'>Save</button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default SocialMedia