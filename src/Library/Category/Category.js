import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>This Category has {courses.length} courses.</h2>
            <Courses></Courses>
        </div>
    );
};

export default Category;