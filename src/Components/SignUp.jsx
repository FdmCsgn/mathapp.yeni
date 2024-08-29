


import React, { useState } from "react";
import { Box, Heading } from '@chakra-ui/react';
import StudentSignUp from "./StudentSignUp";
import TeacherSignUp from "./TeacherSingUp"; // Düzeltilmiş
import ParentSignUp from "./ParentsSignUp";

function SignUp() {
  const [activeComponent, setActiveComponent] = useState('student');

  return (
    <div className="">
      <div className="">
        <Box textAlign='center'>
          <Heading fontSize='100px' color='#ffe6e6'>Kayıt ol</Heading>
        </Box>
        <div className="flex items-center justify-center">
          <button
            className='TypeAnimationsbutton ml-3'
            onClick={() => setActiveComponent('student')}
          >
            Öğrenci
          </button>
          <button
            className='TypeAnimationsbutton ml-3'
            onClick={() => setActiveComponent('teacher')}
          >
            Öğretmen
          </button>
          <button
            className='TypeAnimationsbutton ml-3'
            onClick={() => setActiveComponent('parent')}
          >
            Veli
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
