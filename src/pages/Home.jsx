function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to InkiDatabase</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your central hub for team collaboration and management
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Manage Groups</h2>
            <p className="text-gray-600">
              Create and manage teams, track members, and organize your workflow efficiently.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Collaborate</h2>
            <p className="text-gray-600">
              Work together seamlessly with your team members across different groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
