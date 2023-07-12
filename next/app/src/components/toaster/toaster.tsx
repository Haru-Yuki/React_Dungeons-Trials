'use client'

import {Box, Collapse, IconButton} from "@mui/material";
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToaster} from "@/app/src/redux/reducers/toaster";

const Toaster = () => {
    const toasterConfig = useSelector((state: any) => state.toaster).toaster;
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (toasterConfig.close) {
            setOpen(false);
        } else {
            setOpen(true)
        }
    }, [toasterConfig]);

    if (toasterConfig.message) {
        return (
            <Box sx={{
                width: '60%',
                position: 'sticky',
                top: '10px',
                margin: '0 auto',
                zIndex: '2',
                height: '0px'
            }}>
                <Collapse in={open}>
                    <Alert
                        variant="filled"
                        severity={toasterConfig.type}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false)
                                }}
                            >
                                <CloseIcon fontSize="inherit"/>
                            </IconButton>
                        }
                        sx={{mb: 2}}
                    >
                        {toasterConfig.message}
                    </Alert>
                </Collapse>
            </Box>
        )
    } else {
        return null
    }
}

export default Toaster;