import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <h2 className="text-lg font-semibold">Stay Connected</h2>
      <p className="mt-2">Follow us on our social media channels!</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
      <div className="mt-4 border-t border-gray-600 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer