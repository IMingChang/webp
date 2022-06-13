import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const TimeLong = () => {
    const [data, setData] = useState({
        conuter: 0,
        startTime: 0,
        endTime: 0,
        time: 0,
        mouseDownTime: 0,
        mouseUpTime: 0,
        longTime: 0,
        component:0
    });
    function handleClick() {
        if (data.conuter === 0) {
            setData(prevState => ({
                ...prevState,
                startTime: Date.now()
            }));
        }
        else if (data.conuter > 0) {
            setData(prevState => ({
                ...prevState,
                endTime: Date.now()
            }));
        }
        setData(prevState => ({
            ...prevState,
            time: data.conuter < 1 ? 0 : Date.now() - data.startTime,
            conuter: data.conuter + 1
        }));
    }
    function mouseDown() {
        setData(prevState => ({
            ...prevState,
            mouseDownTime: Date.now()
        }));
    }
    function mouseUp() {
        setData(prevState => ({
            ...prevState,
            mouseUpTime: Date.now(),
            longTime: Date.now() - data.mouseDownTime
        }));
    }
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Title mouseUp={mouseUp} mouseDown={mouseDown} handleClick={handleClick} data={data}  />
            <Icon icon={<AcUnitIcon/>} />
            <br />
        </div>
    )
}
const Icon = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    {props.icon}
                </Grid>
            </Grid>
        </Container>
    )
}
const Title = (props) => {
    console.log(props);
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom component="div">
                        {props.data.conuter}
                    </Typography>
                    <Button variant="contained" onMouseDown={props.mouseDown} onMouseUp={props.mouseUp} onClick={props.handleClick}>
                        Click me
                    </Button>
                    <Typography variant="body1" gutterBottom>
                        共按了{props.data.time}ms
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        長按{props.data.longTime}ms
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    {props.data.icon}
                </Grid>
            </Grid>
        </Container>
    )
}

export default TimeLong
