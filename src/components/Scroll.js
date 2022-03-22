// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const Scroll = ({children}) => {
    return(
        <div css={css`
        overflow-y: scroll; 
        border: 3px solid black; 
        height: 800px; 
        scrollbar-width: none;
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* Chrome/Safari/Webkit */
        }` }>
            {children}
        </div>
    );
}

export default Scroll