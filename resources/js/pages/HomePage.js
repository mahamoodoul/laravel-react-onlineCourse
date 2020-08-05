import React, { Fragment } from 'react';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import Axios from "axios";
import CourseFeature from '../components/CourseFeature';
import CoursePlanHome from '../components/CoursePlanHome';
import PaymentGuide from '../components/PaymentGuide';
import MoreSeries from '../components/MoreSeries';
import Footer from '../components/Footer';
const HomePage = () => {



    // Axios.post('/getCourseFeatures')
    //     .then(function (response) {
    //         console.log(response.data);
    //     });


    return (
        <Fragment>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <CourseFeature></CourseFeature>
            <CoursePlanHome></CoursePlanHome>
            <PaymentGuide></PaymentGuide>
            <MoreSeries></MoreSeries>
            <Footer></Footer>
        </Fragment>
    );

};

export default HomePage;
