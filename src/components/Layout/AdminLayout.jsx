import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="adminlayout">
        <div>header</div>
        <main>
            <Outlet />
        </main>
        <div>footer</div>
    </div>
  )
}

export default AdminLayout