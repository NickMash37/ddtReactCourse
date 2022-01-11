import React from "react";
import styled from "styled-components";

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000)
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }


    render() {

        const NowIs = styled.div`
          display: block;
          margin: 0 auto;
          width: fit-content;
          padding: 20px 20px;
          background-color: #282c34;
          color: white;
          font-size: 28px;
          border-radius: 20px;
    `
        return(
            <NowIs>
                Прямо сейчас - {this.state.time}
            </NowIs>
        )
    }
}