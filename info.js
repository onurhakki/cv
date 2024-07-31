
const information = {
    "general": {
        "name": "Onur Hakkı Eyüboğlu",
        "title":"Ph.D. Candidate",
        "workplace":"EXIST (Energy Exchange Istanbul)",
        "position":"Electricity Market Settlement Specialist",
        "address":"Istanbul, Turkey",
        "email":"eyubogluo@itu.edu.tr",
        "military":"service	completed",
        "birthday":"29.03.1997",
        "website":"https://onurhakki.github.io/cv/",
        "linkedin":"https://www.linkedin.com/in/onurhakki/",
        "github":"https://github.com/onurhakki",

    },
    "experience": {
        3:{
            "position":"Research Assistant",
            "startdate":"01.12.2019",
            "enddate":"01.01.2023",
            "department":"Electrical Engineering Department",
            "workplace":"Istanbul Technical University",
            "accomplishment0":"Preparing & assessing course materials - Electrical Power Quality & Harmonics | Engineering & Project Management | Electrical Engineering Project etc.",
            "accomplishment1":"Consulting to M.Sc. and B.Sc. students",
            "accomplishment2":"Used algorithms: FMEA, K-Means Clustering, MILP, Monte Carlo Simulation, Particle Swarm Optimization (PSO)",
            "accomplishment3":"Citations (All: 39) | (Scopus: 27)",    

        },
        2:{
            "position":"Electricity Market Settlement Assistant Specialist",
            "startdate":"01.01.2023",
            "enddate":"01.03.2024",
            "department":"Registration and Settlement Department",
            "workplace":"EXIST (Energy Exchange Istanbul)",
            "accomplishment0":"Following the settlement process, preparing monthly reports and specialized reports",
            "accomplishment1":"Calculation of payables and receivables originating from the day ahead market, intra-day market, balancing power market activities, renewable energy support mechanism and energy imbalances",
            "accomplishment2":"Informing market participants about settlement process",
            "accomplishment3":"Built a mail automation for calculating exempted advance amount and notifying participant about amount and due date on daily basis",    
        },
        1:{
            "position":"Electricity Market Settlement Specialist",
            "startdate":"01.03.2024",
            "enddate":"Present",
            "department":"Registration and Settlement Department",
            "workplace":"EXIST (Energy Exchange Istanbul)",
            "accomplishment0":"Built a Python desktop applications (Tkinter) for controlling both Retroactive Adjustments (GDDK) and unlicensed power generation/renumeration (LÜYTOB) processes",
            "accomplishment1":"Built multiple Python web-based reports (streamlit) including UEVM, KÜPST, imbalance settlement and more",
            "accomplishment2":"Built a several Python Scripts-Notebooks-Apps and Excel Macros in order to reduce manual efforts",
            "accomplishment3":"Created a Python library for EPYS and Transparency platform",    

        }



    },

    "education": {
        1: {
            "degree":"Ph. D. (Candidate)",
            "departmant":"Electrical Engineering",
            "startdate":"1.09.2021",
            "enddate":"Present",
            "university":"Istanbul Technical University",
            "gpa":"3.79",
            "keyword0":"Electricity market",
            "keyword1":"Optimization",
            "keyword2":"MAS (Multi-Agent Systems)",
            "keyword3":"ML (Machine learning)",
            "thesis":"Multi-agent systems",

        },
        2: {
            "degree":"M. Sc.",
            "departmant":"Electrical Engineering",
            "startdate":"1.09.2019",
            "enddate":"1.06.2021",
            "university":"Istanbul Technical University",
            "gpa":"3.38",
            "keyword0":"Distribution network",
            "keyword1":"k-Means clustering",
            "keyword2":"Monte Carlo Simulation",
            "keyword3":"Renewables ",
            "thesis":"Optimal Allocation of Renewable Distributed Generations including Uncertainties by Proposed Novel Algorithm and Hourly Network Analysis",
            

        },
        3: {
            "degree":"B. Sc.",
            "departmant":"Electrical Engineering",
            "startdate":"1.09.2015",
            "enddate":"1.07.2019",
            "university":"Istanbul Technical University",
            "gpa":"3.06",
            "keyword0":"FMEA (Failure Mode and Effect Analysis)",
            "keyword1":"Power transformers",
            "keyword2":"Supply continuity",
            "keyword3":"Risk management",
            "thesis":"Risk Assessment by Using Failure Modes and Effects Analysis (FMEA) Based on Power Transformer",

        }},

    "publications":{
        1:{
            "title":"Energy Management between Zones of Smart Multi-Microgrid System with Renewable Generation to Increase Grid Resilience",
            "authors":"Berk Dirmilli, Onur Hakkı Eyuboğlu, Ömer Gül",
            "keywords":"Energy management, Microgrid, Resilience, Renewables",
            "publication":"IEEE - 2022 4th Global Power, Energy and Communication Conference (GPECOM)",
            "year":"01.06.2022",
            "doi":"https://doi.org/10.1109/GPECOM55404.2022.9815764"
        },

        2:{
            "title":"Optimal Allocation of Multiple Distributed Generations including Uncertainties in Distribution Networks by k-Means Clustering and Particle Swarm Optimization Algorithms",
            "authors":"Onur Hakkı Eyuboğlu, Ömer Gül",
            "keywords":"Distributed power generation, k-Means clustering, Particle-swarm optimization (PSO), Power loss reduction",
            "publication":"Renewable Energy and Power Quality Journal (RE&PQJ)",
            "year":"01.09.2021",
            "doi":"https://www.icrepq.com/icrepq21/220-21-hakki.pdf"

        },

        3:{
            "title":"Monte Carlo Simulation of Electric Vehicle Loads Respect To Return Home From Work And Impacts To The Low Voltage Side Of Distribution Network",
            "authors":"Önder Polat, Onur Hakkı Eyüboğlu, Ömer Gül",
            "keywords":"Distribution network, Electrical vehicles, EV impacts, Monte Carlo simulation",
            "publication":"Springer – Electrical Engineering",
            "year":"01.02.2021",
            "doi":"https://doi.org/10.1007/s00202-020-01093-5"

        },

        4:{
            "title":"Risk Assessment by Using Failure Modes and Effects Analysis (FMEA) Based on Power Transformer Aging for Maintenance and Replacement Decision",
            "authors":"Onur Hakkı Eyüboğlu, Burak Dindar, Ömer Gül",
            "keywords":"Failure causes, Failure Modes and Effects Analysis (FMEA), Power transformers, Risk assessment",
            "publication":"IEEE - 2020 2nd Global Power, Energy and Communication Conference (GPECOM)",
            "year":"01.11.2020",
            "doi":"https://doi.org/10.1109/GPECOM49333.2020.9247887"

        },

        5:{
            "title":"Series Resonance Type Fault Current Limiter for Fault Current Limitation and Voltage Sag Mitigation in Electrical Distribution Network",
            "authors":"Onur Hakkı Eyüboğlu, Burak Dindar, Ömer Gül",
            "keywords":"Distribution network, Fault current limiter, Series resonance, Voltage sag",
            "publication":"IEEE - 2020 2nd Global Power, Energy and Communication Conference (GPECOM)",
            "year":"01.11.2020",
            "doi":"https://doi.org/10.1109/GPECOM49333.2020.9247878"

        },



    }



    }

// Experience
for (let i = 1; i <= Object.keys(information.experience).length; i++) {
    var clone = $('#ExperienceClone').clone()[0];
    console.log(i, clone)
    clone.id = "experience_"+i
    clone.querySelector("span").textContent = information.experience[i].startdate + " - "+ information.experience[i].enddate;    
    clone.querySelector("h5").textContent = information.experience[i].position + " | "+ information.experience[i].workplace;    
    clone.querySelectorAll(".accomplishment").forEach(function(e, index){e.textContent = information.experience[i]["accomplishment" + index]})
    $("#ExperienceDiv").append(clone)
  }
  $('#ExperienceClone').remove()

  for (let i = 1; i <= Object.keys(information.education).length; i++) {
    var clone = $('#EducationClone').clone()[0];
    console.log(i, clone)
    clone.id = "education_"+i
    clone.querySelector("span").textContent = information.education[i].startdate + " - "+ information.education[i].enddate;    
    clone.querySelector("h5").textContent = information.education[i].departmant + " | "+ information.education[i].degree;
    clone.querySelector("p").textContent = "Thesis: "+information.education[i].thesis;
    clone.querySelectorAll(".keyword").forEach(function(e, index){e.textContent = information.education[i]["keyword" + index]})
    $("#EducationDiv").append(clone)
  }
  $('#EducationClone').remove()

  for (let i = 1; i <= Object.keys(information.publications).length; i++) {
    var clone = $('#PublicationsClone').clone()[0];
    console.log(i, clone)
    clone.id = "publications_"+i
    clone.querySelector("a").textContent = information.publications[i].title 
    clone.querySelector("a").href = information.publications[i].doi 
    clone.querySelector(".authors").textContent = information.publications[i].authors 
    clone.querySelector(".publication-keywords").textContent = "Keywords: " + information.publications[i].keywords
    clone.querySelector("h6").textContent = information.publications[i].publication + " | "+ information.publications[i].year;
    $("#PublicationsDiv").append(clone)
  }
  $('#PublicationsClone').remove()
  
