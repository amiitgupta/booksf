// Section Seller Form Starts
var stateObject = {
    "Engineering": {
    "COMPUTER ENGINEERING": {
        "FE Sem - 1": ["Engineering Mathematics I", "Systems in Mechanical Engineering", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "FE Sem - 2": ["Engineering Mathematics II", "Engineering Graphics", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "SE Sem - 1": ["Object Oriented Programming", "Data Structure & Algorithms", "Computer Organization & Architecture", "Discrete Mathematics", "Digital Electronics & Logic Design"],
        "SE Sem - 2": ["Advance Data Structures", "Microprocessor", "Principles of Programming Languages", "Computer Graphics", "Engineering Mathematics - 3"],
        "TE Sem - 1": ["Theory Of Computation", "DataBase Management System", "Computer Networks", "Information System & Engineering Economics", "Software Engineering & Project Management"],
        "TE Sem - 2": ["Design & Analysis of Algorithms", "Embedded Systems & Internet of Things", "Software Modelling & Design", "System Programming & Operating System", "Web Technology"],
        "BE Sem - 1": ["High Performance Computing", "Artificial Intelligence and Robotics", "Data Analytics", "Elective - I (A) Digital Signal Processing", "Elective - I (B) Software Architecture and Design", "Elective - I (C) Pervasive and Ubiquitous Computing",
        "Elective - I (D) Data Mining and Warehousing", "Elective - II (A) Distributed Systems", "Elective - II (B) Software Testing and Quality Assurance", "Elective - II (C) Operations Research", "Elective - II (D) Mobile Communication"],
        "BE Sem - 2": ["Machine Learning", "Information and Cyber Security", "Elective - III (A) Advanced Digital Signal Processing", "Elective - III (B) Compilers", "Elective - III (C) Embedded and Real Time Operating Systems",
        "Elective - III (D) Soft Computing and Optimization Algorithms", "Elective - IV (A) Software Defined Networks", "Elective - IV (B) Human Computer Interface", "Elective - IV (C) Cloud Computing"]
    },
    "INFORMATION TECHNOLOGY": {
        "FE Sem - 1": ["Engineering Mathematics I", "Systems in Mechanical Engineering", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "FE Sem - 2": ["Engineering Mathematics II", "Engineering Graphics", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "SE Sem - 1": ["Discrete Structures", "Computer Organization & Architecture", "Digital Electronics & Logic Design", "Fundamentals of Data Structures", "Problem Solving & Object Oriented Programming"],
        "SE Sem - 2": ["Computer Graphics", "Engineering Mathematics III", "Data Structures and Files", "Processor Architecture and Interfacing", "Foundations of Communication and Computer"],
        "TE Sem - 1": ["DataBase Management Systems", "Human Computer Interaction", "Operating System", "System Programming & Operating System", "Theory Of Computation"],
        "TE Sem - 2": ["Computer Network Technology", "Systems Programming", "Design & Analysis of Algorithms", "Cloud Computing", "Data Science and Big Data Analytics"],
        "BE Sem - 1": ["Information and Cyber Security", "Machine Learning and Applications", "Software Design and Modeling", "Elective - I (A) Wireless Communications", "Elective - I (B) Natural Language Processing", "Elective - I (C) Usability Engineering",
        "Elective - I (D) Multicore and Concurrent Systems", "Elective - I (E) Business Analytics and Intelligence", "Elective - II (A) Software Defined Networks", "Elective - II (B) Soft Computing",
        "Elective - II (C) Software Testing and Quality Assurance", "Elective - II (D) Compiler Construction", "Elective - II (E) Gamification"],
        "BE Sem - 2": ["Distributed Computing System", "Ubiquitous Computing", "Elective - III (A) Internet of Things (IoT)", "Elective - III (B) Information storage and retrieval", "Elective - III (C) Multimedia Techniques", "Elective - III (D) Internet and Web Programming",
        "Elective - III (E) Computational Optimization", "Elective - IV (A) Rural Technologies and Community Development", "Elective - IV (B) Parallel Computing", "Elective - IV (C) Computer Vision", "Elective - IV (D) Social Media Analytics"]
    },
    "MECHANICAL ENGINEERING": {
        "FE Sem - 1": ["Engineering Mathematics I", "Systems in Mechanical Engineering", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "FE Sem - 2": ["Engineering Mathematics II", "Engineering Graphics", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "SE Sem - 1": ["Manufacturing Process I", "Thermodynamics", "Material Science", "Strength of Materials", "Engineering Mathematics III"],
        "SE Sem - 2": ["Applied Thermodynamics", "Electrical and Electronics Engineering", "Engineering Metallurgy", "Fluid Mechanics", "Theory of Machine I"],
        "TE Sem - 1": ["Design of Machine Elements I", "Heat Transfer", "Metrology and Quality Control", "Theory of Machine II", "Turbo Machines"],
        "TE Sem - 2": ["Numerical Methods and Optimization", "Design of Machine Elements II", "Refrigeration and Conditioning", "Mechatronics", "Manufacturing Process II"],
        "BE Sem - 1": ["Hydraulics and Pneumatics", "CAD CAM Automation", "Dynamics of Machinery", "Elective - I (A) Finite Element Analysis", "Elective - I (B) Computational Fluid Dynamics", "Elective - I (C) Heating Ventilation and Air Conditioning",
        "Elective - II (A) Automobile Engineering", "Elective - II (B) Operation Research", "Elective - II (C) Energy Audit and Management"],
        "BE Sem - 2": ["Energy Engineering", "Mechanical System Design", "Elective - III (A) Tribology", "Elective - III (B) Industrial Engineering", "Elective - III (C) Robotics", "Elective - IV (A) Advanced Manufacturing Processes", "Elective - IV (B) Solar & Wind Energy",
        "Elective - IV (C) Product Design and Development"]
    },
    "ELECTRONICS & TELECOMMUNICATION ENGG": {
        "FE Sem - 1": ["Engineering Mathematics I", "Systems in Mechanical Engineering", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "FE Sem - 2": ["Engineering Mathematics II", "Engineering Graphics", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "SE Sem - 1": ["Signals and Systems", "Electronic Devices & Circuits", "Electrical Circuits & Machines", "Data Structures & Algorithms", "Digital Electronics"],
        "SE Sem - 2": ["Analog Communication", "Control System", "Integrated Circuits", "Object Oriented Programming", "Engineering Mathematics III"],
        "TE Sem - 1": ["Advanced Processors", "Digital Communication", "Digital Signal Processing", "Electro Magnetics", "Micro Controllers"],
        "TE Sem - 2": ["Power Electronics", "Information Theory, Coding, & Communication Networks", "Business Management", "Advance Processors", "System Programming and Operating System"],
        "BE Sem - 1": ["VLSI Design & Technology", "Computer Networks & Security", "Radiation & Microwave Techniques", "Elective - I (A) Digital Image and Video Processing", "Elective - I (B) Industrial Drives and Control", "Elective - I (C) Embedded Systems & RTOS",
        "Elective - I (D) Internet of Things", "Elective - II (A) Wavelets", "Elective - II (B) Electronics Product Design", "Elective - II (C) Optimization Techniques", "Elective - II (D) Artificial Intelligence", "Elective - II (E) Electronics in agriculture"],
        "BE Sem - 2": ["Mobile Communication", "Broadband Communication Systems", "Elective - III (A) Machine Learning", "Elective - III (B) PLC s and Automation", "Elective - III (C) Audio and Speech Processing", "Elective - III (D) Software Defined Radio",
        "Elective - III (E) Audio Video Engineering", "Elective - IV (A) Robotics", "Elective - IV (B) Biomedical Electronics", "Elective - IV (C) Wireless Sensor Networks", "Elective - IV (D) Renewable Energy Systems"]
    },
    "ELECTRICAL ENGINEERING": {
        "FE Sem - 1": ["Engineering Mathematics I", "Systems in Mechanical Engineering", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "FE Sem - 2": ["Engineering Mathematics II", "Engineering Graphics", "Engineering Chemistry", "Engineering Physics", "Basic Electronics Engineering", "Basic Electrical Engineering", "Engineering Mechanics", "Programming and Problem Solving"],
        "SE Sem - 1": ["Power Generation Technologies", "Material Science", "Analog & Digital Electronics", "Electrical Measurements & Instrumentation", "Engineering Mathematics III"],
        "SE Sem - 2": ["Electrical Machines I", "Fundamental of Microcontrollers and It's Applications", "Network Analysis", "Numerical Methods & Computer Programming", "Power System I"],
        "TE Sem - 1": ["Advanced Microcontrollers and It's Applications", "Electrical Installation, Maintenance & Testing", "Electrical Machines II", "Industrial & Technology Management", "Power Electronics"],
        "TE Sem - 2": ["Power System II", "Control System I", "Utilization of Electrical Energy", "Design of Electrical Machines", "Energy Audit and Management"],
        "BE Sem - 1": ["Power System Operation and Control", "PLC and SCADA Applications", "Control System II", "Elective - I (A) Fundamentals of Microcontroller MSP430 and its Applications", "Elective - I (B) Power Quality", "Elective - I (C) Renewable Energy Systems",
        "Elective - I (D) Digital Signal Processing", "Elective - II (A) Restructuring and Deregulation", "Elective - II (B) Electromagnetic Fields", "Elective - II (C) EHVAC Transmission", "Elective - II (D) Electric and Hybrid Vehicles", "Elective - II (E) Special Purpose Machines"],
        "BE Sem - 2": ["Switchgear and Protection", "Power Electronic Controlled Drives", "Elective - III (A) High Voltage Engineering", "Elective - III (B) HVDC and FACTS", "Elective - III (C) Digital Control System", "Elective - III (D) Intelligent Systems and Applications in Electrical Engineering",
        "Elective - III (E) Analog Electronics and Sensing Technology", "Elective - IV (A) Smart Grid", "Elective - IV (B) Robotics and Automation", "Elective - IV (C) Illumination Engineering", "Elective - IV (D) VLSI Design"]
    },
},

"Pharmacy": {},
"SIBACA": {}
}
window.onload = function () {
    var domainSel = document.getElementById("domainSel"),
        branchSel = document.getElementById("branchSel"),
        yearSemSel = document.getElementById("yearSemSel"),
        booksSel = document.getElementById("booksSel");


    for (var domain in stateObject) {
        domainSel.options[domainSel.options.length] = new Option(domain, domain);
    }

domainSel.onchange = function() {
    branchSel.length = 1; // remove all options bar first
    yearSemSel.length = 1; // remove all options bar first
    booksSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    for (var branch in stateObject[this.value]) {
        branchSel.options[branchSel.options.length] = new Option(branch, branch);
    }
}
    domainSel.onchange(); // reset in case page is reloaded
    branchSel.onchange = function () {
        yearSemSel.length = 1; // remove all options bar first
        booksSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var yearSem in stateObject[domainSel.value][this.value]) {
            yearSemSel.options[yearSemSel.options.length] = new Option(yearSem, yearSem);
        }
    }

    domainSel.onchange(); // reset in case page is reloaded
    branchSel.onchange(); // reset in case page is reloaded
    yearSemSel.onchange = function () {
        booksSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var books = stateObject[domainSel.value][branchSel.value][this.value];
        for (var i = 0; i < books.length; i++) {
            booksSel.options[booksSel.options.length] = new Option(books[i], books[i]);
        }
    }
}
// Section Seller Form Ends
