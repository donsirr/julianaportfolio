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
    name: 'Module H',
    description: 'Science, Technology and Society'
  },
  {
    id: 'sts-ecobrick',
    subjectId: 'sts',
    name: 'ECOBRICK',
    description: 'Science, Technology and Society'
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