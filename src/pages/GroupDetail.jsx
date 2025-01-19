import { useParams } from 'react-router-dom'

function GroupDetail() {
  const { groupName } = useParams()
  const decodedGroupName = decodeURIComponent(groupName)

  // This is just example data - replace with your actual data fetching logic
  const groupData = {
    'Design Team': {
      description: 'Our creative team responsible for UI/UX and visual design',
      members: ['Sarah Chen', 'Mike Rodriguez', 'Alex Kim']
    },
    'Development Team': {
      description: 'Full-stack development team building our core products',
      members: ['John Smith', 'Emma Watson', 'David Lee']
    },
    'Marketing Team': {
      description: 'Team handling all marketing and promotional activities',
      members: ['Lisa Park', 'Tom Brown', 'Maria Garcia']
    }
  }

  const group = groupData[decodedGroupName] || {
    description: 'Group description not found',
    members: []
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{decodedGroupName}</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-600 mb-6">{group.description}</p>
        <div>
          <h2 className="text-xl font-semibold mb-4">Members</h2>
          <ul className="space-y-2">
            {group.members.map((member, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{member}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GroupDetail
