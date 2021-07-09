import React from 'react'

const Footer = () => {
    let footerStyle={
        position: "fixed",
        bottom: 0,
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light text-center py-2" style={footerStyle}>
            <p>
                Copyright &copy; NotesApp ~Sparsh-2512
            </p>
        </footer>
    )
}

export default Footer
