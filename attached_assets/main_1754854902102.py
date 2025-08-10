
from flask import Flask, render_template, send_file, jsonify
import os

app = Flask(__name__)

# Sample portfolio data - you can customize this with your actual information
portfolio_data = {
    "name": "Vaibhav Bhagat",
    "title": "Data Engineer",
    "email": "bhagatvaibhav411@gmail.com",
    "phone": "+1 (959)2418970",
    "location": "Bridgeport , Connecticut",
    "summary": "Passionate Data Engineer with experience in data processing, analytics, and machine learning. Seeking internship opportunities in Cell Engineering and data-driven solutions.",
    "skills": [
        "Python", "SQL", "Pandas", "NumPy", "ADO.NET",
        "Asp.Net", "C++", "Machine Learning",
        "Azure", "MongoDB", "AWS", "Java"
    ],
    "experience": [
        {
            "title": "Project Developer Intern",
            "company": "Toshal Infotech",
            "duration": "Summer 2023",
            "description": "Developed a secure, role-based Cab Management System using C#, ASP.NET, and SQL Server, optimizing booking workflows and improving system performance by up to 13%."
        },
        {
            "title": "Trainee",
            "company": "PALSOFT INDIA",
            "duration": "Summer 2022",
            "description": "Developed a data-driven ASP.NET MVC web application with MSSQL to manage customer information, enabling structured coding, efficient data handling, and insightful KPI reporting."
        }
    ],
    "education": [
        {
            "degree": "Master's in Computer Science",
            "school": " University of Bridgeport",
            "year": "2024",
            "gpa": "3.71/4.0"
        },
        {
            "degree": "Bachelor's in Computer Engineering",
            "school": " Sarvajanik college of engineering & technology",
            "year": "2022",
            "gpa": "3.80/4.0"
        }
    ],
    "projects": [
  {
    "name": "Cab Management System",
    "description": "Developed a multi-tiered cab management system with role-based access, optimized data retrieval, and enhanced booking workflows",
    "technologies": ["C#", "ADO.NET", "SQL Server"]
  },
  {
    "name": "Inventory Management System for Wholesale Dealer",
    "description": "Building a web-based inventory system to streamline product tracking, order management, and stock control",
    "technologies": ["ASP.NET", "SQL Server", "C#"]
  },
  {
    "name": "Unity Game Development (Self-Learning)",
    "description": "Developing 2D and 3D games using Unity and C#, implementing gameplay mechanics and physics through tutorials",
    "technologies": ["Unity", "C#"]
  }
]

}

@app.route('/')
def home():
    return render_template('index.html', data=portfolio_data)

@app.route('/api/portfolio')
def api_portfolio():
    return jsonify(portfolio_data)

@app.route('/download-resume')
def download_resume():
    resume_path = "C:/Users/bhaga/OneDrive/Desktop/Resume/vaibhav_portfolio_20250810_170414/resume.pdf"
    if os.path.exists(resume_path):
        return send_file(resume_path, as_attachment=True, download_name="Vaibhav_Bhagat_Resume.pdf")
    else:
        return "Resume not found", 404

if __name__ == '__main__':
    app.run()
