import React from 'react'
import Userdemo from '../components/Userdemo';


const UserAnalysis = () => {
  return (
    <div className="bg-zinc-100">
      <h2>UserAnalysis</h2>
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">User Demographics</h2>
                        <img src="https://placehold.co/300x180" alt="Age Demographics" className="mb-2"/>
                        <div>🔵 30 years and below - 47%</div>
                            <div>🟢 31-60 years - 35%</div>
                            <div>🔴 above 60 years - 18%</div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Gender Split</h2>
                        <img src="https://placehold.co/300x180" alt="Gender Split"/>
                        <div className="text-sm">
                            <div>🔵 Men - 57%</div>
                            <div>🟢 Women - 43%</div>
                        </div>
                    </div>
                </div>
        
                
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Driver vs Rider Ratio</h2>
                    <img src="https://placehold.co/600x200" alt="Driver vs Rider Ratio"/>
                </div>
        
                
                <div>
                    <h2 className="text-lg font-semibold mb-2">Geographic Distribution</h2>
                    <img src="https://placehold.co/600x300" alt="Geographic Distribution"/>
                    <div className="text-sm mt-2">
                        <div>🔵 Registered Users</div>
                        <div>🟢 New Users</div>
                        <div>🔴 Drivers</div>
                    </div>
                </div>
            </div>

    </div>

  )
}

export default UserAnalysis;