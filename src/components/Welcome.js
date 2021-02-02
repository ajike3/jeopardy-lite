function Welcome(props) {
        return (
        <div>
            <h1>Welcome {props.match.params.name}</h1>
        </div>
    );

}

export default Welcome;