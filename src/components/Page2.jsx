import React from 'react';
import './BlogPage.css'; 

const DelhiPollutionPage = () => {
  return (
    <div className='blog-main-container'>
      <div className="blog-container">
        <header className="blog-header">
          <h1 className='blog-h1'>Delhi Pollution: A Rising Concern</h1>
        </header>
        
        <section className="blog-intro">
          <p className='blog-p'>
            Delhi, the capital of India, faces severe air pollution, with levels often exceeding safe limits. 
            The city's rapid urbanization, vehicle emissions, and industrial activities contribute significantly to this crisis.
          </p>
        </section>

        <section className="blog-content">
          <h2 className='blog-h2'>Causes of Pollution</h2>
          <p className='blog-p'>
            Major contributors to Delhi's air pollution include vehicular emissions, dust from construction sites, and industrial discharges. 
            The geographical and climatic conditions also play a role in trapping pollutants in the atmosphere.
          </p>

          <h2 className='blog-h2'>Health Impacts</h2>
          <p className='blog-p'>
            The high pollution levels in Delhi lead to various health problems, including respiratory diseases, heart issues, and aggravated allergies. 
            Children and the elderly are particularly at risk.
          </p>

          <h2 className='blog-h2'>Government Initiatives</h2>
          <p className='blog-p'>
            The government has introduced measures like the odd-even vehicle scheme and increased green cover, but public awareness and cooperation are vital for long-term solutions.
          </p>

          <h2 className='blog-h2'>Personal Responsibility</h2>
          <p className='blog-p'>
            Citizens can contribute to reducing pollution by using public transport, minimizing waste, and supporting clean air initiatives. 
            Small changes can collectively make a significant impact.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DelhiPollutionPage;
