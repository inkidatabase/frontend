import { Link } from 'react-router-dom'

function GroupList() {
  // This is just example data - replace with your actual data source
  const groups = [
    { id: 1, name: 'Design Team', memberCount: 5 },
    { id: 2, name: 'Development Team', memberCount: 3 },
    { id: 3, name: 'Marketing Team', memberCount: 7 },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Groups</h1>
      <div className="grid gap-4">
        {groups.map((group) => (
          <Link
            key={group.id}
            to={`/groups/${encodeURIComponent(group.name)}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{group.name}</h2>
              <span className="text-sm text-gray-500">{group.memberCount} members</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GroupList
