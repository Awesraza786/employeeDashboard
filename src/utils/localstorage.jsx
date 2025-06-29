
const Employee = [
    {
        id: 1,
        firstName: "Aarav",
        email: "employee1@gmail.com",
        password: "12345678",
        tasks: [
            {
                taskTitle: "Complete Project Report",
                taskDescription: "Finish the monthly project report and submit it to the manager.",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                category: "Reporting",
                startDate: "2024-12-01",
                dueDate: "2024-12-05"
            },
            {
                taskTitle: "Fix Bug #101",
                taskDescription: "Resolve issue #101 in the company web application.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                category: "Development",
                startDate: "2024-12-02",
                dueDate: "2024-12-06"
            },
            {
                taskTitle: "Update Employee Records",
                taskDescription: "Update the HR database with new hires' details.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                category: "HR",
                startDate: "2024-11-28",
                dueDate: "2024-12-03"
            }
        ],
        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 2,
        firstName: "Ishaan",
        email: "employee2@gmail.com",
        password: "12345678",
        tasks: [
            {
                taskTitle: "Prepare Presentation",
                taskDescription: "Create a presentation for the annual team review meeting.",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                category: "Presentation",
                startDate: "2024-12-03",
                dueDate: "2024-12-07"
            },
            {
                taskTitle: "Implement Feature XYZ",
                taskDescription: "Add new feature XYZ to the product as per client requirements.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                category: "Development",
                startDate: "2024-11-25",
                dueDate: "2024-12-02"
            },
            {
                taskTitle: "Client Call Follow-Up",
                taskDescription: "Follow up with the client about the project update.",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                category: "Communication",
                startDate: "2024-12-01",
                dueDate: "2024-12-03"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 3,
        firstName: "Vihaan",
        email: "employee3@gmail.com",
        password: "12345678",
        tasks: [
            {
                taskTitle: "Test New Features",
                taskDescription: "Test all the new features in the staging environment.",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                category: "Testing",
                startDate: "2024-12-02",
                dueDate: "2024-12-08"
            },
            {
                taskTitle: "Code Review",
                taskDescription: "Perform a code review for Team B's pull requests.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                category: "Code Review",
                startDate: "2024-11-29",
                dueDate: "2024-12-01"
            },
            {
                taskTitle: "Fix Frontend Issues",
                taskDescription: "Resolve reported UI issues on the dashboard.",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                category: "Development",
                startDate: "2024-12-01",
                dueDate: "2024-12-04"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 4,
        firstName: "Aditya",
        email: "employee4@gmail.com",
        password: "12345678",
        tasks: [
            {
                taskTitle: "Deploy Application",
                taskDescription: "Deploy the latest build to the production server.",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                category: "Deployment",
                startDate: "2024-12-04",
                dueDate: "2024-12-07"
            },
            {
                taskTitle: "Optimize Database",
                taskDescription: "Optimize the database queries for better performance.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                category: "Database",
                startDate: "2024-11-27",
                dueDate: "2024-12-01"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 5,
        firstName: "Arjun",
        email: "employee5@gmail.com",
        password: "12345678",
        tasks: [
            {
                taskTitle: "Handle Support Tickets",
                taskDescription: "Respond to pending customer support tickets.",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                category: "Support",
                startDate: "2024-12-05",
                dueDate: "2024-12-10"
            },
            {
                taskTitle: "Write Documentation",
                taskDescription: "Document the new API endpoints for internal teams.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                category: "Documentation",
                startDate: "2024-11-29",
                dueDate: "2024-12-03"
            },
            {
                taskTitle: "Team Meeting",
                taskDescription: "Attend the weekly sync-up meeting with the team.",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                category: "Meeting",
                startDate: "2024-11-30",
                dueDate: "2024-12-01"
            }
        ],
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 0
        }
    }
];



const admin = [
    {
        "id": 1,
        "email": "admin1@gamil.com",
        "password": "123"
    }
];

console.log(SetLocalSrong())
// localStorage.clear()
export function SetLocalSrong() {
    localStorage.setItem('employee', JSON.stringify(Employee))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export function getLocalStorage() {
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employee, admin }
}