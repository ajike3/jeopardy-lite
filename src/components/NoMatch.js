function NoMatch() {
    const styleObj = {
        fontSize: 66,
        color: "#f00",
        textAlign: "center",
        textDecoration: "underline"
    }

    return (
        <h1 style={styleObj}>404! File not found!</h1>
    )
}

export default NoMatch;