import React from 'react'

const SupplySection = ({ closeSection }) => {
  return (
    <article id="supply" className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Operations</h2>
      
      <div className="text-gray-300 space-y-4 mb-8">
        <p>
          Welcome to my Supply Chain Management and Operations Analysis page! This section is dedicated to showcasing my expertise in optimizing supply chains and conducting in-depth operations analysis. Here, you'll discover a collection of projects that highlight my skills in data analysis, process improvement, and cost-effective inventory management.
        </p>
        
        <p>
          I specialize in using data-driven approaches to enhance supply chain efficiency and streamline operations. Through my work, I've demonstrated proficiency in supply chain optimization, data analysis, and implementing strategies to reduce costs and improve overall business processes.
        </p>
        
        <p>
          Explore the projects below to see how I've leveraged my skills to solve real-world supply chain and operations challenges. From data analysis to process enhancement, I'm dedicated to delivering results that drive business success.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/demandForecasting" target="_blank" className="text-blue-400 hover:text-blue-300">
              Demand Planning Forecasting
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/weeklyDemand.png" alt="Weekly Demand Forecasting" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            Explore my "Demand Forecasting Python Project" where I delve into the world of supply chain optimization. In this project, I demonstrate the power of data-driven decision-making by building a demand forecasting model using historical product sales data. Discover how I generate synthetic data, preprocess it, and develop a forecasting model to optimize inventory levels, meet customer demand, and reduce carrying costs. This project showcases my expertise in supply chain and operational analysis, offering actionable insights for improved decision-making.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/demandForecasting" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Project
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/operationsAnalysis/blob/main/processCapacity.ipynb" target="_blank" className="text-blue-400 hover:text-blue-300">
              Process Capacity I
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/procCapacity1.png" alt="Process Capacity Analysis" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            The purpose of this project is to demonstrate an efficient Python script that calculates process capacity for a manufacturing line with three stations. By analyzing the given data, which includes the number of workers and task durations at each station, this script optimally schedules tasks in a sequential manner. The project reveals that processing 10 units requires just 490 seconds, showcasing my skills in streamlining manufacturing operations.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/operationsAnalysis/blob/main/processCapacity.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Project
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/operationsAnalysis/blob/main/processCapacity2.ipynb" target="_blank" className="text-blue-400 hover:text-blue-300">
              Process Capacity II
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/stepData.png" alt="Step Data Analysis" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            The purpose of this project is to analyze and optimize a multi-step manufacturing process. Using step data, including activity time per unit, capacity per worker, and the number of workers for each step (A, B, C, and D), I calculated the capacity per step, process cycle time, and overall process capacity. Furthermore, I conducted a scenario analysis by reducing the activity time per unit in Step D by 50% to investigate its impact on process capacity, ultimately demonstrating that the process remained unchanged as Step D was not the only bottleneck.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/operationsAnalysis/blob/main/processCapacity.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Project
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/flowTimeAnalysis/blob/main/flowtime.ipynb" target="_blank" className="text-blue-400 hover:text-blue-300">
              Process Flow Analysis for Hospital
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/flowtime6.png" alt="Hospital Flow Time Analysis" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            This project analyzes the flow of patients in a hospital emergency room's triage system using Little's Law. It provides insights into patient wait times, flow rates, inventory, and flow times at various stages of the process. Explore the efficiency of the proposed triage plan and its impact on the overall patient experience.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/flowTimeAnalysis/blob/main/flowtime.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Project
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/processQuality/blob/main/process_qlty.ipynb" target="_blank" className="text-blue-400 hover:text-blue-300">
              Process Quality Analysis
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/procDistribution.png" alt="Process Quality Distribution" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            This project showcases an in-depth analysis of a manufacturing process within a retail manufacturing firm. Through statistical analysis, the project evaluates the process's capability, identifies defects, and calculates essential quality metrics such as Cpk and defective rate. The results indicate that the process is capable of meeting specifications, but there is room for enhancement to achieve higher quality and reduced variability. This portfolio project demonstrates proficiency in process quality management and data-driven decision-making.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/processQuality/blob/main/process_qlty.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  )
}

export default SupplySection