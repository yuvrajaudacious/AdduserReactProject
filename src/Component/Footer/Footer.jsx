import React from 'react'

const Footer = () => {
    let footerStyle =   {
        postion: "absolute",
        top: "1000vh",
        width: "100%",
        height: "100%"
    }
  return (
    <>
    <footer className="bg-dark text-light py-3 my-25"style={footerStyle} >
        <p className='text-center'>
            Copyright &copy; AddUser.com
        </p>
    </footer>
    </>
  )
}

export default Footer