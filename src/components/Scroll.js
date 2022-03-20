
const Scroll = ({children}) => {
    return(
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
            {children}
        </div>
    );
}

export default Scroll