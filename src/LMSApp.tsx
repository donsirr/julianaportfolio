import { useState } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { ArrowLeft } from "lucide-react"

type Subject = {
  id: string
  name: string
  description: string
}

type Module = {
  id: string
  subjectId: string
  name: string
  description: string
}

type Activity = {
  id: string
  moduleId: string
  name: string
  description: string
  type: 'homework' | 'quiz' | 'reading' | 'ACTIVITY'
  dueDate?: string
  link?: string
}

// Sample data
const subjects: Subject[] = [
  {
    id: 'cosacc',
    name: 'Cost Accounting and Control',
    description: 'COSACC(BSA-1-A)'
  },
  {
    id: 'ecodev',
    name: 'Economic Development',
    description: 'ECODEV(BSA-1-A)'
  },
  {
    id: 'nstp2',
    name: 'National Service Training Program 2',
    description: 'NSTP 2(BSA-1-A)'
  },
  {
    id: 'espacoac',
    name: 'Essentials of Partnership and Corporation Accounting',
    description: 'ESPACOAC(BSA-1-A)'
  },
  {
    id: 'finaccrep',
    name: 'Financial Accounting and Reporting',
    description: 'FINACCREP(BSA-1-A)'
  },
  {
    id: 'pathfit2',
    name: 'Physical Activity Towards Health and Fitness 2',
    description: 'PEF2(BSA-1-A)'
  },
  {
    id: 'rlw',
    name: "Rizal's Life, Works, and Writings",
    description: 'RLW(BSA-1-A)'
  },
  {
    id: 'sts',
    name: "Science, Technology and Society",
    description: 'STS(BSA-1-A)'
  },
  {
    id: 'sselect',
    name: "Social Sciences Elective",
    description: 'SSELECT(BSA-1-A)'
  },
]

const modules: Module[] = [
  {
    id: 'stsa',
    subjectId: 'sts',
    name: 'Module A: Introduction: Reality and Knowledge',
    description: 'Science, Technology and Society'
  },
  {
    id: 'stsb',
    subjectId: 'sts',
    name: 'Module B: Scientific Inquiry, Technology, and Society',
    description: 'Science, Technology and Society'
  },
  {
    id: 'stsc',
    subjectId: 'sts',
    name: 'Module C: Historical Antecendents',
    description: 'Science, Technology and Society'
  },
  {
    id: 'stsd',
    subjectId: 'sts',
    name: 'Module D: Intellectual Revolutions',
    description: 'Science, Technology and Society'
  },
  {
    id: 'stse',
    subjectId: 'sts',
    name: 'Module E: Issues and Consequences of Technology',
    description: 'Science, Technology and Society'
  },
  {
    id: 'stsf',
    subjectId: 'sts',
    name: 'Module F: Ecosystems, Biodiversity and Global Citizenship',
    description: 'Science, Technology and Society'
  },
  {
    id: 'stsh',
    subjectId: 'sts',
    name: 'Module H: Cybersecurity',
    description: 'Science, Technology and Society'
  },
  {
    id: 'sts-ecobrick',
    subjectId: 'sts',
    name: 'ECOBRICK',
    description: 'Science, Technology and Society'
  },

  {
    id: 'sselect-m1',
    subjectId: 'sselect',
    name: 'M1 Activity',
    description: 'Social Sciences Elective'
  },
  {
    id: 'sselect-m2',
    subjectId: 'sselect',
    name: 'M2 Formative Activity: Habit Formation',
    description: 'Social Sciences Elective'
  },
  {
    id: 'sselect-grpwork1',
    subjectId: 'sselect',
    name: 'Group Work: Creating Reviewers',
    description: 'Social Sciences Elective'
  },
  {
    id: 'sselect-grpwork2',
    subjectId: 'sselect',
    name: 'Group Work: Modelling a Lifelong Learner',
    description: 'Social Sciences Elective'
  },
  {
    id: 'sselect-m8',
    subjectId: 'sselect',
    name: 'M8 Formative Activities: Portfolio of Well-Being',
    description: 'Social Sciences Elective'
  },
  {
    id: 'sselect-final',
    subjectId: 'sselect',
    name: 'Final Requirement: Service Learning Activity',
    description: 'Social Sciences Elective'
  },
  {
    id: 'sselect-reflection',
    subjectId: 'sselect',
    name: 'Parting Reflection',
    description: 'Social Sciences Elective'
  },
]

const activities: Activity[] = [
  {
    id: 'sts-moduleb-activity',
    moduleId: 'stsb',
    name: 'Tote Bag Activity',
    description: 'Tote Bag',
    type: 'ACTIVITY',
    dueDate: '2025-05-24',
    link: 'https://drive.google.com/drive/folders/15aRtwpVQrWSfRYtDheYjfCjmpXkUG835'
  },
  {
    id: 'sts-modulec-activity',
    moduleId: 'stsc',
    name: 'Activity',
    description: 'Information about the Calculator',
    type: 'ACTIVITY',
    dueDate: '2025-05-24',
    link: 'https://docs.google.com/document/d/13rRdiByc6msgMO6rAbEm594toWObRZGR/'
  },
  {
    id: 'sts-moduled-activity',
    moduleId: 'stsd',
    name: 'Activity',
    description: 'Example of an intellectual revolutions',
    type: 'ACTIVITY',
    dueDate: '2025-05-24',
    link: 'https://docs.google.com/document/d/1GqI3j6nqtbkbysXnW9pR1Uftq91mXZdegW1BvixhCxk/'
  },
  {
    id: 'sts-modulef-activity',
    moduleId: 'stsf',
    name: 'Group Activity',
    description: 'Case Study Analysis',
    type: 'ACTIVITY',
    dueDate: '2025-04-08',
    link: 'https://docs.google.com/document/d/1IpMPsALL4zT-5AwQjeyYCkU2hwPHiZ9AJ1dI0XPVdYA/edit?usp=sharing'
  },
  {
    id: 'sts-moduleh-activity',
    moduleId: 'stsh',
    name: 'Vlog Activity',
    description: 'STS Vlog',
    type: 'ACTIVITY',
    dueDate: '2025-04-08',
    link: 'https://drive.google.com/file/d/19GrDWnpJ1HokPHL2wOzXD1-C4V5N_Uex/view'
  },
  {
    id: 'sts-ecobrick-activity',
    moduleId: 'sts-ecobrick',
    name: 'ECOBRICK',
    description: 'STS Ecobrick',
    type: 'ACTIVITY',
    dueDate: '2025-04-08',
    link: 'https://drive.google.com/drive/folders/15HhPczZz6Wfiq_ofMaZ0Rcpt6BJtBW3U'
  },
  {
    id: 'ssselect-m8-pt1',
    moduleId: 'sselect-m8',
    name: 'Snapshots of Gratitude',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-08',
    link: 'https://docs.google.com/document/d/14SFYLciAfnDPFalYG_YpadxlBjLobHjscATKbSJsQvI'
  },
  {
    id: 'ssselect-m8-pt2',
    moduleId: 'sselect-m8',
    name: 'Positive Psychology',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-02',
    link: 'https://docs.google.com/document/d/10McV14XA5rVt7ivRr9Wjt9_KO3D3Lm_zckton3YZ17A'
  },
  {
    id: 'ssselect-m1-pt1',
    moduleId: 'sselect-m1',
    name: 'Caring for Mental Health',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-27',
    link: 'https://docs.google.com/document/d/14n0ywGdRRzdxCVXxAsZwUSsesslx-fxjM-T63gjNcls'
  },
  {
    id: 'ssselect-m2-pt1',
    moduleId: 'sselect-m2',
    name: 'Habit Formation',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-27',
    link: 'https://docs.google.com/document/d/15Erb_0Qtm78ScYgFRCzmecVAr1bFZFWPz3b6f_0Mqp4'
  },
  {
    id: 'ssselect-grpwork-pt1',
    moduleId: 'sselect-grpwork2',
    name: 'Modelling a Lifelong Learner',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-27',
    link: 'https://docs.google.com/document/d/16OAu3xdW5W8YXNjsDvIDYkS-44i6CbUDHlZd7x4hxG0'
  },
  {
    id: 'ssselect-reflection-pt1',
    moduleId: 'sselect-reflection',
    name: 'Parting Reflection',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-27',
    link: 'https://docs.google.com/document/d/16ljafdq3KqkQYeCY074MvjqEWJRKJ2azVRaThGwP8Ow'
  },
  {
    id: 'ssselect-grpwork-pt2',
    moduleId: 'sselect-grpwork1',
    name: 'Creating Reviewers',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-27',
    link: 'https://drive.google.com/drive/folders/1NvFEuJyX6yxgZXzn9JmRUuhiTt-sYJ_9'
  },
  {
    id: 'ssselect-final-pt1',
    moduleId: 'sselect-final',
    name: 'Service Learning Activity',
    description: 'SSELECT Activity',
    type: 'ACTIVITY',
    dueDate: '2025-05-27',
    link: 'https://drive.google.com/drive/folders/1zhZNgzwWYQVovl916EW4QnZ8L9cbq8fP'
  },
]

export default function LMSApp() {
  const [currentView, setCurrentView] = useState<'subjects' | 'modules' | 'activities'>('subjects')
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setCurrentView('modules')
  }

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module)
    setCurrentView('activities')
  }

  const handleBack = () => {
    if (currentView === 'activities') {
      setCurrentView('modules')
      setSelectedModule(null)
    } else if (currentView === 'modules') {
      setCurrentView('subjects')
      setSelectedSubject(null)
    }
  }

  const getModulesForSubject = (subjectId: string) => {
    return modules.filter(module => module.subjectId === subjectId)
  }

  const getActivitiesForModule = (moduleId: string) => {
    return activities.filter(activity => activity.moduleId === moduleId)
  }

  const handleViewDetails = (link?: string) => {
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Added your name in top left corner */}
        <div className="mb-8 md:auto">
          <div className="text-lg font-semibold">BITUIN, JULIANA ERIKA P.</div>
          <div className="text-gray-600">24-0972-168@auf.edu.ph</div>
        </div>
        {/* Updated title and added subtitle */}
        <div className="text-center mb-8 pt-16 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold">My Angelenean Experience</h1>
          <p className="text-gray-600 mt-2">
            Welcome to my academic portfolio which will highlight my angelenean experience.
          </p>
        </div>

        {currentView !== 'subjects' && (
          <Button variant="outline" onClick={handleBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {currentView === 'modules' ? 'Subjects' : 'Modules'}
          </Button>
        )}

        {currentView === 'subjects' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map(subject => (
                <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent 
                    className="p-6" 
                    onClick={() => handleSubjectSelect(subject)}
                  >
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{subject.name}</CardTitle>
                    </CardHeader>
                    <p className="text-gray-600">{subject.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentView === 'modules' && selectedSubject && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Modules for {selectedSubject.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getModulesForSubject(selectedSubject.id).map(module => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent 
                    className="p-6" 
                    onClick={() => handleModuleSelect(module)}
                  >
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{module.name}</CardTitle>
                    </CardHeader>
                    <p className="text-gray-600">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentView === 'activities' && selectedModule && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Activities for {selectedModule.name}</h2>
            <div className="space-y-4">
              {getActivitiesForModule(selectedModule.id).map(activity => (
                <Card key={activity.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium">{activity.name}</h3>
                        <p className="text-gray-600 mt-1">{activity.description}</p>
                        <div className="mt-2 flex items-center space-x-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {activity.type}
                          </span>
                          {activity.dueDate && (
                            <span className="text-sm text-gray-500">
                              Due: {new Date(activity.dueDate).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => handleViewDetails(activity.link)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}