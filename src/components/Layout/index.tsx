import React from 'react'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return <div className="page__layout">{children}</div>
}

export default Layout
