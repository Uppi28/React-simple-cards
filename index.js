function Person() {
    return(
        <div className="person">
            <h1>Upendra</h1>
            <p>My age is : 24</p>
        </div> 
    )
}
ReactDOM.render(<Person/>, document.querySelector('#p1'))