import React, {useState,useEffect} from 'react'

import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from 'react-icons/bs';
import { IconButton } from '@mui/material/IconButton';
import FilterNoneIcon from  '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import {BsFileText} from "react-icons/bs";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button  from '@mui/material/Button';
import {FcRightUp} from 'react-icons/fc';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import { RoundaboutLeftOutlined } from '@mui/icons-material';




function Quiz(){
  const [questions, setQuestions] = useState(
    [{questionText:"What is the meaning of HTML ?",
    questionType:"radio",
    options : [
      {optionText: "Hyper Text Markup Language"},
      {optionText: "Hyperlink Text Markup Language"},
      {optionText: "Hyper Text Mark Language"},
      {optionText: "Hyper Text Market Language"}

    ],
    open: true,
    required:false}]
  )

  function QuizUI(){
    return questions.map((ques,i)=>(
      <div>
          <Accordion expanded={questions[i].open} className={questions[i].open ? 'add border': "" }>

             <AccordionSummary className="AccordionSummaryaria" aria-controls="panelia-content" id="panelia-header" elevation={1}>
        
         {questions[i].open ?( 

          <div className="saved_questions">
            <Typography className="saved_questions_typo">
              {i+1}. {questions[i].questionText}</Typography>

              {ques.options.map((op,j)=>(

              <div key={j} > 
                <div style={{display:'flex',}}>
                  <FormControlLabel style={{marginLeft:"40px",marginBottom:"5px"}} disable control={<input type={ques.questionType}
                  color="primary" style={{marginRight: '3px',}} required={ques.type}/>} label={
                    <Typography Style={{fontFamily: 'Roboto,Arial,sans-serif',
                    fontSize:'13px',
                    fontWeight:'400',
                    letterSpacing:'.2px',
                    lineHeight:'20px',
                    color:'#202124'}}>
                      {ques.options[j].optionText}
                    

                    </Typography>

                  }/>
              
                </div>
          </div>



         ))}
         </div>
         ): ""}

        </AccordionSummary>

        <div className="question_boxes">
          <AccordionDetails>

          </AccordionDetails>


        </div>
    
      </Accordion>

      </div>
    ))
  }



return(
        <div>
            <div className="question_form">
              <br></br>
              <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                      <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Untitled Document"></input>
                      <input type="text" className="question_form_top_desc" placeholder="Form Description"></input>

                    </div>


                </div>
                  {QuizUI()}

              </div>


            </div>


        </div>

)

}

export default Quiz