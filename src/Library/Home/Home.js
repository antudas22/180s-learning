import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1>Courses: {courses.length}</h1>
            <Courses></Courses>
        </div>
    );
};

export default Home;