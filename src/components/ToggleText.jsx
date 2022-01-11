import React, {useState} from "react";
import styled from "styled-components";



function ToggleText({ text }) {

    const [isShow, setIsShow] = useState(false);

    function toggle() {
        setIsShow(isShow => !isShow);
    }

        const Button = styled.a`
          display: inline-block;
          margin: 30px auto;
          padding: 20px 40px;
          border: 1px solid #282c34;
          border-radius: 30px;
          cursor: pointer;
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          color: #282c34;
          transition: linear .2s;
          :hover {
            color: rgba(135,134,77,0.38);
            border: 1px solid rgba(135,134,77,0.38);
          }
    `

        const TextInside = styled.div `
          color: #282c34;
          font-size: 30px;
          margin-bottom: 20px;
        `

        return (
            <div className={'box'}>
                <Button onClick={toggle}>Click me!</Button>
                {isShow && (
                    <TextInside className={'text-inside'}>
                        {text}
                    </TextInside>
                )}
            </div>
        );
}

export default ToggleText;