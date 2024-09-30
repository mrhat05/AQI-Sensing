import React from 'react';
import './BlogPage.css'; 

const HealthAndNaturePage = () => {
  return (
    <div className='blog-main-container'>
      <div className="blog-container">
        <header className="blog-header">
          <h1 className='blog-h1'>Health and Nature: A Symbiotic Relationship</h1>
        </header>
        
        <section className="blog-intro">
          <p className='blog-p'>
            Nature has a profound impact on human health and well-being. 
            The connection between spending time outdoors and improved physical and mental health is well-established.
          </p>
        </section>

        <section className="blog-content">
          <h2 className='blog-h2'>Benefits of Nature</h2>
          <p className='blog-p'>
            Engaging with nature helps reduce stress, anxiety, and depression. 
            It encourages physical activity, leading to healthier lifestyles and improved overall well-being.
          </p>

          <h2 className='blog-h2'>Importance of Green Spaces</h2>
          <p className='blog-p'>
            Access to parks and green areas fosters community engagement and provides a refuge from urban stressors. 
            These spaces are essential for maintaining mental health and physical fitness.
          </p>

          <h2 className='blog-h2'>Cultural Significance</h2>
          <p className='blog-p'>
            Many cultures celebrate the natural world through festivals and traditions, emphasizing the importance of protecting our environment. 
            This connection fosters a sense of responsibility toward nature.
          </p>

          <h2 className='blog-h2'>Conservation and Well-being</h2>
          <p className='blog-p'>
            Protecting natural habitats not only preserves biodiversity but also enhances our quality of life. 
            Sustainable practices and conservation efforts are vital for the health of both the planet and its inhabitants.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HealthAndNaturePage;
