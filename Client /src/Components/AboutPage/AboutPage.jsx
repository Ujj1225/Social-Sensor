import React from "react";

const ProjectAbstractPage = () => {
  return (
    <div className="py-12 px-4 flex justify-center items-center h-screen mt-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6">Project Abstract</h2>
        <p className="text-xl text-gray-800">
          The ”Social Sensor” project is a comprehensive initiative aimed at
          tackling the growing problem of disparaging remarks and misinformation
          directed towards public figures, with an initial focus on addressing
          these issues within news portals before extending its scope to include
          social media platforms. Leveraging a multifaceted approach, the
          project utilizes cutting-edge technologies such as web scraping,
          natural language processing (NLP), and sentiment analysis to develop
          an advanced software tool for continuous monitoring and anal- ysis of
          online content. By leveraging methodologies including BeautifulSoup,
          NLTK, and scikit-learn, the project ensures technical feasibility
          while prioritizing user data privacy and platform integrity.
          <br />
          <br />
          Through rigorous requirement analysis, the project defines a range of
          functional and non-functional requirements, covering aspects such as
          keyword setup, real-time monitoring, sentiment analysis, and
          notification systems. Data collection and integration are pivotal,
          involving the incorporation of social media platform APIs and the
          sourcing of relevant data from reputable sources such as Kaggle. The
          experimental setup includes website identi- fication, web scraping
          techniques, sentiment analysis employing neural networks, and the
          integration of a notification system, all contributing to the
          project’s systematic approach in addressing identified issues.
          <br />
          <br />
          Moreover, the ”Social Sensor” project aims to provide a holistic
          solution to combat neg- ativity and misinformation targeting public
          figures. By identifying instances of hate speech and damaging
          communications directed towards public figures, the project seeks to
          foster a safer and more positive online environment. Through ongoing
          testing, optimization, user feedback iteration, and meticulous
          documentation, the project aims not only to address immediate
          challenges posed by negative online content but also to contribute to
          a broader cultural shift towards responsible and respectful online
          discourse.
          <br />
          <br />
          Keywords: Natural Language Processing (NLP),Web Scraping ,Natural
          Language Toolkit(NLTK)
        </p>
      </div>
    </div>
  );
};

export default ProjectAbstractPage;
