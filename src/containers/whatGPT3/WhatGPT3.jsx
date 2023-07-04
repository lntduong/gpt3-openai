import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wpgt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis blanditiis? Ab repudiandae facere ut itaque saepe, maxime impedit ipsam est, eum in nisi praesentium nostrum facilis asperiores minus laudantium." />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbot" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis blanditiis? Ab repudiandae facere ut itaque saepe, maxime impedit ipsam est, eum in nisi praesentium nostrum facilis asperiores minus laudantium."/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis blanditiis? Ab repudiandae facere ut itaque saepe, maxime impedit ipsam est, eum in nisi praesentium nostrum facilis asperiores minus laudantium."/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perferendis blanditiis? Ab repudiandae facere ut itaque saepe, maxime impedit ipsam est, eum in nisi praesentium nostrum facilis asperiores minus laudantium."/>
      </div>

    </div>
  )
}

export default WhatGPT3