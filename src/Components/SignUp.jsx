import React, { useState } from "react";
import { Box, Heading } from '@chakra-ui/react';
import StudentSignUp from "./StudentSignUp";
import TeacherSignUp from "./TeacherSingUp"; // Düzeltilmiş
import ParentSignUp from "./ParentsSignUp";

function SignUp() {
  const [activeComponent, setActiveComponent] = useState('student');

  return (
    <div className="">
      <div className="mr-12">
      <Box textAlign='center'>
        <Heading fontSize='100px' fontFamily='Gupter, serif' color='#ffe6e6'>Sign Up</Heading>
      </Box>
      <div className="flex items-center justify-center">
        <button 
          className='TypeAnimationsbutton ml-3' 
          onClick={() => setActiveComponent('student')}
        >
          Student
        </button>
        <button 
          className='TypeAnimationsbutton ml-3' 
          onClick={() => setActiveComponent('teacher')}
        >
          Teacher
        </button>
        <button 
          className='TypeAnimationsbutton ml-3' 
          onClick={() => setActiveComponent('parent')}
        >
          Parents
        </button>
      </div>
      </div>
      <div>
        {activeComponent === 'student' && <StudentSignUp />}
        {activeComponent === 'teacher' && <TeacherSignUp />}
        {activeComponent === 'parent' && <ParentSignUp />}
      </div>
    </div>
  );
}

export default SignUp;
