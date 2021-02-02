function Contacts() {
    const styleObj = {
        listStyle: "none"
    }
    return(
    <div className="contact-container">
        <ul style={styleObj}>
            <li>Social Media: <a href="https://www.linkedin.com/in/ajike-turner/">LinkedIn</a></li>
            <li>Email: ajike3@gmail.com</li>
        </ul>
    </div>
    )
}   

export default Contacts;